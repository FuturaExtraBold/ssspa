import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

// Components
import Hero from "./Hero";
import SmallCarousel from "./SmallCarousel";

// Data
import { PeopleData } from "../data/people";

class Entrepreneur extends Component {
  render () {
    let people = PeopleData.map((person) => {
      return (
        <Route path={ "/entrepreneurs/" + person.short_name } key={ person.id } render={ () => <Hero { ...person } key={ person.id } /> } />
      );
    });
    return (
      <BrowserRouter>
        { people }
        <SmallCarousel />
      </BrowserRouter>
    );
  }
}

export default Entrepreneur;
