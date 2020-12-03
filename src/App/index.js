import { Fragment, useContext, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./assets/Theme";
import { GlobalStyles } from "./assets/GlobalStyles";
import { Context } from "./utils/stateProvider";
import { observer } from "mobx-react";
import Routing from "./Routing";
import "./index.css";

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
      <Fragment>
        <GlobalStyles />
        <Routing />
      </Fragment>
    </ThemeProvider>
  );
}

export default observer(App);
