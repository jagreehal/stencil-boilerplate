import { Config } from "@stencil/core";
import { postcss } from "@stencil/postcss";
import { generateJsonDocs } from "./src/customElementDocGenerator";
const packageJson = require("./package.json");

export const config: Config = {
  globalStyle: "src/global/app.css",
  namespace: packageJson.name,
  // @ts-ignore
  buildDocs: true,
  outputTargets: [
    {
      type: "www",
      serviceWorker: null,
      baseUrl: "http://localhost:5000",
    },
    {
      type: "dist",
      esmLoaderPath: "../loader",
    },
    { type: "docs-readme" },
    { type: "docs-vscode", file: "docs-vscode.json" },
    { type: "docs-json", file: "docs-json.json" },
    {
      type: "custom",
      generator: generateJsonDocs,
      name: "custom-element-docs",
    },
  ],
  plugins: [
    postcss({
      plugins: [
        require("tailwindcss")("./tailwind.config.js"),
        require("postcss-preset-env"),
      ],
    }),
  ],
};
