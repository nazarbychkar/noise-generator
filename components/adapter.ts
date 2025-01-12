import { Client } from "@neondatabase/serverless";
import type { Adapter } from "next-auth/adapters";

// Ініціалізація клієнта Neon
const client = new Client({
  connectionString: process.env.DATABASE_URL, // Додай цей URL в `.env`
});

async function connectDB() {
  await client.connect();
}

export function MyAdapter(): Adapter {
  return {
    async createUser(user) {
      await connectDB();
      const result = await client.query(
        `INSERT INTO users (id, name, email, email_verified, image) 
         VALUES (gen_random_uuid(), $1, $2, $3, $4) RETURNING *`,
        [user.name, user.email, user.emailVerified, user.image]
      );
      return result.rows[0];
    },

    async getUser(id) {
      await connectDB();
      const result = await client.query(`SELECT * FROM users WHERE id = $1`, [id]);
      return result.rows[0] || null;
    },

    async getUserByEmail(email) {
      await connectDB();
      const result = await client.query(`SELECT * FROM users WHERE email = $1`, [email]);
      return result.rows[0] || null;
    },

    async getUserByAccount({ provider, providerAccountId }) {
      await connectDB();
      const result = await client.query(
        `SELECT users.* FROM users
         JOIN accounts ON accounts.user_id = users.id
         WHERE accounts.provider = $1 AND accounts.provider_account_id = $2`,
        [provider, providerAccountId]
      );
      return result.rows[0] || null;
    },

    async updateUser(user) {
      await connectDB();
      const result = await client.query(
        `UPDATE users SET name = $1, email = $2, email_verified = $3, image = $4
         WHERE id = $5 RETURNING *`,
        [user.name, user.email, user.emailVerified, user.image, user.id]
      );
      return result.rows[0];
    },

    async linkAccount(account) {
      await connectDB();
      await client.query(
        `INSERT INTO accounts (id, user_id, provider, provider_account_id, refresh_token, access_token, expires_at, token_type, scope, id_token, session_state)
         VALUES (gen_random_uuid(), $1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
        [
          account.userId,
          account.provider,
          account.providerAccountId,
          account.refresh_token,
          account.access_token,
          account.expires_at,
          account.token_type,
          account.scope,
          account.id_token,
          account.session_state,
        ]
      );
    },

    async createSession(session) {
      await connectDB();
      const result = await client.query(
        `INSERT INTO sessions (id, session_token, user_id, expires) 
         VALUES (gen_random_uuid(), $1, $2, $3) RETURNING *`,
        [session.sessionToken, session.userId, session.expires]
      );
      return result.rows[0];
    },

    async getSessionAndUser(sessionToken) {
      await connectDB();
      const result = await client.query(
        `SELECT sessions.*, users.* FROM sessions
         JOIN users ON sessions.user_id = users.id
         WHERE sessions.session_token = $1`,
        [sessionToken]
      );
      if (result.rows.length === 0) return null;

      const { id, session_token, user_id, expires, ...user } = result.rows[0];
      return {
        session: { id, sessionToken: session_token, userId: user_id, expires },
        user,
      };
    },

    async updateSession(session) {
      await connectDB();
      const result = await client.query(
        `UPDATE sessions SET expires = $1 WHERE session_token = $2 RETURNING *`,
        [session.expires, session.sessionToken]
      );
      return result.rows[0];
    },

    async deleteSession(sessionToken) {
      await connectDB();
      await client.query(`DELETE FROM sessions WHERE session_token = $1`, [sessionToken]);
    },

    async createVerificationToken(token) {
      await connectDB();
      const result = await client.query(
        `INSERT INTO verification_tokens (identifier, token, expires) 
         VALUES ($1, $2, $3) RETURNING *`,
        [token.identifier, token.token, token.expires]
      );
      return result.rows[0];
    },

    async useVerificationToken({ identifier, token }) {
      await connectDB();
      const result = await client.query(
        `DELETE FROM verification_tokens 
         WHERE identifier = $1 AND token = $2 RETURNING *`,
        [identifier, token]
      );
      return result.rows[0] || null;
    },
  };
}
