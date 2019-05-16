import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Hero from "./Hero";
import SmallCarousel from "./SmallCarousel";

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/erica" component={ Erica } />
          <Route exact path="/andy" render={() =>
            <h1>Andy was here</h1>
          } />
          <SmallCarousel />
        </div>
      </BrowserRouter>
    );
  }
}

function Erica() {
  return (
    <Hero />
  );
}

function Andy() {
  return (
    <h1>Andy</h1>
  );
}

export default App;
