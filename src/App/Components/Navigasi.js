import React, { useRef, useState, Fragment, useEffect } from "react";
import { Container, Navbar, Nav, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDarkMode } from "../hooks/useDarkMode";
import {
  faSun as SunSolid,
  faMoon as MoonSolid,
} from "@fortawesome/free-solid-svg-icons";
import {
  faSun as SunRegular,
  faMoon as MoonRegular,
} from "@fortawesome/free-regular-svg-icons";

function Navigasi({ tToggler }) {
  const ref = useRef();
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const [state, UNSAFE_setState] = useState({
    expanded: false,
  });

  const setState = (data) => UNSAFE_setState({ ...state, ...data });

  useEffect(() => {
    if (mountedComponent) tToggler({ theme });
    // eslint-disable-next-line
  }, [theme]);

  const handleBrand = (e) => {
    e.preventDefault();
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

  const Link = [
    { nama: "Deskripsi", to: "#deskripsi" },
    { nama: "Pandangan Orang", to: "#KataOrang" },
    { nama: "Gambar", to: "#gambar" },
  ];

  if (!mountedComponent) return <Fragment />;
  return (
    <Navbar
      bg={theme}
      variant={theme}
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
            {Link.map((link, i) => (
              <Nav.Link
                key={i}
                href={link.to}
                id={link.to}
                onClick={handleLink}
              >
                {link.nama}
              </Nav.Link>
            ))}
          </Nav>
          <Form>
            <Form.Row className="justify-content-center">
              <small className="sun">
                <FontAwesomeIcon
                  icon={theme !== "dark" ? SunSolid : SunRegular}
                />
              </small>
              <Form.Check
                type="switch"
                id="custom-switch"
                checked={theme === "light" ? false : true}
                onChange={themeToggler}
                label=""
              />
              <small className="moon">
                <FontAwesomeIcon
                  icon={theme !== "dark" ? MoonRegular : MoonSolid}
                />
              </small>
            </Form.Row>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigasi;
