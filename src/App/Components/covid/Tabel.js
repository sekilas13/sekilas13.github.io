import { useContext, Fragment } from "react";
import { Context } from "../../utils/stateProvider";
import { Table } from "react-bootstrap";
import { observer } from "mobx-react";

function Tabel() {
  const store = useContext(Context);
  const prov = store.dataProvinsi;

  return (
    <Fragment>
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
            {prov.map((d, i) => {
              if (d.provinsi !== "Indonesia") {
                return (
                  <tr key={d.kodeProvi}>
                    <td>{i + 1}</td>
                    <td>{d.provinsi}</td>
                    <td>{d.kasusPosi.toLocaleString()}</td>
                    <td>{d.kasusSemb.toLocaleString()}</td>
                    <td>{d.kasusMeni.toLocaleString()}</td>
                  </tr>
                );
              }
            })}
          </tbody>
        </Table>
      )}
    </Fragment>
  );
}

export default observer(Tabel);
