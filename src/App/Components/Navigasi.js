import React, { useRef } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

function Navigasi() {
  const ref = useRef();

  const handleBrand = (e) => {
    e.preventDefault();
    const Links = document.querySelectorAll(".nav-link");
    Links.forEach((el) => {
      el.classList.remove("active");
    });
    window.scrollTo(0, 0);
  };

  const handleLink = (e) => {
    e.preventDefault();

    // if (e.target !== null) {
    const el = document.querySelector(e.target.id.split("-link")[0]);
    const tujuan = el.offsetTop - ref.current.getBoundingClientRect().height;
    window.scrollTo(0, tujuan);
    // }
  };

  const Link = ["Deskripsi", "Gambar"];

  return (
    <Navbar bg="primary" variant="dark" sticky="top" ref={ref}>
      <Container>
        <Navbar.Brand href="#" onClick={handleBrand}>
          KIR
        </Navbar.Brand>
        <Nav className="my-auto">
          {Link.map((nama, i) => (
            <Nav.Link
              key={i}
              id={`#${nama.toLowerCase()}-link`}
              href={`#${nama.toLowerCase()}`}
              onClick={handleLink}
            >
              {nama}
            </Nav.Link>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigasi;
