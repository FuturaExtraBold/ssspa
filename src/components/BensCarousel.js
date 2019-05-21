import React, { Component } from "react";
import $ from "jquery";
import TweenMax from "gsap/TweenMax";
import Draggable from "gsap/Draggable";
import ModifiersPlugin from "gsap/ModifiersPlugin";
import ThrowPropsPlugin from "../assets/javascripts/gsap/ThrowPropsPlugin";

import Slide from "./Slide";
import { PeopleData } from "../data/people";

class BensCarousel extends Component {

  componentDidMount() {

    console.log("NewCarousel componentDidMount");

    var $window = $(window);
    var $wrapper = $(".small-carousel");
    var $slide = $(".slide");
    var $slider = $(".slider");
    var $proxy = $("<div/>");

    var numSlides = $slide.length;
    var slideWidth = $slide.outerWidth();
    var slideHeight = $slide.outerHeight();
    var wrapWidth = numSlides * slideWidth;

    TweenMax.set($wrapper, { height: slideHeight + 10 });
    TweenMax.set($slider, { left: -slideWidth });

    for (var i = 0; i < numSlides; i++) {
      TweenMax.set($($slide[i]), { x: i * slideWidth + slideWidth });
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
      }
    });

    Draggable.create($proxy, {
      clickableTest: function(event) {
        var thisSlide = $(event).closest(".slide");
        console.log("clickableTest:", thisSlide.attr("data-slide-index"), thisSlide.attr("href"));
      },
      minimumMovement: 50,
      onClick: function() {
        console.log("thingy clicked");
      },
      onDrag: updateProgress,
      onThrowUpdate: updateProgress,
      snap: {
        x: snapX
      },
      throwProps: true,
      trigger: ".small-carousel",
      type: "x",
    });

    $window.resize(function() {
      animation.render(animation.time(), false, true);
    });

    function snapX(x) {
      return Math.round(x / slideWidth) * slideWidth;
    }

    function updateProgress() {
      animation.progress(this.x / wrapWidth);
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
        <div className="slider">
          { people }
        </div>
      </section>
    );
  }
}

export default BensCarousel;
