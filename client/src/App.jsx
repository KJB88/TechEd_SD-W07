import "./css/core.css";
import "./css/common.css";
import "./css/bodyMain.css";
import Header from "./Header";
import Footer from "./Footer";
export default function App() {
  return (
    <>
      <div id="background-image">
        <div id="foreground">
          <Header />
          <main>
            <div id="main-div">
              <div id="tab-div">
                {/* This lists the options for filtering, taking to a new page*/}
                <span className="drop-shadow">ALL</span>
                <span className="drop-shadow">NEW</span>
                <span className="drop-shadow">POPULAR</span>
                <span className="drop-shadow">BY TAG</span>
              </div>

              <div id="posts-container-div">
                {/* Posts display below here*/}
                <div className="post-container-div">
                  <div className="post-user-div drop-shadow">
                    <img src="/vite.svg"></img>
                    <p>Vanderlust</p>
                  </div>
                  <div className="post-header-div drop-shadow">
                    <span>Welcome to the Zone, Stalker!</span>
                    <span>03-05-1994</span>
                  </div>
                  <div className="post-content-div drop-shadow">
                    Privyit Bratan! Welcome to the Zone!
                  </div>
                </div>
                {/* Posts display above here*/}
              </div>
            </div>
          </main>
          <Footer />
        </div>
        {/* End foreground */}
      </div>
      {/* End background */}
    </>
  );
}
