import express from "express";
import {
  getItemController,
  addItemController,
} from "../controllers/itemController.js";

const router = express.Router();

router.get("/get-items", getItemController);
router.post("/add-item", addItemController);

export default router;
