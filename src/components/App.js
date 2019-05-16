import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { PeopleData } from "../data/people";

import Entrepreneur from "./Entrepreneur";

class App extends Component {
  render () {
    let people = PeopleData.map((person) => {
      return (
        <Route path={ "/entrepreneurs/" + person.short_name } key={ person.id } render={ () => <Entrepreneur { ...person } key={ person.id } /> } />
      );
    });
    return (
      <BrowserRouter>
        <div className="App">
          { people }
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
