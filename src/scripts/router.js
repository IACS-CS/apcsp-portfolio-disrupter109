// src/scripts/router.js
import { renderWelcome } from "./pages/welcome.js";
import { renderBinarySearch } from "./pages/binarySearch.js";
import { renderCitations } from "./pages/citations.js";
import { renderDev } from "./pages/Dev.js";
import { renderProject2 } from "./pages/project2.js";

/* route takes a path and chooses which page to render.
It is called each time the user clicks on a navigation link */
export function route(path) {
  if (path === "" || path === "/") {
    return renderWelcome();
  } else if (path === "/binary-search") {
    return renderBinarySearch();
  } else if (path==="/citations"){
    return renderCitations();
  } else if (path==="/dev"){ 
    return renderDev();
  } else if (path==="/project-2"){
    return renderProject2();
  } else {
    return `<h1>Lock in buddy this page doesn't exist</h1><a href="#/">Back Home</a>`;
  }
}

export function startRouter() {
  function render() {
    const hash = window.location.hash.replace(/^#\/?/, "/");
    document.getElementById("app").innerHTML = route(hash);
  }
  window.addEventListener("hashchange", render);
  render();
}
