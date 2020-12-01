import { lazy } from "react";
const Animated = lazy(() =>
  import("react-spring").then((mod) => ({ default: mod.animated.img }))
);
// process.env.PUBLIC_URL + "/assets/real/KIR.placeholder.png"

function JumboImg({ offset, calc }) {
  return (
    <Animated
      src={process.env.PUBLIC_URL + "/assets/real/KIR.png"}
      className="img-fluid text-center rounded"
      alt="Logo KIR"
      style={{
        transform: offset.interpolate(calc),
        overflow: "hidden",
      }}
    />
  );
}

export default JumboImg;
