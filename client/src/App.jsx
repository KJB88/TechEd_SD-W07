import "./css/core.css";
import "./css/common.css";
import "./css/bodyMain.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./bodyMain";

export default function App() {
  return (
    <>
      <div id="background-image">
        <div id="foreground">
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    </>
  );
}
