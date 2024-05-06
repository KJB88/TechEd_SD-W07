import "./css/common.css";
import "./css/core.css";
import "./css/bodyMain.css";

export default function Post(props)
{
  return (
        <div className="post-container-div">
      <div className="post-user-div">
        <img src="/vite.svg"></img>
        <span className="drop-shadow">Vanderlust</span>
      </div>
      <div className="post-header-div">
        <span className="drop-shadow">
          03-05-1994 - &quot;{props.header}&quot; - Skadovsk
        </span>
      </div>
      <div className="post-content-div">
        <p className="drop-shadow">{props.content}</p>
      </div>
      </div>
  );
}
