import { updateOverlay } from "./overlay.js";

fetch("./settings.json")
  .then((response) => response.json())
  .then((settings) => {
    setTimeout(function () {
      updateOverlay(settings);
    }, 7500);
    updateOverlay(settings);
  });
