import express from "express";
import path from "path";
import url from "url";

import indexRouter from "./routes/indexRouter.js";
import categoryRouter from "./routes/categoryRouter.js"; 

const port = process.env.PORT;
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const roleName = process.env.ROLE_NAME; 

const app = express();


// views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// body middleware
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/", indexRouter);
app.use("/category", categoryRouter); 

app.listen(port, () => console.log(`Server is running on port: ${port}`));