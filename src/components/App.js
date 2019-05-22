import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import { PeopleData } from "../data/people";

import Header from "./Header";
import Hero from "./Hero";
import Carousel from "./Carousel";
import Spreader from "./Spreader";
import CTA from "./CTA";
import Footer from "./Footer";

class App extends Component {

  render () {
    let people = PeopleData.map((person) => {
      return (
        <Route path={ "/entrepreneurs/" + person.short_name } key={ person.id } render={ () =>
          <Hero { ...person } key={ person.id } />
        } />
      );
    });
    return (
      <BrowserRouter>
        <Route exact path="/" render={ () => <Redirect to="/entrepreneurs/andy" /> } />
        <div className="app">
          <Header />
          { people }
          <Carousel />
          <Spreader />
          <CTA />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
