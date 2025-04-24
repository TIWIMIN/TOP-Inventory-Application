import express from "express";
import {
  createIndexGet,
  createIndexPost,
  deleteIndexPost,
} from "../controllers/indexControllers.js";

const router = express.Router();

router.route("/").get(createIndexGet).post(createIndexPost);

router.route("/deleteCategory").post(deleteIndexPost);

export default router;
