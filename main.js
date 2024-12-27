import { updateOverlay } from "./overlay.js";

const urlParams = new URLSearchParams(window.location.search);

const fc = urlParams.get("fc");
const tableID = urlParams.get("tableID");

if (!fc || !tableID) {
  document.getElementById("setupButton").onclick = () => {
    const fc = document.getElementById("fc").value;
    const tableID = document.getElementById("tableID").value;
    let url = new URL(window.location);
    url.searchParams.set("fc", fc);
    url.searchParams.set("tableID", tableID);
    window.location.href = url.toString();
  };
} else {
  document.getElementById("setupHelper").remove();
  updateOverlay(fc, tableID);
  setTimeout(function () {
    updateOverlay(fc, tableID);
  }, 7500);
}
