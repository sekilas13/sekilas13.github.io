import { Suspense, lazy } from "react";
import { observer } from "mobx-react";
import { Row, Col } from "react-bootstrap";
import CardWrapper from "./custom/CardWrapper";
import {
  faVirus,
  faHospital,
  faHandHoldingMedical,
  faSkullCrossbones,
} from "@fortawesome/free-solid-svg-icons";

const Lazy = lazy(() => import("./lazy/LazyCard"));

const Fallback = () => (
  <Row className="mt-4 justify-content-center">
    <Col lg={3} sm={5}>
      <CardWrapper label="Positif" data="===,===" icon={faVirus} />
    </Col>
    <Col lg={3} sm={5}>
      <CardWrapper label="Dirawat" data="==,===" icon={faHospital} />
    </Col>
    <Col lg={3} sm={5}>
      <CardWrapper label="Sembuh" data="===,===" icon={faHandHoldingMedical} />
    </Col>
    <Col lg={3} sm={5}>
      <CardWrapper label="Meninggal" data="==,===" icon={faSkullCrossbones} />
    </Col>
  </Row>
);

function Card() {
  return (
    <section id="all">
      <Suspense fallback={Fallback()}>
        <Lazy />
      </Suspense>
    </section>
  );
}

export default observer(Card);
