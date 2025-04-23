import express from "express";
import { createIndexGet } from "../controllers/indexControllers.js";

const router = express.Router();

router.route("/").get(createIndexGet);

export default router;
