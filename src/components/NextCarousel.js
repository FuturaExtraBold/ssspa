import React, { Component } from "react";
import $ from "jquery";

import Slide from "./Slide";
import { PeopleData } from "../data/people";

class NextCarousel extends Component {

  componentDidMount() {
    console.log("NextCarousel componentDidMount");
    (function($){
      $(".slider").owlCarousel({

      });
    })();
  }

  render() {
    let people = PeopleData.map((person, index) => {
      return (
        <Slide { ...person } key={ person.id } index={ index } />
      );
    });
    return (
      <section className="small-carousel">
        <div className="slider">
          { people }
        </div>
      </section>
    );
  }
}

export default NextCarousel;
