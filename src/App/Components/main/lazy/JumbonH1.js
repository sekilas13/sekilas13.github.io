import { lazy } from "react";
const Animated = lazy(() =>
  import("react-spring").then((mod) => ({ default: mod.animated.h1 }))
);

function JumboH2({ offset, calc2 }) {
  return (
    <Animated
      style={{
        transform: offset.interpolate(calc2),
        overflow: "hidden",
      }}
      id="tsukilas"
    >
      Sekilas !
    </Animated>
  );
}

export default JumboH2;
