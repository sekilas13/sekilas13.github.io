import { Fragment, useContext, useEffect, Suspense, lazy } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./assets/Theme";
import { GlobalStyles } from "./assets/GlobalStyles";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Loading from "./Custom/Loading";
import Main from "./Components/main";
import NotFound from "./Components/NotFound";
import SimpleReactLightbox from "simple-react-lightbox";
import { Context } from "./utils/stateProvider";
import { observer } from "mobx-react";
import "./index.css";
const Covid = lazy(() => import("./Components/covid"));
const Navigasi = lazy(() => import("./Components/Navigasi"));

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
        <SimpleReactLightbox>
          <Router basename={process.env.PUBLIC_URL}>
            <Suspense
              fallback={
                <nav
                  className="navbar navbar-expand-lg navbar-light bg-light sticky-top"
                  style={{ height: "56px" }}
                />
              }
            >
              <Navigasi />
            </Suspense>
            <Switch>
              <Route exact path="/" component={Main} />
              <Suspense fallback={<Loading />}>
                <Route path="/covid" component={Covid} />
              </Suspense>
              <Route component={NotFound} />
            </Switch>
          </Router>
        </SimpleReactLightbox>
      </Fragment>
    </ThemeProvider>
  );
}

export default observer(App);
