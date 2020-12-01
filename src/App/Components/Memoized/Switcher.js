import { memo } from "react";
import Check from "react-bootstrap/FormCheck";

function Switcher({ theme, tToggler }) {
  return (
    <Check
      type="switch"
      id="custom-switch"
      checked={theme === "light" ? false : true}
      onChange={tToggler}
      label="&zwnj;"
    />
  );
}

const compare = function (prevProps, nextProps) {
  return prevProps.theme === nextProps.theme;
};

export default memo(Switcher, compare);
