import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import { pgConnection } from "./src/config/db.js";
import { createContactTable } from "./src/features/contact/contact.schema.js";
import { createSendMessage } from "./src/features/contact/contact.controller.js";

const app = express();

// MIDDLEWARE
app.use(express.json());

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// ROUTES
app.get("/", (req, res) => {
  res.json({ message: "Apna Plot API Running" });
});

app.post("/api/contact", createSendMessage);

// SERVER START
const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    // Connect DB first
    await pgConnection();

    // Init tables AFTER DB is connected
    await createContactTable();

    // Start server
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server startup failed:", error);
    process.exit(1);
  }
};

startServer();
