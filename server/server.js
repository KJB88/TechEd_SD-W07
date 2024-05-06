/* Server Main Entrypoint */
/*******************/
// #region Config
import express from "express";
import cors from "cors";
import {dbInit, getAllFactions, getAllLocations, getAllPosts, getAllUsers, getAllTags} from "./dbHandler.js";

// Server config
const port = 8080;
const app = express();
app.use(cors());

// #endregion Config
/*******************/
// #region Routing - GET

// Get Root
app.get("/", (request, response) => {
    response.send("I am ROOT!");
})

// Get all Users
app.get("/get/users/all", 
async(request, response)=> { 
    console.log("GET get/users/all");

    const data = await getAllUsers();
    response.json(data);
});

// Get all Posts
app.get("/get/posts/all", 
async(request, response)=> { 
    console.log("GET get/posts/all");

    const data = await getAllPosts();
    response.json(data);
});

// Get all Tags
app.get("/get/tags/all", 
async(request, response)=> { 
    console.log("GET get/tags/all");

    const data = await getAllTags();
    response.json(data);
});

// Get all Locations
app.get("/get/locations/all", 
async(request, response)=> { 
    console.log("GET get/locations/all");

    const data = await getAllLocations();
    response.json(data);
});

// Get all Factions
app.get("/get/factions/all", 
async(request, response)=> { 
    console.log("GET get/factions/all");

    const data = await getAllFactions();
    response.json(data);
});

// Get User by Name
app.get("/get/user/by_name", async(request, response) => {});

// Get User by UserID
app.get("/get/user/by_user_id", async(request, response) => {});

// Get Post by PostID
app.get("/get/posts/by_post_id", async(request, response) => {});

// Get Post by UserID
app.get("/get/posts/by_user_id", async(request, response) => {});

// Get Post by TagID
app.get("/get/posts/by_tag_id", async(request, response) => {});

// #endregion Routing - GET
/*******************/
// #region Routing - POST

// Add new User
app.post("/post/user", async(request, response) => {});

// Add new Post
app.post("/post/post", async(request, response) => {});

// Add new Tag
app.post("/post/tag", async(request, response) => {});

// Add new Location
app.post("/post/location", async(request, response) => {});

// Add new Faction
app.post("/post/faction", async(request, response) => {});

// #endregion Routing - POST
/*******************/
// #region Routing - PUT

// Update User's Location
app.put("/put/user/location", async(request, response) => {});

// Update User's Faction
app.put("/put/user/faction", async(request, response) => {});

// Update Post's Tag
app.put("/put/post/tag", async(request, response) => {});

// Update Post likes
app.put("/put/post/by_post_id/likes", async(request, response) => {});

// #endregion Routing - PUT
/*******************/
// #region Routing - DEL

// Delete Post
app.delete("/del/post", async(request, response) => {});

// #endregion Routing - DEL
/*******************/
// #region Core
// Server listener start
app.listen(port, () => {
    console.log(`SERVER: Listening on ${port}`);
    dbInit();
});
// #endregion Core
/*******************/