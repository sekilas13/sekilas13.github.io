import { Fragment, Suspense } from "react";
import JumbotronTop from "./Jumbotron-top";
import Loading from "../../Custom/Loading";
import loadable from "@loadable/component";
import "./main.css";
import "./responsive.css";

const Deskripsi = loadable(() => import("./Deskripsi"));
const KataOrang = loadable(() => import("./KataOrang"));
const Gambar = loadable(() => import("./Gambar"));
const Footer = loadable(() => import("./Footer"));

function Main() {
  return (
    <Fragment>
      <JumbotronTop />
      <Suspense fallback={<Loading />}>
        <Deskripsi />
        <KataOrang />
        <Gambar />
        <Footer />
      </Suspense>
    </Fragment>
  );
}

export default Main;
