import React from "react";

import { Switch, Route } from "react-router";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import Home1 from "./Home1";
function App() {
  return (
    <>
      <Home1 />
      <Switch>
        <Route path="/About" component={About} />
        <Route exact path="/" component={Home} />
        <Route path="/Contact" component={Contact} />
       
      </Switch>
    </>
  );
}

export default App;
