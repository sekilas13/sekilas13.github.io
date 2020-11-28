const es2015 = require("babel-preset-es2015");
const presetReact = require("babel-preset-react");
const dynamicImport = require("plugin-proposal-dynamic-import");

require("babel-register")({
  presets: [es2015, presetReact, dynamicImport],
});

const router = require("./App/Routing").default;
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {
  return new Sitemap(router())
    .build("https://sekilas13.github.io")
    .save("../public/sitemap.xml");
}

generateSitemap();
