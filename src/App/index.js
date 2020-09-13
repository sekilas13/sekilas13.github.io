import React from "react";
import {
  Navigasi,
  JumbotronTop,
  Deskripsi,
  Gambar,
  Footer,
} from "./Components";
import SimpleReactLightbox from "simple-react-lightbox";

function App() {
  return (
    <SimpleReactLightbox>
      <Navigasi />
      <JumbotronTop />
      <Deskripsi />
      <Gambar />
      <Footer />
    </SimpleReactLightbox>
  );
}

export default App;
