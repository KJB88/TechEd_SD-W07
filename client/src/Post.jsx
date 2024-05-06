import "./css/bodyMain.css"
import "./css/common.css"
import "./css/core.css"

export default function Post()
{
    return (
    <div className="post-container-div">
                  <div className="post-user-div">
                    <img src="/vite.svg"></img>
                    <span className="drop-shadow">Vanderlust</span>
                  </div>
                  <div className="post-header-div">
                  <span className="drop-shadow">
                      03-05-1994 - Welcome to the Zone, Stalker!
                    </span>

                  </div>
                  <div className="post-content-div">
                    <p className="drop-shadow">
                      Privyit Bratan! Welcome to the Zone!
                    </p>
                  </div>
                </div>
    )
}