import "./css/core.css";
import "./css/common.css";
import "./css/header.css";
import Nav from "./Nav.jsx";

export default function Header()
{

    return (
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
    )
}