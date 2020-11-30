import { Suspense, lazy } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Email = lazy(() => import("./lazy/FooterEmail"));
const Info = lazy(() => import("./lazy/FooterInfo"));

const FallbackEmail = () => (
  <p>
    Ada pertanyaan ? Tanyakan lewat email{" "}
    <a href="mailto:smpn13kir@gmail.com">smpn13kir@gmail.com</a>
  </p>
);
const FallbackInfo = () => (
  <p>
    Dibuat oleh{" "}
    <a
      href="https://github.com/sekilas13"
      target="_blank"
      rel="noopener noreferrer"
    >
      Karya Ilmiah Remaja
    </a>{" "}
    SMP Negeri 13 Bekasi | {new Date().getFullYear()}
  </p>
);

function Footer() {
  return (
    <footer className="bg-dark text-white">
      <Container>
        <Row className="pt-3 justify-content-center text-center">
          <Col md={4}>
            <Suspense fallback={FallbackEmail()}>
              <Email />
            </Suspense>
          </Col>
          <Col md={4}>
            <Suspense fallback={FallbackInfo()}>
              <Info />
            </Suspense>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
