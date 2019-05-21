import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import $ from "jquery";
import TweenMax from "gsap/TweenMax";
import Draggable from "gsap/Draggable";
import ModifiersPlugin from "gsap/ModifiersPlugin";
import ThrowPropsPlugin from "../assets/javascripts/gsap/ThrowPropsPlugin";

import Slide from "./Slide";
import { PeopleData } from "../data/people";

class Carousel extends Component {

  componentDidMount() {

    console.log("NewCarousel componentDidMount");

    let $window = $(window);
    let $wrapper = $(".small-carousel");
    let $slide = $(".slide");
    let $slider = $(".slider");
    let $proxy = $("<div/>");

    let numSlides = $slide.length;
    let slideWidth = $slide.outerWidth();
    let slideHeight = $slide.outerHeight();
    let wrapWidth = numSlides * slideWidth;

    let isThrowing = false;

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
      clickableTest: (event) => {
        if (isThrowing) {
          let thisSlide = $(event).closest(".slide");
          this.props.history.push(thisSlide.attr("href"));
        }
      },
      minimumMovement: 50,
      onDrag: updateProgress,
      onThrowComplete: () => {
        isThrowing = false;
      },
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
      isThrowing = true;
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

export default withRouter(Carousel);
