import { pool } from "../../config/db.js";

export const createContactTable = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS contacts (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100),
        phone VARCHAR(20),
        message TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log("Contact table ready");
  } catch (error) {
    console.error("Error creating contact table:", error.message);
  }
};