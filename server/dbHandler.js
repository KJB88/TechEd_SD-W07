/* Database Handler */
/*******************/
// #region Config
import dotenv from "dotenv";
import pg from "pg";
import seedDB from "./seed.js";
import { selectAllPosts, selectAllUsers, selectAllTags, selectAllFactions, selectAllLocations, insertPost} from "./queries.js";
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

export async function getAllPosts()
{
    return (await db.query(selectAllPosts)).rows;
}

export async function getAllTags()
{
    return (await db.query(selectAllTags)).rows;
}

export async function getAllFactions()
{
    return (await db.query(selectAllFactions)).rows;
}

export async function getAllLocations()
{
    return (await db.query(selectAllLocations)).rows;
}

// #endregion GET-SELECT routing
/*******************/
// #region POST-INSERT routing
export async function addNewPost(header, content, tag_id, user_id)
{ 
    console.log(header);
    console.log(content);
    const result = await db.query(insertPost, [header, content, tag_id, user_id]);

    console.log(result);
}
// #endregion POST-INSERT routing
/*******************/