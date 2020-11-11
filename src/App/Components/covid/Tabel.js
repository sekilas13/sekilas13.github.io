import { useContext, Fragment } from "react";
import { Context } from "../../utils/stateProvider";
import { Table } from "react-bootstrap";
import { observer } from "mobx-react";

function Tabel() {
  const store = useContext(Context);
  const prov = store.dataProvinsi;

  return (
    <Fragment>
      {prov && (
        <Table striped bordered variant={store.theme}>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
        </Table>
      )}
    </Fragment>
  );
}

export default observer(Tabel);
