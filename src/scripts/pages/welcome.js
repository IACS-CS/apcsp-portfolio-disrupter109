// src/scripts/pages/welcome.js
import { renderMenu } from "../utils/renderMenu.js";

export function renderWelcome() {
  /* html */
  return `
    <!-- code generated in welcome.js -->
    <h1>Jayden's Student Portfolio</h1>
    ${renderMenu()}
    <h2>About Me :)</h2>
    <p>I am a junior at IACS and a Varsity Captain for the soccer team. I play club soccer for NEFC and town soccer for Dracut. My previous coding experience is literally just my dad teaching me basic Python and when I tried to make a game using Unreal Engine a while back (but I didn't really learn anything).</p>
    <!-- an example image: Notice that images live in public/ -->
    <img src="./example-circle.svg" alt="A blue circle" >

    <!-- end code generated in welcome.js -->
  `;
}
