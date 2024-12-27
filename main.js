import { updateOverlay } from "./overlay.js";

const urlParams = new URLSearchParams(window.location.search);

const fc = urlParams.get("fc");
const tableID = urlParams.get("tableID");

if (!fc || !tableID) {
  console.error(
    "Missing paramater(s). URL must include ?fc=xxxx-xxxx-xxxx&tableID=xxx"
  );
} else {
  updateOverlay(fc, tableID);
  setTimeout(function () {
    updateOverlay(fc, tableID);
  }, 7500);
}
