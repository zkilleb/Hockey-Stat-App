import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import TeamSelect from "./components/TeamSelect";
import TeamDetail from "./components/TeamDetail";
import Notfound from "./notfound";
import Banner from "./components/AppBar/banner";
import * as serviceWorker from "./serviceWorker";

const routing = (
  <Router>
    <Banner />
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/teams" component={TeamSelect} />
      <Route path="/teamdetail" component={TeamDetail} />
      <Route component={Notfound} />
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
