import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { SRLWrapper } from "simple-react-lightbox";
import gambar from "../assets/data/Gambar";

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
