import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Head, IndexPage } from "./IndexPage";

export function renderStaticPage() {
  return {
    head: renderToStaticMarkup(<Head />),
    body: renderToStaticMarkup(<IndexPage />),
  };
}
