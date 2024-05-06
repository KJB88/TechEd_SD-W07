import "./css/core.css";
import "./css/common.css";
import "./css/bodyMain.css";
import Category from "./Category";
import PostContainer from "./PostContainer";
import PostForm from "./PostForm"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { metaFilters } from "./js/fetchLibrary";

export default function Main() {

  const htmlRoutes = metaFilters.map((filter) => (
    <Route key={filter.innerText} path={filter.url} element={<PostContainer fetch={filter.fetch}/>} />
  ));
  return (
    <BrowserRouter>
    <main>
      <div id="main-div">
        <Category />
        <div id="posts-container-div">
          <Routes>
          {htmlRoutes}
          </Routes>
          <PostForm />
          </div>
      </div>
    </main>
    </BrowserRouter>
  );
}
