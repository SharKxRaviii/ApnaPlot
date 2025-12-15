import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : false,
});

export const pgConnection = async () => {
  try {
    await pool.query("SELECT 1");
    console.log("PostgreSQL connected successfully");
  } catch (error) {
    console.error("DB Connection Error:", error);
    throw error;
  }
};
