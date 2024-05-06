/* Server Main Entrypoint */
/*******************/
// #region Config
import express from "express";
import cors from "cors";
import {dbInit, getAllUsers} from "./dbHandler.js";
// Server config
const app = express();
app.use(cors());

// #endregion Config
/*******************/
// #region Routing - GET
app.get("/users", 
async(request, response)=> { 
    console.log("GET /users");

    const data = await getAllUsers();
    response.json(data);
});
// #endregion Routing - GET
/*******************/
// #region Core
// Server listener start
app.listen(8080, () => {
    console.log("SERVER: Listening on 8080");
    dbInit();
});
// #endregion Core
/*******************/