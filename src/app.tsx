import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import express from "express";
import fs from "fs";
import path from "path";
import postcss from "postcss";
import postcssNesting from "postcss-nesting";
import ReactDOMServer from "react-dom/server";
import { IndexPage } from "./IndexPage";

const app = express();

app.get("/", (req, res) => {
  const htmlResult = `<!doctype html>
    ${ReactDOMServer.renderToString(<IndexPage />)}
  `;

  fs.writeFileSync(path.resolve("./dist/", "index.html"), htmlResult, "utf8");

  res.send(htmlResult);
});

app.get("/styles.css", async (req, res) => {
  const authoredStyles = fs.readFileSync("src/styles.css", "utf8");
  const cssResult = await postcss([
    cssnano({
      preset: "default",
    }),
    autoprefixer,
    postcssNesting(),
  ])
    .process(authoredStyles, { from: "styles.css", to: "styles.css" })
    .then((result: postcss.Result) => {
      return result.css;
    });

  fs.writeFileSync(path.resolve("./dist/", "styles.css"), cssResult, "utf8");

  res.setHeader("Content-Type", "text/css");
  res.send(cssResult);
});

app.get("/scripts.js", async (req, res) => {
  const scriptsResult = fs.readFileSync("src/customElements.js", "utf8");

  fs.writeFileSync(
    path.resolve("./dist/", "scripts.js"),
    scriptsResult,
    "utf8"
  );

  res.setHeader("Content-Type", "application/javascript");
  res.send(scriptsResult);
});

app.get("*", async (req, res) => {
  const url = path.resolve(__dirname, "../dist/", req.url.slice(1));

  if (fs.existsSync(url)) {
    res.setHeader("Content-Type", "font/ttf");
    res.send(fs.readFileSync(url));
  } else {
    res.statusCode = 404;
    res.send("");
  }
});

app.listen(3000, () => {
  console.log("Running on 3000");
});
