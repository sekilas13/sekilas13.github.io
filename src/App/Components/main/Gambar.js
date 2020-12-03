import { Suspense, lazy, memo } from "react";
import Loading from "../../Custom/Loading";

const GambarContent = lazy(() => import("./lazy/GambarContent"));

function Gambar() {
  return (
    <section id="gambar">
      <Suspense fallback={Loading()}>
        <GambarContent />
      </Suspense>
    </section>
  );
}

export default memo(Gambar);
