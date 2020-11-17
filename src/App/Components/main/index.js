import { Fragment, Suspense, lazy } from "react";
import JumbotronTop from "./Jumbotron-top";
import Loading from "../../Custom/Loading";
import "./main.css";
import "./responsive.css";

const Deskripsi = lazy(() => import("./Deskripsi"));
const KataOrang = lazy(() => import("./KataOrang"));
const Gambar = lazy(() => import("./Gambar"));
const Footer = lazy(() => import("./Footer"));

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
