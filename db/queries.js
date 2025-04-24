import pool from "./pool.js";

const getAllCategories = async () => {
  try {
    const result = await pool.query(`SELECT name FROM categories`);
    return result.rows;
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};

const createNewCategory = async (category) => {
  try {
    await pool.query(`INSERT INTO categories (name) VALUES ($1)`, [category])
  } catch (error) {
    console.error("Error creating categories", error); 
  }
}

const deleteCategory = async (category) => {
  try {
    await pool.query(`DELETE FROM categories WHERE (name) = ($1)`, [category])
  } catch (error) {
    console.error("Error deleting category:", error); 
  }
}

export { getAllCategories, createNewCategory, deleteCategory };
