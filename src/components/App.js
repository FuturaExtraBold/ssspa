import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Hero from "./Hero";
import SmallCarousel from "./SmallCarousel";

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/entrepreneurs/erica" component={ Erica } />
          <Route path="/entrepreneurs/andy" component={ Andy } />
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
    <Hero />
  );
}

export default App;
