import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import $ from "jquery";
import TweenMax from "gsap/TweenMax";
import Draggable from "gsap/Draggable";
import ModifiersPlugin from "gsap/ModifiersPlugin";
import ThrowPropsPlugin from "../assets/javascripts/gsap/ThrowPropsPlugin";

import Slide from "./Slide";
import { PeopleData } from "../data/people";

class NewCarousel extends Component {

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
    TweenMax.set($slider, { left: 0 });

    for (var i = 0; i < numSlides; i++) {
      TweenMax.set($($slide[i]), { x: i * slideWidth });
    }

    console.log("numSlides * slideWidth:", numSlides * slideWidth);

    var whatADrag = Draggable.create($slide, {
      type: "x",
      trigger: ".small-carousel",
      throwProps: true,
      onDrag: updateProgress,
      onDragEnd: updateProgress,
      onThrowUpdate: updateProgress,
      onThrowComplete: updateProgress,
      snap: {
        x: snapX
      }
    });

    function updateProgress() {
      for (var a = 0; a < whatADrag.length; a++) {
        var $thisSlide = $(whatADrag[a].target);
        var slideLeft = $thisSlide.position().left;
        if (slideLeft < -slideWidth) {
          TweenMax.set($thisSlide, {
            x: (numSlides - 1) * slideWidth,
          });
          Draggable.get(whatADrag[a].target).update();
        }
      }

      // var $thisSlide;
      // for (var j = 0; j < numSlides; j++) {
      //   $thisSlide = $($slide[j]);
      //   var slideLeft = $thisSlide.position().left;
      //   if (slideLeft < -slideWidth) {
      //     // console.log(j + ": slideLeft:", slideLeft);
      //     TweenMax.set($thisSlide, {
      //       x: (numSlides - 1) * slideWidth,
      //       onUpdate: whatADrag.update,
      //       onUpdateScope: whatADrag
      //     });
      //   }
      // }
    }

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
        <div className="slider">
          { people }
        </div>
      </section>
    );
  }
}

export default NewCarousel;
