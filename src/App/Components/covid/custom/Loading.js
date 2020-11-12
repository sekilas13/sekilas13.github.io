import { Card, Row, Col, Spinner } from "react-bootstrap";

function Loading() {
  return (
    <Row className="justify-content-center mt-3">
      <Col lg={4} sm={5} md={4}>
        <Card id="loading">
          <Card.Body>
            <Row className="justify-content-center">
              <Spinner
                animation="border"
                role="status"
                variant="primary"
                style={{
                  fontSize: "2rem",
                  width: "5rem",
                  height: "5rem",
                }}
              />
            </Row>
            <Row className="justify-content-center mt-3">
              <p className="text-center">
                Sedang mengambil data, mohon tunggu sebentar
              </p>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Loading;
