import { Container, Card, Row, Col } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";

function NotFound() {
  const location = useLocation();
  return (
    <Container fluid>
      <Row className="justify-content-center mt-3">
        <Col lg={4} sm={5} md={4}>
          <Card id="NotFound">
            <Card.Body>
              <Row className="justify-content-center">
                <h1 className="display-3" style={{ color: "#d8232a" }}>
                  404
                </h1>
              </Row>
              <Row className="justify-content-center">
                <h5 className="text-center" style={{ fontFamily: "monospace" }}>
                  NOT FOUND
                </h5>
              </Row>
              <Row className="justify-content-center mt-3">
                <p className="text-center">
                  Halaman <code>{location.pathname}</code> tidak ditemukan.{" "}
                  <Link to="/">Kembali</Link> ke halaman utama.
                </p>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default NotFound;
