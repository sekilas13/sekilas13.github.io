import { useContext, useEffect, useCallback, Fragment } from "react";
import { Context } from "../../../utils/stateProvider";
import { observer } from "mobx-react";
import konversiBulan from "../../../utils/konversiBulan";
import CardWrapper from "../custom/CardWrapper";
import { Row, Col } from "react-bootstrap";
import {
  faVirus,
  faHospital,
  faHandHoldingMedical,
  faSkullCrossbones,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function LazyCard() {
  const store = useContext(Context);
  const set = useCallback((data, index) => store.setData(data, index), [store]);

  useEffect(() => {
    axios
      .get("https://indonesia-covid-19.mathdro.id/api/")
      .then((data) => data.data)
      .then(({ perawatan, sembuh, meninggal, jumlahKasus, lastUpdate }) =>
        set({ perawatan, sembuh, meninggal, jumlahKasus, lastUpdate }, "Main")
      );
  }, [set]);

  const main = store.dataMain;

  const time = main && new Date(main.lastUpdate);
  const updateTime = (t) => (t < 10 ? "0" + t : t);

  return (
    <Fragment>
      <Row className="mt-4 justify-content-center">
        <Col lg={3} sm={5}>
          <CardWrapper
            label="Positif"
            data={main ? main.jumlahKasus.toLocaleString() : "===,==="}
            icon={faVirus}
          />
        </Col>
        <Col lg={3} sm={5}>
          <CardWrapper
            label="Dirawat"
            data={main ? main.perawatan.toLocaleString() : "===,==="}
            icon={faHospital}
          />
        </Col>
        <Col lg={3} sm={5}>
          <CardWrapper
            label="Sembuh"
            data={main ? main.sembuh.toLocaleString() : "===,==="}
            icon={faHandHoldingMedical}
          />
        </Col>
        <Col lg={3} sm={5}>
          <CardWrapper
            label="Meninggal"
            data={main ? main.meninggal.toLocaleString() : "==,==="}
            icon={faSkullCrossbones}
          />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <p>
            Terakhir data diperbarui tanggal{" "}
            <>
              {time && (
                <>
                  {time.getDate()} {konversiBulan(time.getMonth())}{" "}
                  {time.getFullYear()} Pukul {updateTime(time.getHours())}:
                  {updateTime(time.getMinutes())}:
                  {updateTime(time.getSeconds())}.
                </>
              )}
            </>
          </p>
        </Col>
      </Row>
    </Fragment>
  );
}

export default observer(LazyCard);
