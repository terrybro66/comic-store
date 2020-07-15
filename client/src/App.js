import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

import Comics from "./components/Comics";
import Detail from "./components/Detail";
import Profile from "./components/Profile";
import Cart from "./components/Cart";
import SiteHeader from "./components/SiteHeader";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <Router>
        <SiteHeader />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => <Comics {...props} searchString={searchTerm} />}
          />
          <Route path="/profile" component={Profile} />
          <Route path="/comics/:id" exact component={Detail} />
          <Route path="/cart" exact component={Cart} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
