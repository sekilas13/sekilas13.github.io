import React from "react";
import { Navigasi, JumbotronTop, Deskripsi, Gambar } from "./Components";
import SimpleReactLightbox from "simple-react-lightbox";

function App() {
  return (
    <SimpleReactLightbox>
      <Navigasi />
      <JumbotronTop />
      <Deskripsi />
      <Gambar />
    </SimpleReactLightbox>
  );
}

export default App;
