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
      `SELECT id, name, quantity FROM items WHERE (category_id) = ($1)`,
      [category_id]
    );
    return result.rows;
  } catch (error) {
    console.error("Error fetching item", error);
  }
};

const deleteItem = async (item) => {
  try {
    await pool.query(`DELETE FROM items WHERE (name) = ($1)`, [item]);
  } catch (error) {
    console.error("Failed to delete item", error);
  }
};

const incrementItem = async (item) => {
  try {
    await pool.query(
      `UPDATE items SET quantity = quantity + 1 WHERE (name) = ($1)`,
      [item]
    );
  } catch (error) {
    console.error("Failed to increment item", error);
  }
};

const decrementItem = async (item) => {
  try {
    await pool.query(
      `UPDATE items SET quantity = GREATEST(quantity - 1, 0) WHERE (name) = ($1)`,
      [item]
    );
  } catch (error) {
    console.error("Failed to decrement item", error);
  }
};

const createItem = async (item, categoryID) => {
  try {
    await pool.query(
      `INSERT into items (name, quantity, category_id) VALUES ($1, $2, $3)`, 
      [item, 0, categoryID]
    )
  } catch (error) {
    console.error("Failed to create item", error); 
  }
}

export {
  getAllCategories,
  createNewCategory,
  deleteCategory,
  getCategoryID,
  getAllItems,
  deleteItem, 
  incrementItem, 
  decrementItem, 
  createItem
};
