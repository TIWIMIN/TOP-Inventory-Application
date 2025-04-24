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
    await pool.query(`INSERT INTO categories (name) VALUES ($1)`, [category]);
  } catch (error) {
    console.error("Error creating categories", error);
  }
};

const deleteCategory = async (category) => {
  try {
    await pool.query(`DELETE FROM categories WHERE (name) = ($1)`, [category]);
  } catch (error) {
    console.error("Error deleting category:", error);
  }
};

const getCategoryID = async (category) => {
  try {
    const result = await pool.query(
      `SELECT (id) FROM categories WHERE (name) = ($1)`,
      [category]
    );
    return result.rows[0]?.id;
  } catch (error) {
    console.error("Failed to fetch category id", error);
  }
};

const getAllItems = async (category_id) => {
  try {
    const result = await pool.query(
      `SELECT name, quantity FROM items WHERE (category_id) = ($1)`,
      [category_id]
    );
    return result.rows;
  } catch (error) {
    console.error("Error fetching item", error);
  }
};

export {
  getAllCategories,
  createNewCategory,
  deleteCategory,
  getCategoryID,
  getAllItems,
};
