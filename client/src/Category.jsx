import "./css/common.css"
import "./css/core.css"
import "./css/bodyMain.css"
import AnchorLink from "./AnchorLink";

export default function Category()
{
    const htmlFilters = metaFilters.map((filter) => (
        <AnchorLink
          key={filter.innerText}
          url={filter.url}
          ariaLabel={filter.ariaLabel}
          innerText={filter.innerText}
        />
      ));

    return (
    <div id="tab-div">
        {htmlFilters}
  </div>
    )
}

// Storage array - could be a JSON to make it pure data too.
const metaFilters = [
    {
        url: "",
        ariaLabel: ".",
        innerText: "ALL"
    },
    {
        url: "",
        ariaLabel: "",
        innerText: "NEW"
    },
    {
        url: "",
        ariaLabel: "",
        innerText: "POPULAR"
    },
    {
        url: "",
        ariaLabel: "",
        innerText: "BY TAG"
    },
]