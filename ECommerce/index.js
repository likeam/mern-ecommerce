import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import cookiesParser from "cookie-parser";
import connectDB from "./server/db/connection.js";

dotenv.config();

app.use(cookiesParser());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
connectDB();

const app = express();
