import { Suspense, lazy } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Components/main";
import Covid from "./Components/covid";
import NotFound from "./Components/NotFound";
const Navigasi = lazy(() => import("./Components/Navigasi"));

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
