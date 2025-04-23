import pg from "pg";

const roleName = process.env.ROLE_NAME; 
const rolePassword = process.env.ROLE_PASSWORD; 

const { Client } = pg;

const categories = [
  { name: 'Clothes', items: ['Shirts', 'Pants', 'Underwear'] },
  { name: 'Toiletries', items: ['Toothbrush', 'Floss', 'Shampoo', 'Conditioner'] },
  { name: 'Electronics', items: ['Phone', 'Phone Charger', 'Camera'] },
  { name: 'Survival', items: ['First-aid Kit', 'Stove', 'Sleeping Bag'] },
];

const schema = `
CREATE TABLE IF NOT EXISTS categories (
  id SERIAL PRIMARY KEY,
  name TEXT UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS items (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  quantity INTEGER CHECK (quantity >= 0) DEFAULT 0,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE
);
`;

async function main() {
  const client = new Client({
    connectionString: `postgresql://${role_name}:${role_password}@localhost:5432/top_inventory`,
  });

  try {
    console.log("Connecting...");
    await client.connect();

    console.log("Creating schema...");
    await client.query(schema);

    for (const category of categories) {
      // Insert category and get its ID
      const res = await client.query(
        `INSERT INTO categories (name)
         VALUES ($1)
         ON CONFLICT (name) DO UPDATE SET name = EXCLUDED.name
         RETURNING id`,
        [category.name]
      );

      const categoryId = res.rows[0].id;

      // Insert items under this category
      for (const item of category.items) {
        await client.query(
          `INSERT INTO items (name, category_id)
           VALUES ($1, $2)
           ON CONFLICT DO NOTHING`,
          [item, categoryId]
        );
      }
    }

    console.log("Seeding done.");
  } catch (err) {
    console.error("Error seeding database:", err);
  } finally {
    await client.end();
  }
}

main();
