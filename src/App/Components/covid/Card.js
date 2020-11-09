import { Card as CardBootstrap, Row, Container, Col } from "react-bootstrap";

function Card() {
  return (
    <Container fluid>
      <Row className="mt-4 justify-content-center">
        <Col md={3} sm={5}>
          <CardBootstrap>
            <CardBootstrap.Body></CardBootstrap.Body>
          </CardBootstrap>
        </Col>
        <Col md={3} sm={5}>
          <CardBootstrap>
            <CardBootstrap.Body></CardBootstrap.Body>
          </CardBootstrap>
        </Col>
        <Col md={3} sm={5}>
          <CardBootstrap>
            <CardBootstrap.Body></CardBootstrap.Body>
          </CardBootstrap>
        </Col>
        <Col md={3} sm={5}>
          <CardBootstrap>
            <CardBootstrap.Body></CardBootstrap.Body>
          </CardBootstrap>
        </Col>
      </Row>
    </Container>
  );
}

export default Card;
