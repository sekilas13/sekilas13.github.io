import { useState, useEffect, useContext, memo } from "react";
import { Context } from "../../utils/stateProvider";
import loadable from "@loadable/component";
import { observer } from "mobx-react";
import LazyLoad from "react-lazyload";

const Content = loadable(() => import("./lazy/KataOrangRousel"));

function KataOrang() {
  const store = useContext(Context);

  const [ukuran, setUkuran] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const curr = document.querySelector("#KataOrang");
    const Ubah = { width: curr.offsetWidth, height: curr.offsetHeight };
    setUkuran(Object.assign({}, Ubah));

    function resize() {
      const forUbah = { width: curr.offsetWidth, height: curr.offsetHeight };
      setUkuran(Object.assign({}, forUbah));
    }

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section id="KataOrang">
      <LazyLoad once>
        <Content theme={store.theme} ukuran={ukuran} />
      </LazyLoad>
    </section>
  );
}

export default memo(observer(KataOrang));
