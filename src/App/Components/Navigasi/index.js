import { useRef, useState, useContext, useCallback, memo } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useLocation, useHistory } from "react-router-dom";
import { useDarkMode } from "../../hooks/useDarkMode";
import { Context } from "../../utils/stateProvider";
import loadable from "@loadable/component";
import { observer } from "mobx-react";

const FormSwitcher = loadable(() => import("./Memoized/FormSwitcher"));
const NavLink = loadable(() => import("./Memoized/NavLink"));

function Navigasi() {
  const store = useContext(Context);
  const ref = useRef();
  const [themeToggler] = useDarkMode();
  const [state, UNSAFE_setState] = useState({
    expanded: false,
  });

  const location = useLocation();
  const history = useHistory();

  const theme = store.theme;

  const setState = useCallback(
    (data) => UNSAFE_setState({ ...state, ...data }),
    [state]
  );
  const expandClose = useCallback(() => setState({ expanded: false }), [
    setState,
  ]);
  const tToggler = useCallback(() => void themeToggler(), [themeToggler]);
  const getHeight = useCallback(
    () =>
      ref.current ? ref.current.getBoundingClientRect().height : ref.current,
    [ref]
  );

  const handleBrand = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const Links = document.querySelectorAll(".nav-link");
      Links.forEach((el) => {
        el.classList.remove("active");
      });
      if (state.expanded) {
        expandClose();
        setTimeout(() => window.scrollTo(0, 0), 150);
      } else {
        window.scrollTo(0, 0);
      }
    } else {
      if (state.expanded) {
        expandClose();
        setTimeout(() => history.push("/"), 300);
      } else {
        history.push("/");
      }
    }
  };

  return (
    <Navbar
      bg={theme === "light" && theme}
      variant={theme}
      className={theme === "dark" && "navbar-custom"}
      sticky="top"
      expand="lg"
      expanded={state.expanded}
      onToggle={() => setState({ expanded: state.expanded ? false : true })}
      ref={ref}
    >
      <Container>
        <Navbar.Brand href="#" onClick={handleBrand}>
          KIR
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navigasi-nav" />
        <Navbar.Collapse id="navigasi-nav">
          <Nav className="ml-auto text-center">
            <NavLink
              path={location.pathname}
              getHeight={getHeight}
              expanded={state.expanded}
              setExpandClose={expandClose}
            />
          </Nav>
          <FormSwitcher theme={theme} tToggler={tToggler} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default memo(observer(Navigasi));
