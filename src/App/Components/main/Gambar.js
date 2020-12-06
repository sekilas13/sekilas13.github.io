import { memo } from "react";
import LazyLoad from "react-lazyload";
import loadable from "@loadable/component";

const GambarContent = loadable(() => import("./lazy/GambarContent"));

function Gambar() {
  return (
    <section id="gambar">
      <LazyLoad once>
        <GambarContent />
      </LazyLoad>
    </section>
  );
}

export default memo(Gambar);
