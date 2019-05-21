import React, { Component } from "react";
import $ from "jquery";
import TweenMax from "gsap/TweenMax";
import Draggable from "gsap/Draggable";
import ThrowPropsPlugin from "../assets/javascripts/gsap/ThrowPropsPlugin";

import Slide from "./Slide";
import { PeopleData } from "../data/people";

class Carousel extends Component {

  componentDidMount() {

    console.log("NewCarousel componentDidMount");

    var $wrapper = $(".small-carousel");
    var $slide = $(".slide");
    var $slider = $(".slider");
    var $sliderContianer = $(".slider-container");

    var numSlides = $slide.length;
    var slideWidth = $slide.outerWidth();
    var slideHeight = $slide.outerHeight();

    let updatePrevStateProxy = this.props.updatePrevState;

    $sliderContianer.css({
      width: 10 + numSlides * slideWidth
    });

    if (this.props.prevState.zeroSlideXPos !== this.props.prevState.destinationXPos) {
      console.log("numbers dont' match!");
      TweenMax.fromTo($slider, 0.25,
        { x: this.props.prevState.zeroSlideXPos },
        { x: this.props.prevState.destinationXPos },
      );
    } else {
      console.log("numbers match!");
      TweenMax.set($slider, { x: this.props.prevState.zeroSlideXPos });
    }

    var whatADrag = Draggable.create($slider, {
      bounds: ".small-carousel",
      dragResistance: 0.2,
      onDragEnd: function() {
        updatePrevStateProxy(Math.round($($slide[0]).offset().left), Math.round(this.endX));
      },
      onThrowUpdate: function() {
        updatePrevStateProxy(Math.round($($slide[0]).offset().left), null);
      },
      snap: {
        x: snapX
      },
      throwProps: true,
      type: "x",
    });

    function snapX(x) {
      return Math.round(x / slideWidth) * slideWidth;
    }
  }

  render() {
    let people = PeopleData.map((person, index) => {
      return (
        <Slide { ...person } key={ person.id } index={ index } />
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

export default Carousel;
