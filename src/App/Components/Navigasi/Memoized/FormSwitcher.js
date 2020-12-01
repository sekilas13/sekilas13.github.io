import Form from "react-bootstrap/Form";
import Switcher from "./Switcher";
import { memo } from "react";
import Moon from "./Moon";
import Sun from "./Sun";

function FormSwitcher({ theme, tToggler }) {
  return (
    <Form>
      <Form.Row className="justify-content-center">
        <small className="sun">
          <Sun theme={theme} />
        </small>
        <Switcher theme={theme} tToggler={tToggler} />
        <small className="moon">
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
