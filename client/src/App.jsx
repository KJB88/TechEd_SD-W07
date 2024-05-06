import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/core.css";
import "./css/common.css";
import "./css/header.css";
import "./css/bodyMain.css";
import Nav from "./Nav.jsx";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div id="background-image">
          <div id="foreground">
            <header>
              <div id="title-container">
                <h1 id="title" className="drop-shadow no-pointer-events">
                  Zone PDA Network
                </h1>
                <span id="subtitle" className="drop-shadow no-pointer-events">
                  &quot;Good hunting, Stalker!&quot;
                </span>
              </div>
              <Nav />
            </header>

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
