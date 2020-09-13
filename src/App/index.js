import React from "react";
import {
  Navigasi,
  JumbotronTop,
  Deskripsi,
  kataOrang,
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
      <kataOrang />
      <Gambar />
      <Footer />
    </SimpleReactLightbox>
  );
}

export default App;
