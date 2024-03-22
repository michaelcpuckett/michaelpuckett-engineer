import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { IndexPage } from "./IndexPage";
import fs from "fs";
import path from "path";

const app = express();

app.get("/", (req, res) => {
  const htmlResult = `<!doctype html>
    ${ReactDOMServer.renderToString(<IndexPage />)}
  `;

  fs.writeFileSync(path.resolve("./dist/", "index.html"), htmlResult, "utf8");

  res.send(htmlResult);
});

app.get("/test", async (req, res) => {
  await fetch(`http://localhost:3000/index.html`);
  res.send("done");
});

app.listen(3000, () => {
  console.log("Running on 3000");
});
