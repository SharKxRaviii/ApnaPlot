import {pool} from "../../config/db.js";

export const createSendMessageRepo = async ({ fullname, phone_number, email, message }) => {
  const query = `
    INSERT INTO contact(fullname, phone_number, email, message)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `;

  const values = [fullname, phone_number, email, message];

  const result = await pool.query(query, values);
  return result.rows[0];
};