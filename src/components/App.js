import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import { PeopleData } from "../data/people";

import Header from "./Header";
import Entrepreneur from "./Entrepreneur";
import Footer from "./Footer";

class App extends Component {

  constructor() {
    super();
    this.state = {
      prevState: {
        previousPersonIndex: 0,
        zeroSlideXPos: 0,
      }
    };
  }

  handlePrevStateChange = (index, zeroSlideXPos) => {
    this.setState({
      prevState: {
        previousPersonIndex: index,
        zeroSlideXPos: zeroSlideXPos
      }
    });
    console.log("handlePrevStateChange", this.state.prevState);
  }

  render () {
    let people = PeopleData.map((person) => {
      return (
        <Route path={ "/entrepreneurs/" + person.short_name } key={ person.id } render={ () =>
          <Entrepreneur { ...person } key={ person.id } prevState={ this.state.prevState } updatePrevState={ this.handlePrevStateChange } />
        } />
      );
    });
    return (
      <BrowserRouter>
        <Route exact path="/" render={ () => <Redirect to="/entrepreneurs/andy" /> } />
        <div className="app">
          <Header />
          { people }
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
