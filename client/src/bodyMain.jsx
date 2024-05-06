import "./css/core.css";
import "./css/common.css";
import "./css/bodyMain.css";
import Category from "./Category";
import PostContainer from "./PostContainer";
import PostForm from "./PostForm"

export default function Main() {

  return (
    <main>
      <div id="main-div">
        <Category />
        <div id="posts-container-div">
          <PostContainer />

          <PostForm />
        </div>
      </div>
    </main>
  );
}
