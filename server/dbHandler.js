/* Database Handler */
/*******************/
// #region Config
import dotenv from "dotenv";
import pg from "pg";
import seedDB from "./seed.js";
import { selectAllUsers } from "./queries.js";
// Use envVars
dotenv.config();

// DB connection
const dbConnStr = process.env.DATABASE_URL;
const db = new pg.Pool({connectionString: dbConnStr});

// #endregion Config
/*******************/
// #region Core
export function dbInit(){
    seedDB(db);
}
// #endregion Core
/*******************/
// #region GET-SELECT routing
export async function getAllUsers()
{
    return (await db.query(selectAllUsers)).rows;
}

// #endregion GET-SELECT routing
/*******************/