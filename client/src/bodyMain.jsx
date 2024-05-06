import "./css/core.css";
import "./css/common.css";
import "./css/bodyMain.css";
import Category from "./Category";
import Post from "./Post";

export default function Main() {
  return (
    <main>
      <div id="main-div">
        <Category />
        <div id="posts-container-div">
          <Post />
        </div>
      </div>
    </main>
  );
}
