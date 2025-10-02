import "../styles/styles.css";
import { startRouter } from "./router.js";
//using what mason told me
import "@picocss/pico/css/pico.min.css"
//help from copilot
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
/* Start the router (this lets us show different pages -- see 
router.js) */
startRouter();
