// main.js
import { initApproachAnimation, initSwiper } from "./animations.js";

document.addEventListener("DOMContentLoaded", () => {
  initApproachAnimation(window.gsap);
  initSwiper();
});
