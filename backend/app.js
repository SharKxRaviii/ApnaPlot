import dotenv from "dotenv";
dotenv.config();

import express from "express";
import pool, { pgConnection } from "./src/config/db.js";
import { createContactTable } from "./src/features/contact/contact.schema.js";
import { createSendMessage } from "./src/features/contact/contact.controller.js";

const app = express();
app.use(express.json());

// Initialize DB tables
createContactTable();

app.get("/", (req, res) => {
  res.json({ message: "Apna Plot API Running" });
});

// Route
app.post("/api/contact", createSendMessage);

app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`);
  pgConnection();
});
