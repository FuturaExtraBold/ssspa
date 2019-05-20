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

    console.log("SmallCarousel componentDidMount");

    var $wrapper = $(".small-carousel");
    var $slide = $(".slide");
    var $slider = $(".slider");
    var $proxy = $("<div/>");

    var numSlides = $slide.length;
    var slideWidth = $slide.outerWidth();
    var slideHeight = $slide.outerHeight();
    var wrapWidth = numSlides * slideWidth;

    let updatePrevStateProxy = this.props.updatePrevState;

    TweenMax.set($wrapper, { height: slideHeight + 10 });
    TweenMax.set($slider, { left: -slideWidth });

    for (var i = 0; i < numSlides; i++) {
      TweenMax.set($($slide[i]), {
        x: i * slideWidth + this.props.prevState.zeroSlideXPos + slideWidth,
        modifiers: {
          x: function(x, target) {
            x %= wrapWidth;
            return x;
          }
        }
      });
    }

    let $activeSlide = $(".slide--active");
    let activeSlideXPos = Math.round($activeSlide.offset().left);
    let activeSlideIndex = $activeSlide.attr("data-slide-index");

    console.log("zeroSlideXPos:", this.props.prevState.zeroSlideXPos, "activeSlideXPos:", activeSlideXPos, "activeSlideIndex:", activeSlideIndex);

    // var panToActiveSlide = TweenMax.to(".slide", .75, {
    //   x: "-=" + activeSlideXPos,
    //   ease: "easeInOutExpo",
    //   paused: 0,
    //   repeat: 0,
    //   modifiers: {
    //     x: function(x, target) {
    //       x %= wrapWidth;
    //       return x;
    //     }
    //   },
    //   onComplete: function() {
    //     console.log("initial slide complete");
    //     var zeroSlideXPos = Math.round($($slide[0]).offset().left);
    //     updatePrevStateProxy(zeroSlideXPos);
    //   }
    // });
    //
    // panToActiveSlide.render();

    // $slide.on("click", function(event) {
    //   if (panToActiveSlide.isActive() || animation.isActive()) {
    //     event.preventDefault();
    //     event.stopImmediatePropagation();
    //     return false;
    //   }
    // });

    var animation = TweenMax.to(".slide", 1, {
      x: "+=" + wrapWidth,
      ease: "linear",
      paused: true,
      repeat: -1,
      modifiers: {
        x: function(x, target) {
          // console.log($(target).attr("data-slide-index"), "x:", x, "x %= wrapWidth:", x %= wrapWidth);
          x %= wrapWidth;
          return x;
        }
      }
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
      var zeroSlideXPos = Math.round($($slide[0]).offset().left);
      updatePrevStateProxy(zeroSlideXPos);
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

export default SmallCarousel;
