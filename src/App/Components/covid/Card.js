import { Fragment, useContext } from "react";
import { Context } from "../../utils/stateProvider";
import { observer } from "mobx-react";
import { Row, Col } from "react-bootstrap";
import CardWrapper from "./custom/CardWrapper";
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
    <Fragment>
      {main && (
        <Row className="mt-4 justify-content-center">
          <Col md={3} sm={5}>
            <CardWrapper
              label="Positif"
              data={main.jumlahKasus}
              icon={faVirus}
            />
          </Col>
          <Col md={3} sm={5}>
            <CardWrapper
              label="Dirawat"
              data={main.perawatan}
              icon={faHospital}
            />
          </Col>
          <Col md={3} sm={5}>
            <CardWrapper
              label="Sembuh"
              data={main.sembuh}
              icon={faHandHoldingMedical}
            />
          </Col>
          <Col md={3} sm={5}>
            <CardWrapper
              label="Meninggal"
              data={main.meninggal}
              icon={faSkullCrossbones}
            />
          </Col>
        </Row>
      )}
    </Fragment>
  );
}

export default observer(Card);
