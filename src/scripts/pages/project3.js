import { renderMenu } from "../utils/renderMenu.js";
import { renderIframe } from "../utils/renderIframe.js";

export function renderProject3(){
  /* html */
  return `
    <!-- code generated in binarySearch.js -->
    <h1>Second Project</h1>    
    ${renderMenu()}
    <article class="fixed-article">
      <p>Assignment: Create a program ...</p>
      <hr>
      <p>My project was super fun, I worked hard on it!</p>
      ${renderIframe(
        "https://iacs-cs.github.io/binary-search-jayden-and-mason/",
        "Naruto Binary Search"
      )}
    </article>
    <!-- end code generated in binarySearch.js -->
  `;
}
