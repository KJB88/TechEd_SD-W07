// Get ALL
export const GET_ALL_USERS = "/get/users/all";
export const GET_ALL_POSTS = "/get/posts/all";
export const GET_ALL_LOCATIONS = "/get/locations/all";
export const GET_ALL_FACTIONS = "/get/factions/all";
export const GET_ALL_TAGS = "/get/tags/all";

// Get by ID
export const GET_USER_BY_NAME = "/get/users/by_name"
export const GET_USER_BY_USERID = "/get/users/by_user_id";
export const GET_POST_BY_POSTID = "/get/posts/by_post_id";
export const GET_POSTS_BY_USERID = "/get/posts/by_user_id"
export const GET_POSTS_BY_TAGID = "/get/posts/by_tag_id";

// Get By Time
export const GET_POSTS_BY_TIMESTAMP = "/get/posts/by_timestamp";

// Get By Likes
export const GET_POSTS_BY_MOST_LIKES = "/get/posts/by_likes";
// Add
export const ADD_USER = "/post/user";
export const ADD_POST = "/post/post";
export const ADD_TAG = "/post/tag";
export const ADD_LOCATION = "/post/location";
export const ADD_FACTION = "/post/faction";

// Update
export const UPDATE_USER_LOCATION = "/put/user/location";
export const UPDATE_USER_FACTION = "/put/user/faction";
export const UPDATE_POST_TAG = "/put/post/tag";
export const UPDATE_POST_LIKES_BY_POST_ID = "/put/post/by_post_id/likes"

// Delete
export const DEL_POST = "/del/post";

// Storage array - could be a JSON to make it pure data too.
export const metaFilters = [
    {
      url: "/all",
      ariaLabel: "No filter. Get all posts.",
      innerText: "ALL",
      fetch: GET_ALL_POSTS
    },
    {
      url: "/new",
      ariaLabel: "Filter by latest posts",
      innerText: "NEW",
      fetch: GET_POSTS_BY_TIMESTAMP
    },
    {
      url: "/popular",
      ariaLabel: "Filter by most likes",
      innerText: "POPULAR",
      fetch: GET_POSTS_BY_MOST_LIKES
    },
    {
      url: "/tag",
      ariaLabel: "Filter by tags",
      innerText: "BY TAG",
      fetch: GET_POSTS_BY_TAGID
    },
  ];
  