import { Fragment, useEffect, useContext, useCallback } from "react";
import { Context } from "../../utils/stateProvider";
import { observer } from "mobx-react";
import Card from "./Card";
import axios from "axios";

function Covid() {
  const store = useContext(Context);

  const set = useCallback((data, index) => store.setDataCovid(data, index), [
    store,
  ]);

  useEffect(() => {
    axios
      .get("https://indonesia-covid-19.mathdro.id/api/")
      .then((data) => data.data)
      .then((r) => set(r, "main"));
  }, [set]);

  return (
    <Fragment>
      <Card />
    </Fragment>
  );
}

export default observer(Covid);
