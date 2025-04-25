import express from "express";
import {
  createCategoryGet,
  deleteItemPOST,
  incrementItemPOST,
  decrementItemPOST,
} from "../controllers/categoryController.js";

const router = express.Router();

router.route("/:categoryName").get(createCategoryGet);

router.route("/:categoryName/deleteItem").post(deleteItemPOST);

router.route("/:categoryName/incrementItem").post(incrementItemPOST); 

router.route("/:categoryName/decrementItem").post(decrementItemPOST); 

export default router;
