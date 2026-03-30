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

export function addToWaitlist(entry: WaitlistEntry) {
  const db = getDb();
  try {
    const stmt = db.prepare(`
      INSERT INTO waitlist (name, email, invite_code, excitement, ip_address)
      VALUES (?, ?, ?, ?, ?)
    `);
    stmt.run(
      entry.name,
      entry.email,
      entry.invite_code || null,
      entry.excitement || null,
      entry.ip_address || null
    );
    return { success: true };
  } catch (err: unknown) {
    if (err instanceof Error && err.message.includes("UNIQUE constraint failed")) {
      return { success: false, error: "This email is already on the waitlist." };
    }
    throw err;
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
