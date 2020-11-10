import { useContext } from "react";
import { Context } from "../../utils/stateProvider";
import { observer } from "mobx-react";
import { Card as CardBootstrap, Row, Container, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVirus,
  faHospital,
  faHandHoldingMedical,
  faSkullCrossbones,
} from "@fortawesome/free-solid-svg-icons";

function Card() {
  const store = useContext(Context);
  const main = store.dataMain;

  return (
    <section className="covid">
      <Container fluid>
        {main && (
          <Row className="mt-4 justify-content-center">
            <Col md={3} sm={5}>
              <CardBootstrap>
                <CardBootstrap.Body>
                  <Row className="justify-content-center h-100 d-flex">
                    <Col md={4} className="text-center align-self-center">
                      <FontAwesomeIcon icon={faVirus} size="6x" />
                    </Col>
                    <Col md={8} className="text-center align-self-center">
                      <h4>Positif</h4>
                      <h3>{main.jumlahKasus.toLocaleString()} Orang</h3>
                    </Col>
                  </Row>
                </CardBootstrap.Body>
              </CardBootstrap>
            </Col>
            <Col md={3} sm={5}>
              <CardBootstrap>
                <CardBootstrap.Body>
                  <Row className="justify-content-center h-100 d-flex">
                    <Col md={4} className="text-center align-self-center">
                      <FontAwesomeIcon icon={faHospital} size="6x" />
                    </Col>
                    <Col md={8} className="text-center align-self-center">
                      <h4>Dirawat</h4>
                      <h3>{main.perawatan.toLocaleString()} Orang</h3>
                    </Col>
                  </Row>
                </CardBootstrap.Body>
              </CardBootstrap>
            </Col>
            <Col md={3} sm={5}>
              <CardBootstrap>
                <CardBootstrap.Body>
                  <Row className="justify-content-center h-100 d-flex">
                    <Col md={4} className="text-center align-self-center">
                      <FontAwesomeIcon icon={faHandHoldingMedical} size="6x" />
                    </Col>
                    <Col md={8} className="text-center align-self-center">
                      <h4>Sembuh</h4>
                      <h3>{main.sembuh.toLocaleString()} Orang</h3>
                    </Col>
                  </Row>
                </CardBootstrap.Body>
              </CardBootstrap>
            </Col>
            <Col md={3} sm={5}>
              <CardBootstrap>
                <CardBootstrap.Body>
                  <Row className="justify-content-center h-100 d-flex">
                    <Col md={4} className="text-center align-self-center">
                      <FontAwesomeIcon icon={faSkullCrossbones} size="6x" />
                    </Col>
                    <Col md={8} className="text-center align-self-center">
                      <h4>Meninggal</h4>
                      <h3>{main.meninggal.toLocaleString()} Orang</h3>
                    </Col>
                  </Row>
                </CardBootstrap.Body>
              </CardBootstrap>
            </Col>
          </Row>
        )}
      </Container>
    </section>
  );
}

export default observer(Card);
