import {
  getCategoryID,
  getAllItems,
  deleteItem,
  incrementItem,
  decrementItem,
} from "../db/queries.js";

const createCategoryGet = async (req, res) => {
  try {
    const category = req.params.categoryName;
    const categoryID = await getCategoryID(category);
    console.log("category ID:", categoryID);
    const items = await getAllItems(categoryID);
    console.log(items);
    res.status(200).render("categoryTemplate", { items, category });
  } catch (error) {
    console.error("Failed to get category", error);
  }
};

const deleteItemPOST = async (req, res) => {
    try {
        const { item } = req.body; 
        const { category } = req.body; 
        await deleteItem(item); 
        res.redirect(`/category/${category}`)
    } catch (error) {
        console.error("Failed to POST delete item request", error)
    }
};

const incrementItemPOST = async (req, res) => {
    try {
        const { item } = req.body; 
        const { category } = req.body; 
        await incrementItem(item); 
        res.redirect(`/category/${category}`)
    } catch (error) {
        console.error("Failed to POST item increment", error);
    }
}

const decrementItemPOST = async (req, res) => {
    try {
        const { item } = req.body; 
        const { category } = req.body; 
        await decrementItem(item); 
        res.redirect(`/category/${category}`)
    } catch (error) {
        console.error("Failed to POST item decrement", error);
    }
}

export { createCategoryGet, deleteItemPOST, incrementItemPOST, decrementItemPOST };
