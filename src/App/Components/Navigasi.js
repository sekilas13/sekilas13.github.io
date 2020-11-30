import { useLocation, useHistory, Link as SPALink } from "react-router-dom";
import { useRef, useState, useContext, Fragment, memo } from "react";
import { Container, Navbar, Nav, Form } from "react-bootstrap";
import { useDarkMode } from "../hooks/useDarkMode";
import { Context } from "../utils/stateProvider";
import { observer } from "mobx-react";
import Moon from "./Memoized/Moon";
import Sun from "./Memoized/Sun";

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

  const setState = (data) => UNSAFE_setState({ ...state, ...data });

  const handleBrand = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const Links = document.querySelectorAll(".nav-link");
      Links.forEach((el) => {
        el.classList.remove("active");
      });
      if (state.expanded) {
        setState({ expanded: false });
        setTimeout(() => window.scrollTo(0, 0), 150);
      } else {
        window.scrollTo(0, 0);
      }
    } else {
      if (state.expanded) {
        setState({ expanded: false });
        setTimeout(() => history.push("/"), 300);
      } else {
        history.push("/");
      }
    }
  };

  const handleLink = (e) => {
    e.preventDefault();

    setState({ expanded: false });
    const el = document.querySelector(e.target.id);
    if (state.expanded) {
      setTimeout(() => {
        const tujuan =
          el.offsetTop - ref.current.getBoundingClientRect().height;
        window.scrollTo(0, tujuan);
      }, 150);
    } else {
      const tujuan = el.offsetTop - ref.current.getBoundingClientRect().height;
      window.scrollTo(0, tujuan);
    }
  };

  const Link = {
    main: [
      { nama: "Deskripsi", to: "#deskripsi" },
      { nama: "Pandangan Orang", to: "#KataOrang" },
      { nama: "Gambar", to: "#gambar" },
    ],
    covid: [
      { nama: "Kondisi Terkini", to: "#all" },
      { nama: "Data Provinsi", to: "#provinsi" },
    ],
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
            {location.pathname === "/" && (
              <Fragment>
                <Nav.Link
                  as={SPALink}
                  to="/covid"
                  onClick={() =>
                    state.expanded && setState({ expanded: false })
                  }
                >
                  Informasi Covid 19
                </Nav.Link>

                {Link.main.map((link, i) => (
                  <Nav.Link
                    key={i}
                    href={link.to}
                    id={link.to}
                    onClick={handleLink}
                  >
                    {link.nama}
                  </Nav.Link>
                ))}
              </Fragment>
            )}
            {location.pathname === "/covid" && (
              <Fragment>
                <Nav.Link
                  as={SPALink}
                  to="/"
                  onClick={() =>
                    state.expanded && setState({ expanded: false })
                  }
                >
                  Halaman Utama
                </Nav.Link>

                {Link.covid.map((link, i) => (
                  <Nav.Link
                    key={i}
                    href={link.to}
                    id={link.to}
                    onClick={handleLink}
                  >
                    {link.nama}
                  </Nav.Link>
                ))}
              </Fragment>
            )}
          </Nav>
          <Form>
            <Form.Row className="justify-content-center">
              <small className="sun">
                <Sun theme={theme} />
              </small>
              <Form.Check
                type="switch"
                id="custom-switch"
                checked={theme === "light" ? false : true}
                onChange={themeToggler}
                label="&zwnj;"
              />
              <small className="moon">
                <Moon theme={theme} />
              </small>
            </Form.Row>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default memo(observer(Navigasi));
