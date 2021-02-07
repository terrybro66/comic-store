import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Profile from "./components/Profile";
import Orders from "./components/Orders";
import Comics from "./components/Comics";
import Detail from "./components/Detail";
import LogIn from "./components/LogIn";
import SiteHeader from "./components/SiteHeader";
import formData from "./components/formData";
import formData2 from "./components/formData2";

import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <SiteHeader />
        <Switch>
          <Route path="/" exact component={Comics} />
          <Route path="/orders" exact component={Orders} />
          <Route path="/profile" exact component={Profile} />
          <Route
            path="/log-in"
            render={(props) => <LogIn formData={formData} />}
          />
          <Route
            path="/sign-up"
            render={(props) => <LogIn formData={formData2} />}
          />{" "}
          <Route path="/comics/:id" exact component={Detail} />
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
