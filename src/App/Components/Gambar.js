import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { SRLWrapper } from "simple-react-lightbox";

import img1 from "../asset/Img/1.jpg";
import img2 from "../asset/Img/2.jpg";
import img3 from "../asset/Img/3.jpg";
import img4 from "../asset/Img/4.jpg";
import img5 from "../asset/Img/5.jpg";
import img6 from "../asset/Img/6.jpg";

const gambar = [
  {
    src: img1,
    alt: "",
  },
  {
    src: img2,
    alt: "",
  },
  {
    src: img3,
    alt: "",
  },
  {
    src: img4,
    alt: "",
  },
  {
    src: img5,
    alt: "",
  },
  {
    src: img6,
    alt: "",
  },
];

function Gambar() {
  return (
    <section id="gambar">
      <SRLWrapper>
        <Container className="pt-4">
          <Row>
            {gambar.map((g, i) => (
              <Col md={4} key={i}>
                <Image src={g.src} alt={g.alt} className="img-thumbnail mt-3" />
              </Col>
            ))}
          </Row>
        </Container>
      </SRLWrapper>
    </section>
  );
}

export default Gambar;
