import pg from "pg"; 


const roleName = process.env.ROLE_NAME; 
const rolePassword = process.env.ROLE_PASSWORD; 


const { Pool } = pg


const pool = new Pool ({
    host: "localhost", 
    user: roleName, 
    database: "top_inventory", 
    password: rolePassword, 
    port: 5432
}); 

export default pool; 