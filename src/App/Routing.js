import { HashRouter as Router, Switch, Route } from "react-router-dom";
import loadable from "@loadable/component";
import { Suspense } from "react";

const NotFound = loadable(() => import("./Components/NotFound"));
const Covid = loadable(() => import("./Components/covid"));
const Main = loadable(() => import("./Components/main"));

const Navigasi = loadable(() => import("./Components/Navigasi"));

function Routing() {
  return (
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
        <Route path="/covid" component={Covid} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default Routing;
