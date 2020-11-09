import { createContext } from "react";
import { useLocalObservable } from "mobx-react";

const Context = createContext();

const Provider = ({ children }) => {
  const store = useLocalObservable(() => ({
    theme: "light",
    setTheme: (theme) => (store.theme = theme),
    dataCovid: { main: undefined, provinsi: undefined },
    setDataCovid: (arr, index) => (store.dataCovid[index] = arr),
  }));

  return <Context.Provider value={store}>{children}</Context.Provider>;
};

export { Context, Provider };
