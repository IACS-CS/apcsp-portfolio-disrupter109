import { renderMenu } from "../utils/renderMenu.js";
//copilot helped me save time since i already know how to do it
export function renderAPCSP() {
  return `
		<h1>APCSP Portfolio Page</h1>
		${renderMenu()}
		<div class="profile-text">
			<h2>About APCSP</h2>
			<p>This page is for APCSP projects and information.</p>
			<p> Link to view the beautiful code for this project: </p>
				<a href="https://github.com/IACS-CS/apcsp-portfolio-disrupter109" target="_blank">
          			https://github.com/IACS-CS/apcsp-portfolio-disrupter109
        </a> 
		</div>
	`;
}
