import { fetchWithoutParam } from "./networkHander";
import {  GET_ALL_USERS, GET_ALL_POSTS, GET_ALL_TAGS, 
    GET_ALL_LOCATIONS, GET_ALL_FACTIONS } from "./fetchLibrary";

await fetchWithoutParam(GET_ALL_USERS, output, outputFailure)
await fetchWithoutParam(GET_ALL_POSTS, output, outputFailure)
await fetchWithoutParam(GET_ALL_TAGS, output, outputFailure)
await fetchWithoutParam(GET_ALL_LOCATIONS, output, outputFailure)
await fetchWithoutParam(GET_ALL_FACTIONS, output, outputFailure)

function output(data)
{
    console.log(data);
}

function outputFailure(type, status)
{
    console.log(`${type}: ${status}`);
}