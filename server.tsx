import React from "react";
import * as ReactDOMServer from "react-dom/server";
import { Resume } from "./Resume";
import { writeFileSync } from "fs";
import { mkdirSync } from "fs";

mkdirSync("public", { recursive: true });

writeFileSync(
  "public/index.html",
  "<!DOCTYPE html>" + ReactDOMServer.renderToStaticMarkup(<Resume />)
);