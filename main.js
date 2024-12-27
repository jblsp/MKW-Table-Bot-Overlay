import { startOverlay } from "./overlay.js";

const urlParams = new URLSearchParams(window.location.search);

const fc = urlParams.get("fc");
const style = urlParams.get("style");
const tableID = urlParams.get("tableID");

if (!fc || !tableID) {
  document.getElementById("setupButton").onclick = () => {
    const fc = document.getElementById("fc").value;
    const style = document.getElementById("style").value;
    const tableID = document.getElementById("tableID").value;
    let url = new URL(window.location);
    url.searchParams.set("fc", fc);
    url.searchParams.set("tableID", tableID);
    url.searchParams.set("style", style);
    window.location.href = url.toString();
  };
} else {
  if (style !== "None") {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `styles/${style}.css`;
    document.head.appendChild(link);
  }
  document.getElementById("setupHelper").remove();
  startOverlay(fc, tableID, 7500);
}
