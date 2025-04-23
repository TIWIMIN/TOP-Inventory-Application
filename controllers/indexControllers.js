import { getAllCategories } from "../db/queries.js";

const createIndexGet = async (req, res) => {
  const query = await getAllCategories();
  console.log("query results", query);
  const categories = query.map((item) => item.name);
  console.log("category results", categories);
  res.status(200).render("index", { categories });
};

export { createIndexGet };
