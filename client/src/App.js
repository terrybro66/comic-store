import React from "react";
import Comics from "./components/Comics";
import Head from "./components/Head";
import Detail from "./components/Detail";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppBody } from "./components/styledComponents";

function App() {
  return (
    <AppBody>
      <Router>
        <Head />
        <Switch>
          <Route path="/" exact component={Comics} />
          <Route path="/profile" component={Profile} />
          <Route path="/comics/:id" exact component={Detail} />
        </Switch>
      </Router>
    </AppBody>
  );
}

export default App;
