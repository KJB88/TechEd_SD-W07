import "./css/common.css";
import "./css/core.css";
import "./css/bodyMain.css";
import {Link} from "react-router-dom"
import {metaFilters} from "./js/fetchLibrary.js"

export default function Category() {
  const htmlFilters = metaFilters.map((filter) => (

    <Link key={filter.innerText} ari-label={filter.ariaLabel} to={filter.url}>
      {filter.innerText}
      </Link>
  ));

  return (
  <div id="tab-div">
    {htmlFilters}
    </div>
  )
}