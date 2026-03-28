import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare, hash } from "bcryptjs";
import Database from "better-sqlite3";
import path from "path";
import fs from "fs";

const DB_PATH = path.join(process.cwd(), "data", "auth.db");

function getAuthDb() {
  const dir = path.dirname(DB_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const db = new Database(DB_PATH);
  db.pragma("journal_mode = WAL");

  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT NOT NULL UNIQUE,
      name TEXT,
      password_hash TEXT NOT NULL,
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS password_reset_tokens (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT NOT NULL,
      token TEXT NOT NULL UNIQUE,
      expires_at TEXT NOT NULL,
      used INTEGER DEFAULT 0,
      created_at TEXT DEFAULT (datetime('now'))
    );
  `);

  return db;
}

// Seed a demo user if none exist
async function seedDemoUser() {
  const db = getAuthDb();
  try {
    const count = db.prepare("SELECT COUNT(*) as c FROM users").get() as { c: number };
    if (count.c === 0) {
      const hashedPassword = await hash("demo1234", 12);
      db.prepare("INSERT INTO users (email, name, password_hash) VALUES (?, ?, ?)").run(
        "demo@nyo.ai",
        "Demo User",
        hashedPassword
      );
    }
  } finally {
    db.close();
  }
}

// Initialize demo user
seedDemoUser().catch(console.error);

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const db = getAuthDb();
        try {
          const user = db
            .prepare("SELECT * FROM users WHERE email = ?")
            .get(credentials.email as string) as {
            id: number;
            email: string;
            name: string;
            password_hash: string;
          } | undefined;

          if (!user) return null;

          const isValid = await compare(
            credentials.password as string,
            user.password_hash
          );

          if (!isValid) return null;

          return {
            id: String(user.id),
            email: user.email,
            name: user.name,
          };
        } finally {
          db.close();
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token.id) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
});

// Password reset helpers
export async function createResetToken(email: string): Promise<string | null> {
  const db = getAuthDb();
  try {
    const user = db.prepare("SELECT id FROM users WHERE email = ?").get(email);
    if (!user) return null;

    const token = crypto.randomUUID();
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString(); // 1 hour

    db.prepare(
      "INSERT INTO password_reset_tokens (email, token, expires_at) VALUES (?, ?, ?)"
    ).run(email, token, expiresAt);

    return token;
  } finally {
    db.close();
  }
}

export async function resetPassword(token: string, newPassword: string): Promise<boolean> {
  const db = getAuthDb();
  try {
    const record = db
      .prepare(
        "SELECT * FROM password_reset_tokens WHERE token = ? AND used = 0 AND expires_at > datetime('now')"
      )
      .get(token) as { email: string } | undefined;

    if (!record) return false;

    const hashedPassword = await hash(newPassword, 12);
    db.prepare("UPDATE users SET password_hash = ?, updated_at = datetime('now') WHERE email = ?").run(
      hashedPassword,
      record.email
    );
    db.prepare("UPDATE password_reset_tokens SET used = 1 WHERE token = ?").run(token);

    return true;
  } finally {
    db.close();
  }
}
