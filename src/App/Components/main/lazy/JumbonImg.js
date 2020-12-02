import { lazy, useEffect, useState } from "react";
const Animated = lazy(() =>
  import("react-spring").then((mod) => ({ default: mod.animated.img }))
);

const loadRealImage = (src) =>
  new Promise((resolve) => {
    const image = new Image();
    image.onload = resolve;
    image.src = src;
  });

const src = {
  real: process.env.PUBLIC_URL + "/assets/real/KIR.png",
  placeholder: process.env.PUBLIC_URL + "/assets/real/KIR.placeholder.png",
};

function JumboImg({ offset, calc }) {
  const [loading, setLoading] = useState(true);

  useEffect(
    () =>
      setTimeout(
        loadRealImage(src.real).then(() => setLoading(false)),
        500
      ),
    []
  );

  return (
    <Animated
      src={loading ? src.placeholder : src.real}
      className="img-fluid text-center rounded"
      alt="Logo KIR"
      style={{
        filter: loading ? "blur(5px)" : "none",
        transform: offset.interpolate(calc),
        transition: "all 0.40s linear",
        overflow: "hidden",
      }}
    />
  );
}

export default JumboImg;
