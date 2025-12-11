import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import pool, { pgConnection } from './src/config/db.js';


const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Apna Plot" });
});

app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`);
    pgConnection();
});
