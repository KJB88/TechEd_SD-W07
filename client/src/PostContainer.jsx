import "./css/bodyMain.css";
import "./css/common.css";
import "./css/core.css";
import Post from "./Post.jsx";
import { useEffect, useState } from "react";

export default function PostContainer() {
  // State to store the fetched data
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    const response = await fetch("http://localhost:8080/get/posts/all");
    const data = await response.json();
    setPosts(data);
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
