import React from "react";
import Comics from "./components/Comics";
import Head from "./components/Head";
import Detail from "./components/Detail";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppBody } from "./components/styledComponents";

import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <AuthContextProvider>
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
    </AuthContextProvider>
  );
}

export default App;
