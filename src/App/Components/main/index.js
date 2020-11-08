import { Fragment } from "react";
import JumbotronTop from "./Jumbotron-top";
import Deskripsi from "./Deskripsi";
import KataOrang from "./KataOrang";
import Gambar from "./Gambar";
import Footer from "./Footer";

function Main() {
  return (
    <Fragment>
      <JumbotronTop />
      <Deskripsi />
      <KataOrang />
      <Gambar />
      <Footer />
    </Fragment>
  );
}

export default Main;
