const Route = [":hash/", ":hash/covid"];

const config = {
  ":hash/": [{ hash: "#" }],
  ":hash/covid": [{ hash: "#" }],
};

const fs = require("fs");
const path = require("path");

const applyParams = require("react-router-sitemap").paramsApplier;
const buildSitemap = require("react-router-sitemap").sitemapBuilder;

const Jalur = applyParams(Route, config);

const sitemap = buildSitemap("https://sekilas13.github.io/", Jalur);

const dest = path.resolve("../public", "sitemap.xml");
fs.writeFileSync(dest, sitemap.toString());
