import pool from "./pool.js";

const getAllCategories = async () => {
  try {
    const result = await pool.query(`SELECT name FROM categories`);
    return result.rows;
  } catch (error) {
    console.error("Error fetching names:", error);
  }
};

export { getAllCategories };
