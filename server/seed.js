/* Database Seed */
/*******************/
// #region Imports
// Inserts
import { insertFaction, insertLocation, insertPost, insertComment, insertUser } from "./queries.js";

// Deletes
import { deleteAllRecordsInAllTables } from "./queries.js";

// #endregion Imports
/*******************/
// #region Seeding

// Populate the DB with seed data
export default function seedFullDB(db)
{
    // DEBUG - Erases all records in all tables but keeps schema
    DEBUG_nukeDB(db);

    // Non-dependent tables (Order does not matter)
    populateFactions(db);
    populateLocations(db);

    // Dependent tables (Order matters)
    populateUsers(db);
    populatePosts(db);
    populateComments(db);
}

/* Individual Seed Functions 
NOTE: They are all await to lock IDs for testing. */
// Factions
// (name)
async function populateFactions(db)
{
    await db.query(insertFaction, ["Loner"]); // 1
    await db.query(insertFaction, ["Duty"]); // 2
    await db.query(insertFaction, ["Freedom"]); // 3
    await db.query(insertFaction, ["Clear Sky"]); // 4
    await db.query(insertFaction, ["Monolith"]); // 5
    await db.query(insertFaction, ["Military"]); // 6 
    await db.query(insertFaction, ["Ecologists"]); // 7
    await db.query(insertFaction, ["Zombies"]); // 8
    await db.query(insertFaction, ["Bandits"]); // 9
    await db.query(insertFaction, ["Mercenaries"]); // 10
    await db.query(insertFaction, ["Renegades"]); // 11
}

// Locations
// (name)
async function populateLocations(db)
{
    await db.query(insertLocation, ["100 Rads Bar"]); // 1
    await db.query(insertLocation, ["Skadovsk"]); // 2
    await db.query(insertLocation, ["Rookie Village"]); // 3
    await db.query(insertLocation, ["Jupiter Station"]); // 4
    await db.query(insertLocation, ["Agroprom (Underground)"]); // 5
    await db.query(insertLocation, ["Jupiter Research Station"]); // 6
    await db.query(insertLocation, ["Jupiter Plant"]); // 7
    await db.query(insertLocation, ["Swamps"]); // 8
    await db.query(insertLocation, ["CNPP"]); // 9
    await db.query(insertLocation, ["Pripyat"]); // 10
    await db.query(insertLocation, ["Labs (Underground)"]); // 11
}

// Users
// (name, rank, factionID, locationID)
async function populateUsers(db)
{
    await db.query(insertUser, ["Vanderlust", "Veteran", 2, 1]); // 1
    await db.query(insertUser, ["Cera Chornobyl", "Master", 1, 2]); // 2
    await db.query(insertUser, ["Artyom Truthseeker", "Rookie", 3, 3]); // 3
    await db.query(insertUser, ["Strelok", "Master", 1, 4]); // 4
    await db.query(insertUser, ["Charon", "Master", 5, 10]); // 5
    await db.query(insertUser, ["Sidorovich", "Trader", 1, 3]); // 6
    await db.query(insertUser, ["Wollivan", "Novice", 1, 5]); // 7

}

// Posts
// (header, content, tag, user_id)
async function populatePosts(db)
{
    // 1
    await db.query(insertPost, [
    "Praise the Monolith!", 
"ALL HAIL THE MONOLITH! ALL HAIL THE MONOLITH! ALL HAIL THE MONOLITH! ALL HAIL THE MONOLITH! ALL HAIL THE MONOLITH! ALL HAIL THE MONOLITH! ALL HAIL THE MONOLITH! ALL HAIL THE MONOLITH! ALL HAIL THE MONOLITH! ALL HAIL THE MONOLITH! ALL HAIL THE MONOLITH!",
"Recruitment",
5
]);

// 2
await db.query(insertPost, [
    "Day 67: Still surviving!", 
"Phew, its day 67 and I'm still going! My armour has a few holes in it, I'm low on ammo and I'm pretty sure my pee is going to glow in the dark, but I'm alive. That's all we can ask for in the Zone.",
"Personal",
2
]);

// 3
await db.query(insertPost, [
    "Buying: 12g Slugs", 
"I'm buying 12g Slugs in bulk for a trek out of the village. I don't have many roubles, but I have plenty of vodka to trade. Drop me a message in the comments. - KR, Artyom.",
"Buying",
3
]);

// 4
await db.query(insertPost, [
    "New to the Zone!",
"Hi guys, I'm new to the Zone! Does anyone have any tips? Also, is it normal to feel your brain tingle and hear a strange rock talking to you in your dreams?",
"Advice",
7
]);
}

// Comments
// (content, user_id, post_id)
async function populateComments(db)
{
    // cID 1 by uID 1 on pID 3
    await db.query(insertComment, ["Pryvit bratan! Buckshot much better for trip outside village!", 1, 3]);

    // cID 2 by uID 3 on pID 2
    await db.query(insertComment, ["Every day that ends where we're still breathing is a good day!", 3, 2]);

    // cID 3 by uID 2 on pID 1
    await db.query(insertComment, [
        "How do these guys still have network access? Is Sidorovich sleeping on the job again?", 2, 1]);
    
    // cID 4 by uID 6 on pID 1
    await db.query(insertComment, ["If you don't like it, don't use it! Blyat!", 6, 1]);

    // cID 5 by uID 1 on pID 4
    await db.query(insertComment, ["Vodka, moy tovarisch! No tingle if no brain! Budmo!", 1, 4]);
}

async function DEBUG_nukeDB(db)
{
    await db.query(deleteAllRecordsInAllTables);
}
// #endregion Seeding
/*******************/