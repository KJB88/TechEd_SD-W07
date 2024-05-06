import "./css/core.css";
import "./css/header.css";

/* A blank anchor link, waiting to be filled with data. */
export default function ALink(data) {
  return (
    <a className="anchor-link drop-shadow" href={data.url} aria-label={data.ariaLabel}>
      {data.innerText}
    </a>
  );
}
