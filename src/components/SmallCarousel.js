import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import $ from "jquery";
import TweenMax from "gsap/TweenMax";
import Draggable from "gsap/Draggable";
import ThrowPropsPlugin from "../assets/javascripts/gsap/ThrowPropsPlugin";

import Slide from "./Slide";
import { PeopleData } from "../data/people";

class SmallCarousel extends Component {

  componentDidMount() {
    let $slide = $(".slide");
    console.log("slide length:", $slide.length);
    $(".slider").css({
      "width": $slide.length * $slide.eq(0).outerWidth(),
      "opacity": 1
    });
    Draggable.create(".slider", {
      bounds: $(".slider-container"),
      dragResistance: 0.4,
      throwProps: true,
      type: "x",
    });
  }

  render() {
    let people = PeopleData.map((person) => {
      return (
        <Slide { ...person } key={ person.id } />
      );
    });
    return (
      <section className="small-carousel">
        <div className="slider-container">
          <div className="slider">
            { people }
          </div>
        </div>
      </section>
    );
  }
}

export default SmallCarousel;
