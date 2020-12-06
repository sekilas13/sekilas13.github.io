import { Suspense } from "react";
import loadable from "@loadable/component";
import { Container, Row, Col } from "react-bootstrap";

const Email = loadable(() => import("./FooterEmail"));
const Info = loadable(() => import("./FooterInfo"));

const FallbackEmail = () => <p>Ada pertanyaan ? Tanyakan lewat email</p>;

const FallbackInfo = () => (
  <p>
    Dibuat oleh{" "}
    <a
      href="https://github.com/sekilas13"
      target="_blank"
      rel="noopener noreferrer"
    >
      Karya Ilmiah Remaja
    </a>
  </p>
);

function FooterContainer() {
  return (
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
  );
}

export default FooterContainer;
