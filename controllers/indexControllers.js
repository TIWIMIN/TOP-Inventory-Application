import { getAllCategories, createNewCategory, deleteCategory } from "../db/queries.js";

const createIndexGet = async (req, res) => {
  const query = await getAllCategories();
  const categories = query.map((item) => item.name);
  res.status(200).render("index", { categories });
};

const createIndexPost = async (req, res) => {
  const { category } = req.body;
  await createNewCategory(category);
  res.redirect("/");
};

const deleteIndexPost = async (req, res) => {
  const { category } = req.body; 
  await deleteCategory(category); 
  res.redirect("/"); 
}; 

export { createIndexGet, createIndexPost, deleteIndexPost };
