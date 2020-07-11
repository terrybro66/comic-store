import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";

import Comics from "./components/Comics";
import Detail from "./components/Detail";
import Profile from "./components/Profile";
import Cart from "./components/Cart";
import Nav from "./components/Nav";
import Logo from "./components/Logo";
import Search from "./components/Search";
function App() {
  return (
    <Router>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#666",
        }}
      >
        <Logo />
        <Search />
        <Nav />
      </div>
      <Switch>
        <Route path="/" exact component={Comics} />
        <Route path="/comics" exact component={Comics} />
        <Route path="/comics/:id" component={Detail} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/cart" exact component={Cart} />
      </Switch>
    </Router>
  );
}

export default App;
