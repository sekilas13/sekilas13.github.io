import { Suspense, lazy } from "react";
const Content = lazy(() => import("./lazy/DeskripsiContent"));

const Fallback = () => (
  <div className="container">
    <div className="row justify-content-center">
      <div className="col mt-3">
        <h2 className="text-center">Apa itu KIR ?</h2>
      </div>
    </div>
  </div>
);

function Deskripsi() {
  return (
    <section id="deskripsi">
      <Suspense fallback={Fallback()}>
        <Content />
      </Suspense>
    </section>
  );
}

export default Deskripsi;
