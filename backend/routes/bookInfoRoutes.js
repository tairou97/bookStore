import express from "express";

const router = express.Router();
import {
  getBookInfo,
  createNewBookInfo,
} from "../controllers/bookInfoController.js";

router.get("/", getBookInfo);
router.post("/", createNewBookInfo);

export default router;
