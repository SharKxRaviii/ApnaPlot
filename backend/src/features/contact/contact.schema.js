import pool from "../../config/db.js";

export const createContactTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS contact (
      id SERIAL PRIMARY KEY,
      fullname VARCHAR(100) NOT NULL,
      phone_number VARCHAR(50) NOT NULL,
      email VARCHAR(100) NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  try {
    await pool.query(query);
    console.log("Contact table is ready.");
  } catch (error) {
    console.error("Error creating contact table:", error);
  }
};