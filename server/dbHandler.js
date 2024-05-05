/* Database Handler */
/*******************/
// #region Config
import dotenv from "dotenv";
import pg from "pg";
import seedDB from "./seed.js";

// Use envVars
dotenv.config();

// DB connection
const dbConnStr = process.env.DATABASE_URL;
const db = new pg.Pool({connectionString: dbConnStr});

// #endregion Config
/*******************/
// #region Core
export default function dbInit()
{
    seedDB(db);
}
// #endregion Core
/*******************/