import "@picocss/pico/css/pico.min.css"
import "../styles/styles.css";
import { startRouter } from "./router.js";
//using what mason told me

//help from copilot
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
/* Start the router (this lets us show different pages -- see 
router.js) */

startRouter();
//help from copilot to set up buttons
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("mode-toggle");
  button.addEventListener("click", function () {
    // Pico uses the 'data-theme' attribute on <html>
    const html = document.documentElement;
    if (html.getAttribute("data-theme") === "dark") {
      html.setAttribute("data-theme", "light");
    } else {
      html.setAttribute("data-theme", "dark");
    }
  });
});