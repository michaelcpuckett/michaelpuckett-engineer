import fs from "fs";

export function getStyles() {
  return fs.readFileSync("src/styles.css", "utf8");
}
