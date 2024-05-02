/* Server Main Entrypoint */
/***** Config *****/
import pg from "pg";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Use envVars
dotenv.config();

// Server config
const app = express();
app.use(cors());

// DB connection
const dbConnStr = process.env.DATABASE_URL;
const db = new pg.Pool({connectionString: dbConnStr});

app.get("/users", (request, response) => {
    console.log("GET");
    
});
// Server listener start
app.listen(8080, () => {
    console.log("SERVER: Listening on 8080");
    insert();
});

async function insert()
{
    const result = await db.query(
        "INSERT INTO users (name, rank) VALUES ($1, $2) RETURNING *",
        ["Kevin", "Master"]
    );

    console.log(result);
}