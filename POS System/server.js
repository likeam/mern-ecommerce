import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/config.js";
import itemRouter from "./routes/itemRoutes.js";

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(morgan("common"));

const PORT = process.env.PORT || 8080;

app.use("/api/v1/items", itemRouter);

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
