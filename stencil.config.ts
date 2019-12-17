import { Config } from "@stencil/core";
import { postcss } from "@stencil/postcss";
import autoprefixer from "autoprefixer";
import { generateJsonDocs } from "./src/customElementDocGenerator";

const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/**/*.tsx", "./src/index.html"],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

export const config: Config = {
  globalStyle: "src/global/app.css",
  namespace: "stencil-app",
  outputTargets: [
    {
      type: "www",
      serviceWorker: null,
      baseUrl: "http://localhost:5000"
    },
    {
      type: "dist"
    },
    { type: "docs-readme" },
    { type: "docs-vscode", file: "docs-vscode.json" },
    { type: "docs-json", file: "docs-json.json" },
    {
      type: "custom",
      generator: generateJsonDocs,
      name: "custom-element-docs"
    }
  ],
  plugins: [
    postcss({
      plugins: [
        require("tailwindcss")("./tailwind.config.js"),
        autoprefixer(),
        ...(process.env.NODE_ENV === "production"
          ? [purgecss, require("cssnano")]
          : [])
      ]
    })
  ]
};
