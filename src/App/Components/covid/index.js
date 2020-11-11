import { useEffect, useContext, useCallback } from "react";
import { Context } from "../../utils/stateProvider";
import { Container } from "react-bootstrap";
import { observer } from "mobx-react";
import Card from "./Card";
import axios from "axios";

function Covid() {
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

  return (
    <section className="covid">
      <Container fluid>
        <Card />
      </Container>
    </section>
  );
}

export default observer(Covid);
