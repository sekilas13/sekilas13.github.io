import { useContext } from "react";
import { Context } from "../../utils/stateProvider";
import { Table, Row, Col } from "react-bootstrap";
import { observer } from "mobx-react";

function Tabel() {
  const store = useContext(Context);
  const prov = store.dataProvinsi;

  return (
    <section id="#provinsi">
      <Row className="justify-content-center mt-4 mb-2">
        <Col md={6}>
          <h1 className="text-center">Data Provinsi</h1>
        </Col>
      </Row>
      {store.dataMain && prov && (
        <Table striped bordered hover responsive variant={store.theme}>
          <thead>
            <tr>
              <th>#</th>
              <th>Provinsi</th>
              <th>Positif</th>
              <th>Dirawat</th>
              <th>Sembuh</th>
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
      )}
    </section>
  );
}

export default observer(Tabel);
