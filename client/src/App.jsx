import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/core.css";
import "./css/common.css";
import "./css/bodyMain.css";
import Header from "./Header";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div id="background-image">
          <div id="foreground">
            <Header />
            <main>
              <div id="main-div">
                <div id="tab-div">

                </div>
                <div id="posts-div">
                </div>
              </div>
            </main>
            <footer></footer>
          </div>
        </div>

        <Routes>
          <Route path="/about" element={<h2>About</h2>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
