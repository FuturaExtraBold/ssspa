import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import $ from "jquery";
import TweenMax from "gsap/TweenMax";
import Draggable from "gsap/Draggable";
import ModifiersPlugin from "gsap/ModifiersPlugin";
import ThrowPropsPlugin from "../assets/javascripts/gsap/ThrowPropsPlugin";

import Slide from "./Slide";
import { PeopleData } from "../data/people";

class SmallCarousel extends Component {

  componentDidMount() {
    var $wrapper = $(".small-carousel");
    var $slide = $(".slide");
    var $slider = $(".slider");
    var $proxy = $("<div/>");

    var numSlides = $slide.length;
    var slideWidth = $slide.outerWidth();
    var slideHeight = $slide.outerHeight();
    var wrapWidth = numSlides * slideWidth;

    // console.log("numSlides:", numSlides, "slideWidth:", slideWidth, "slideHeight:", slideHeight);

    TweenMax.set($wrapper, { height: slideHeight + 10 });
    TweenMax.set($slider, { left: -slideWidth });

    for (var i = 1; i < numSlides; i++) {
      TweenMax.set($($slide[i - 1]), { x: i * slideWidth });
    }

    var animation = TweenMax.to(".slide", 1, {
      x: "+=" + wrapWidth,
      ease: "linear",
      paused: true,
      repeat: -1,
      modifiers: {
        x: function(x, target) {
          x %= wrapWidth;
          return x;
        }
      },
    });

    Draggable.create($proxy, {
      type: "x",
      trigger: ".small-carousel",
      throwProps: true,
      onDrag: updateProgress,
      onThrowUpdate: updateProgress,
      snap: {
        x: snapX
      }
    });

    $(window).resize(function() {
      animation.render(animation.time(), false, true);
    });

    function snapX(x) {
      return Math.round(x / slideWidth) * slideWidth;
    }

    function updateProgress() {
      animation.progress(this.x / wrapWidth);
    }

    let activeSlideNumber = 0;
    for (var j = 1; j < numSlides; j++) {
      if ($($slide[j - 1]).hasClass("slide--active")) {
        activeSlideNumber = j - 1;
        console.log("active slide number:", activeSlideNumber);
      }
    }
  }

  render() {
    console.log("SmallCarousel render");
    let people = PeopleData.map((person) => {
      return (
        <Slide { ...person } key={ person.id } />
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

export default SmallCarousel;
