import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Repositories from "./pages/Repositories";
import Home from "./pages/Home";
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/repositories" component={Repositories} />
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
