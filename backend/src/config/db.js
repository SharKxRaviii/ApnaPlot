import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const pool = new Pool({
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    port: process.env.DATABASE_PORT
});

export const pgConnection = async () => {
    try {
        await pool.connect();
        console.log("PostgreSQL is connected");
    } catch (error) {
        console.log("DB Connection Error:", error);
    }
}

export default pool;
