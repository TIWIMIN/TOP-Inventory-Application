import express from "express";
import {
  createCategoryGet,
  deleteItemPOST,
  incrementItemPOST,
  decrementItemPOST,
  createItemPOST
} from "../controllers/categoryController.js";

const router = express.Router();

router.route("/:categoryName").get(createCategoryGet);

router.route("/:categoryName/deleteItem").post(deleteItemPOST);

router.route("/:categoryName/incrementItem").post(incrementItemPOST); 

router.route("/:categoryName/decrementItem").post(decrementItemPOST); 

router.route("/:categoryName/createItem").post(createItemPOST); 

export default router;
