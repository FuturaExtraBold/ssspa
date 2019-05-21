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
        zeroSlideXPos: 0,
        destinationXPos: 0
      }
    };
  }

  handlePrevStateChange = (zeroSlideXPos, destinationXPos) => {
    this.setState({
      prevState: {
        zeroSlideXPos: zeroSlideXPos || this.state.prevState.zeroSlideXPos,
        destinationXPos: destinationXPos || this.state.prevState.destinationXPos
      }
    });
    console.log("zeroSlideXPos:", this.state.prevState.zeroSlideXPos, "destinationXPos:", this.state.prevState.destinationXPos);
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
