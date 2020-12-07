import { useContext, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./assets/Theme";
import { GlobalStyles } from "./assets/GlobalStyles";
import { Context } from "./utils/stateProvider";
import loadable from "@loadable/component";
import { observer } from "mobx-react";

const Routing = loadable(() => import("./Routing"));

function App() {
  const store = useContext(Context);

  const themeMode = store.theme === "light" ? lightTheme : darkTheme;

  useEffect(() => {
    const handleOffline = () => !navigator.onLine && document.location.reload();

    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("offline", handleOffline);
    };
  });

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Routing />
    </ThemeProvider>
  );
}

export default observer(App);
