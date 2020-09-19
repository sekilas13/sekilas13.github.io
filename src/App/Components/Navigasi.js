import React, { useRef, useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

function Navigasi() {
  const ref = useRef();
  const [state, setState] = useState({ expanded: false });

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

  return (
    <Navbar
      bg="light"
      variant="light"
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigasi;
