import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./css/App.css";

export default function App() {
  return (
    <>
          <BrowserRouter>
      <div id="background-image">
        <div id="foreground">
          <header className="debug-border">
            <div id="title-container">
              <h1 id="title" className="title drop-shadow debug-border">
                The Zone PDA Network
              </h1>
              <span id="subtitle" className="title drop-shadow debug-border">
                &quot;Well, what are you waiting for, stalker? Get in
                here!&quot;
              </span>
            </div>
            <nav className="debug-border">
              <Link to="/about">About</Link>
            </nav>
          </header>

          <main>
            <div></div>
          </main>
          <footer>

          </footer>
        </div>
      </div>

        <Routes>
          <Route path="/about" element={<h2>About</h2>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
