import { lazy } from "react";
const Animated = lazy(() =>
  import("react-spring").then((mod) => ({ default: mod.animated.p }))
);

function JumboH2({ offset, calc3 }) {
  return (
    <Animated
      style={{
        transform: offset.interpolate(calc3),
        overflow: "hidden",
      }}
    >
      Semangat KIR Tiga Belas !
    </Animated>
  );
}

export default JumboH2;
