/* Server Main Entrypoint */
/*******************/
// #region Config
import express from "express";
import cors from "cors";
import dbInit from "./dbHandler.js";

// Server config
const app = express();
app.use(cors());

// #endregion Config
/*******************/
// #region Routing - GET
app.get("/users", (request, response) => {
    console.log("GET");
    
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