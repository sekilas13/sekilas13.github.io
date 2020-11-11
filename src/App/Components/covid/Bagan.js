import { useContext } from "react";
import { Context } from "../../utils/stateProvider";
import { observer } from "mobx-react";

function Bagan() {
  const store = useContext(Context);
  const prov = store.dataProvinsi;

  return <></>;
}

export default observer(Bagan);
