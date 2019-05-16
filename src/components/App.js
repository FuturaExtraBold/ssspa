import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Hero from "./Hero";
import SmallCarousel from "./SmallCarousel";

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/entrepreneurs/erica" render={ () => <Hero /> } />
          <Route path="/entrepreneurs/andy" render={ () => <Hero /> } />
          <SmallCarousel />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
