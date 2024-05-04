/* Query Library */
/*******************/
// #region Selects

// User(s) - All
export const selectAllUsers = {
    name: 'selectAllUsers',
    text: 'SELECT * FROM users'
}

// User - By User ID
export const selectUserByUserID = {
    name: 'selectUserByUserID',
    text: 'SELECT * FROM users WHERE users.id = $1'
}

// User(s) - By Location
export const selectUsersByLocation = {
    name: 'selectUserByLocation',
    text: 'SELECT users, locations.name AS location FROM posts JOIN locations ON locations.id = $1'
}

// User(s) - By Faction
export const selectUsersByFaction = {
    name: 'selectUserByFaction',
    text: 'SELECT users, factions.name AS faction FROM posts JOIN factions ON factions_id = $1'
}

// Post(s) - All
export const selectAllPosts = {
    name: 'selectAllPosts',
    text: 'SELECT * FROM posts'
}

// Post - By Post ID
export const selectPostByPostID = {
    name: 'selectPostByPostID',
    text: 'SELECT * FROM posts WHERE posts.id = $1'
}

// Post(s) - By User ID
export const selectPostsByUserID = {
    name: 'selectPostsByUserID',
    text: 'SELECT * FROM posts WHERE posts.user_id = $1'
}

// Comment(s) - by Post ID
export const selectCommentsByPostID = {
    name: 'selectCommentsByPostID',
    text: 'SELECT * FROM comments WHERE comments.post_id = $1'
}
// Comment(s) - By User ID
export const selectCommentsByUserID = {
    name: 'selectCommentsByUserID',
    text: 'SELECT * FROM comments WHERE comments.user_id = $1'
}

// Location(s) - All
export const selectAllLocations = {
    name: 'selectAllLocations',
    text: 'SELECT * FROM locations'
}

// Faction(s) - All
export const selectAllFactions = {
    name: 'selectAllFactions',
    text: 'SELECT * FROM factions'
}
// #endregion Selects
/*******************/
// #region Inserts

// User
export const insertUser = {
    name: 'insertUser',
    text: 'INSERT INTO users (name, rank, faction_id, location_id) VALUES ($1, $2, $3, $4)'
}

// Faction
export const insertFaction = {
    name: 'insertFaction',
    text: 'INSERT INTO factions (name) VALUES ($1)'
}

// Location
export const insertLocation = {
    name: 'insertLocation',
    text: 'INSERT INTO locations (name) VALUES ($1)'
}

// Post
export const insertPost = {
    name: 'insertPost',
    text: 'INSERT INTO posts (header, content, tag, user_id) VALUES ($1, $2, $3, $4)'
}

// Comment
export const insertComment = {
    name: 'insertComment',
    text: 'INSERT INTO comments (content, user_id, post_id) VALUES ($1, $2, $3)'
}
// #endregion Inserts
/*******************/
// #region Deletes

// All Records
export const deleteAllRecordsInTable = {
name: 'deleteAllRecordsInTable',
text: 'TRUNCATE $1'
}

// All Tables
export const deleteAllRecordsInAllTables = {
    name: 'deleteAllRecordsInAllTables',
    text: 'TRUNCATE users, posts, comments, factions, locations RESTART IDENTITY CASCADE'
    }
//#endregion Deletes
/*******************/