import Database from "better-sqlite3";
import path from "path";

const DB_PATH = path.join(process.cwd(), "data", "waitlist.db");

function getDb() {
  const fs = require("fs");
  const dir = path.dirname(DB_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const db = new Database(DB_PATH);
  db.pragma("journal_mode = WAL");

  db.exec(`
    CREATE TABLE IF NOT EXISTS waitlist (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      invite_code TEXT,
      excitement TEXT,
      verified INTEGER DEFAULT 0,
      verify_code TEXT,
      verify_code_expires TEXT,
      created_at TEXT DEFAULT (datetime('now')),
      ip_address TEXT
    )
  `);

  return db;
}

export interface WaitlistEntry {
  name: string;
  email: string;
  invite_code?: string;
  excitement?: string;
  ip_address?: string;
}

/** Generate a random 6-digit numeric code */
export function generateVerifyCode(): string {
  return String(Math.floor(100000 + Math.random() * 900000));
}

export function addToWaitlist(entry: WaitlistEntry) {
  const db = getDb();
  try {
    const code = generateVerifyCode();
    const expires = new Date(Date.now() + 15 * 60 * 1000).toISOString(); // 15 min

    const stmt = db.prepare(`
      INSERT INTO waitlist (name, email, invite_code, excitement, ip_address, verify_code, verify_code_expires)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `);
    stmt.run(
      entry.name,
      entry.email,
      entry.invite_code || null,
      entry.excitement || null,
      entry.ip_address || null,
      code,
      expires
    );
    return { success: true, code };
  } catch (err: unknown) {
    if (err instanceof Error && err.message.includes("UNIQUE constraint failed")) {
      return { success: false, error: "This email is already on the waitlist." };
    }
    throw err;
  } finally {
    db.close();
  }
}

export function verifyWaitlistEmail(email: string, code: string) {
  const db = getDb();
  try {
    const row = db.prepare(
      "SELECT verify_code, verify_code_expires, verified FROM waitlist WHERE email = ?"
    ).get(email) as { verify_code: string; verify_code_expires: string; verified: number } | undefined;

    if (!row) {
      return { success: false, error: "Email not found on waitlist." };
    }
    if (row.verified) {
      return { success: true }; // Already verified
    }
    if (new Date(row.verify_code_expires) < new Date()) {
      return { success: false, error: "Verification code has expired. Please request a new one." };
    }
    if (row.verify_code !== code) {
      return { success: false, error: "Invalid verification code. Please try again." };
    }

    db.prepare("UPDATE waitlist SET verified = 1, verify_code = NULL WHERE email = ?").run(email);
    return { success: true };
  } finally {
    db.close();
  }
}

export function refreshVerifyCode(email: string) {
  const db = getDb();
  try {
    const row = db.prepare("SELECT id, verified FROM waitlist WHERE email = ?").get(email) as { id: number; verified: number } | undefined;
    if (!row) {
      return { success: false, error: "Email not found on waitlist." };
    }
    if (row.verified) {
      return { success: false, error: "This email is already verified." };
    }

    const code = generateVerifyCode();
    const expires = new Date(Date.now() + 15 * 60 * 1000).toISOString();
    db.prepare("UPDATE waitlist SET verify_code = ?, verify_code_expires = ? WHERE email = ?").run(code, expires, email);
    return { success: true, code };
  } finally {
    db.close();
  }
}

export function getWaitlistCount(): number {
  const db = getDb();
  try {
    const row = db.prepare("SELECT COUNT(*) as count FROM waitlist").get() as { count: number };
    return row.count;
  } finally {
    db.close();
  }
}
