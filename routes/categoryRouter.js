import express from "express";
import { createCategoryGet } from "../controllers/categoryController.js";

const router = express.Router();

router.route("/:categoryName").get(createCategoryGet);

export default router;
