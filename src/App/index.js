import { Fragment, useContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./assets/Theme";
import { GlobalStyles } from "./assets/GlobalStyles";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Components/main";
import Covid from "./Components/covid";
import Navigasi from "./Components/Navigasi";
import NotFound from "./Components/NotFound";
import SimpleReactLightbox from "simple-react-lightbox";
import { Context } from "./utils/stateProvider";
import { observer } from "mobx-react";

function App() {
  const store = useContext(Context);
  const [mountedComponent, SET_mountedComponent] = useState(false);

  useEffect(() => {
    SET_mountedComponent(true);
    // eslint-disable-next-line
  }, []);

  const themeMode = store.theme === "light" ? lightTheme : darkTheme;

  if (!mountedComponent) {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center mt-5">
          <div
            className="spinner-border text-primary mt-5"
            style={{
              fontSize: "2rem",
              width: "5rem",
              height: "5rem",
            }}
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    );
  } else {
    return (
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
    );
  }
}

export default observer(App);
