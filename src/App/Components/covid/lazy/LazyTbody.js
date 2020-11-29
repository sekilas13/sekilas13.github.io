import { useContext, useEffect, useCallback, Fragment } from "react";
import { Context } from "../../../utils/stateProvider";
import { observer } from "mobx-react";
import axios from "axios";

function LazyTbody() {
  const store = useContext(Context);
  const set = useCallback((data, index) => store.setData(data, index), [store]);
  const prov = store.dataProvinsi;

  useEffect(() => {
    axios
      .get("https://indonesia-covid-19.mathdro.id/api/provinsi/")
      .then((data) => data.data.data)
      .then((result) => set(result, "Provinsi"));
  }, [set]);

  return (
    <Fragment>
      {store.dataMain && !prov && (
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
      )}
      {store.dataMain && prov && (
        <Fragment>
          {prov
            .filter((d) => d.provinsi !== "Indonesia")
            .filter((d) => d.provinsi !== null)
            .map((d, i) => (
              <tr key={d.kodeProvi}>
                <td>{i + 1}</td>
                <td>{d.provinsi}</td>
                <td>{Number(d.kasusPosi).toLocaleString()}</td>
                <td>{Number(d.kasusSemb).toLocaleString()}</td>
                <td>{Number(d.kasusMeni).toLocaleString()}</td>
              </tr>
            ))}
        </Fragment>
      )}
    </Fragment>
  );
}

export default observer(LazyTbody);
