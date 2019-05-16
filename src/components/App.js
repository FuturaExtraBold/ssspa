import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import { PeopleData } from "../data/people";

import Header from "./Header";
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
        <Route exact path="/" render={ () => <Redirect to="/entrepreneurs/andy" /> } />
        <div className="app">
          <Header />
          { people }
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
