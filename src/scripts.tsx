import fs from "fs";

export function getScripts() {
  return fs.readFileSync("src/customElements.js", "utf8");
}
