import { useContext, Fragment } from "react";
import { Context } from "../../utils/stateProvider";
import { Table, Row, Col } from "react-bootstrap";
import { observer } from "mobx-react";

function Tabel() {
  const store = useContext(Context);
  const prov = store.dataProvinsi;

  return (
    <section id="provinsi">
      {store.dataMain && prov && (
        <Fragment>
          <Row className="justify-content-center mt-4 mb-2">
            <Col md={6}>
              <h1 className="text-center">Data Provinsi</h1>
            </Col>
          </Row>
          <Table striped bordered hover responsive variant={store.theme}>
            <thead>
              <tr>
                <th>#</th>
                <th>Provinsi</th>
                <th>Positif</th>
                <th>Sembuh</th>
                <th>Meninggal</th>
              </tr>
            </thead>
            <tbody>
              {prov
                .filter((d) => d.provinsi !== "Indonesia")
                .map((d, i) => (
                  <tr key={d.kodeProvi}>
                    <td>{i + 1}</td>
                    <td>{d.provinsi}</td>
                    <td>{d.kasusPosi.toLocaleString()}</td>
                    <td>{d.kasusSemb.toLocaleString()}</td>
                    <td>{d.kasusMeni.toLocaleString()}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Fragment>
      )}
    </section>
  );
}

export default observer(Tabel);
