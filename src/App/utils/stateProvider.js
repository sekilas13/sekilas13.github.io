import { createContext } from "react";
import { useLocalObservable } from "mobx-react";

const Context = createContext();

const Provider = ({ children }) => {
  const store = useLocalObservable(() => ({
    theme: "light",
    setTheme: (theme) => (store.theme = theme),
    dataMain: null,
    dataProvinsi: [],
    setData: (arr, index) => (store[`data${index}`] = arr),
  }));

  return <Context.Provider value={store}>{children}</Context.Provider>;
};

export { Context, Provider };
