import { useContext, Fragment, Suspense, lazy } from "react";
import { Context } from "../../utils/stateProvider";
import { Table, Row, Col } from "react-bootstrap";
import { observer } from "mobx-react";

const Tbody = lazy(() => import("./lazy/LazyTbody"));
const Fallback = () => (
  <Fragment>
    <tr>
      <td>1</td>
      <td colSpan={4} className="text-center">
        Sedang mengambil data....
      </td>
    </tr>
    <tr>
      <td>2</td>
      <td colSpan={4} className="text-center">
        Mohon tunggu....
      </td>
    </tr>
  </Fragment>
);

function Tabel() {
  const store = useContext(Context);

  return (
    <section id="provinsi">
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
            <Suspense fallback={Fallback()}>
              <Tbody />
            </Suspense>
          </tbody>
        </Table>
      </Fragment>
    </section>
  );
}

export default observer(Tabel);
