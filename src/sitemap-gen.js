const router = require("./App/Routing").default;
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {
  return new Sitemap(router())
    .build("https://sekilas13.github.io")
    .save("../public/sitemap.xml");
}

generateSitemap();
