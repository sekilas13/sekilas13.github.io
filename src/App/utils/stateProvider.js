import { createContext } from "react";
import { useLocalObservable } from "mobx-react";

const Context = createContext();

const Provider = ({ children }) => {
  const store = useLocalObservable(() => ({
    theme: "light",
    setTheme: (theme) => (store.theme = theme),
    dataCovid: null,
    setDataCovid: (arr) => (store.dataCovid = arr),
  }));

  return <Context.Provider value={store}>{children}</Context.Provider>;
};

export { Context, Provider };
