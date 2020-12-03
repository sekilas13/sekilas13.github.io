import { Suspense, memo } from "react";
import loadable from "@loadable/component";
import Loading from "../../Custom/Loading";

const GambarContent = loadable(() => import("./lazy/GambarContent"));

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
