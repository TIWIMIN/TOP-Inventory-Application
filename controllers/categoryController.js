import { getCategoryID, getAllItems } from "../db/queries.js";

const createCategoryGet = async (req, res) => {
    try {
        const category = req.params.categoryName; 
        const categoryID = await getCategoryID(category); 
        console.log("category ID:", categoryID); 
        const items = await getAllItems(categoryID); 
        console.log(items); 
        res.status(200).render("categoryTemplate", {items, category}); 
    } catch (error) {
        console.error("Failed to get category", error); 
    }
}

export { createCategoryGet }; 