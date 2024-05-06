
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
        url: "/all",
        ariaLabel: "No filter. Get all posts.",
        innerText: "ALL"
    },
    {
        url: "/new",
        ariaLabel: "Filter by latest posts",
        innerText: "NEW"
    },
    {
        url: "/popular",
        ariaLabel: "Filter by most likes",
        innerText: "POPULAR"
    },
    {
        url: "/tag",
        ariaLabel: "Filter by tags",
        innerText: "BY TAG"
    },
]