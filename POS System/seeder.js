import mongoose from "mongoose";
import dotenv from "dotenv";
import items from "./utils/data.js";
import connectDB from "./config/config.js";
import Item from "./models/Item.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    // await Item.deleteMany(items);
    const itemData = await Item.insertMany(items);
    console.log("Data Imported");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

importData();
