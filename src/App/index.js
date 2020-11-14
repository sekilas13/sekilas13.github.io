import { Fragment, useContext, Suspense, lazy } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./assets/Theme";
import { GlobalStyles } from "./assets/GlobalStyles";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Loading from "./Custom/Loading";
import Navigasi from "./Components/Navigasi";
import NotFound from "./Components/NotFound";
import SimpleReactLightbox from "simple-react-lightbox";
import { Context } from "./utils/stateProvider";
import { observer } from "mobx-react";
const Main = lazy(() => import("./Components/main"));
const Covid = lazy(() => import("./Components/covid"));

function App() {
  const store = useContext(Context);

  const themeMode = store.theme === "light" ? lightTheme : darkTheme;

  return (
    <Suspense fallback={<Loading />}>
      <ThemeProvider theme={themeMode}>
        <Fragment>
          <GlobalStyles />
          <SimpleReactLightbox>
            <Router basename={process.env.PUBLIC_URL}>
              <Navigasi />
              <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/covid" component={Covid} />
                <Route component={NotFound} />
              </Switch>
            </Router>
          </SimpleReactLightbox>
        </Fragment>
      </ThemeProvider>
    </Suspense>
  );
}

export default observer(App);
