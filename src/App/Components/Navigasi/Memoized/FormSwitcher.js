import Form from "react-bootstrap/Form";
import Switcher from "./Switcher";
import { memo } from "react";
import Moon from "./Moon";
import Sun from "./Sun";

function FormSwitcher({ theme, tToggler }) {
  return (
    <Form style={{ paddingLeft: "10px", paddingRight: "10px" }}>
      <Form.Row className="justify-content-center">
        <small
          style={{ paddingTop: "3px", paddingRight: "7px", color: "yellow" }}
        >
          <Sun theme={theme} />
        </small>
        <Switcher theme={theme} tToggler={tToggler} />
        <small style={{ paddingTop: "2.4px", color: "blue" }}>
          <Moon theme={theme} />
        </small>
      </Form.Row>
    </Form>
  );
}

const compare = function (prevProps, nextProps) {
  return prevProps.theme === nextProps.theme;
};

export default memo(FormSwitcher, compare);
