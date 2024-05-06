import "./css/bodyMain.css";
import "./css/common.css";
import "./css/core.css";
import { GET_ALL_POSTS } from "./js/fetchLibrary.js";
import { fetchWithoutParam } from "./js/networkHander.js";
import Post from "./Post.jsx";
import { useEffect, useState} from "react";

export default function PostContainer() {
  // State to store the fetched data
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    const response = await fetchWithoutParam(GET_ALL_POSTS);
    setPosts(response);
    setLoading(false);
  }

  const renderComponents = () => {
    if (loading) return <></>;

    return posts.map((post) => (
      <Post key={post.id} header={post.header} content={post.content} />
    ));
  };

  return <>{renderComponents()}</>;
}
