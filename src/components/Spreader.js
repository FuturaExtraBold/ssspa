import React, { Component } from "react";
import $ from "jquery";
import TimelineMax from "gsap/TimelineMax";
import TweenMax from "gsap/TweenMax";

class Spreader extends Component {

  componentDidMount() {

    console.log("Spreader componentDidMount");

    let $window = $(window);
    let $box = $(".spreader__box");
    let $container = $(".spreader__container");
    let animationTime = 20;
    let animationEase = "linear";
    let boxHalf = $($box[0]).outerWidth() / 2;

    let topY = $container.outerHeight() / 2 - boxHalf;
    let leftX = $container.outerWidth() / 2 - boxHalf;
    let secondY = ((($container.outerHeight() / 5) * 3) / 2) - boxHalf;
    let secondX = ((($container.outerWidth() / 5) * 3) / 2) - boxHalf;
    let fourthY = ((($container.outerHeight() / 5) * 7) / 2) - boxHalf;
    let fourthX = ((($container.outerWidth() / 5) * 7) / 2) - boxHalf;
    let rightX = $container.outerWidth() - $($box[0]).outerWidth();
    let bottomY = $container.outerHeight() - $($box[0]).outerWidth();

    TweenMax.set($box, { scale: 0.2, opacity: 0, x: leftX, y: topY, height: $($box[0]).outerWidth() });
    TweenMax.set($(".spreader__box--0"), { scale: 1, opacity: 1 });

    let tl = new TimelineMax({ paused: true });
    tl.to($(".spreader__box--1"), animationTime, { scale: 1, opacity: 1, x: leftX, y: 0, ease: animationEase }, "round1")
      .to($(".spreader__box--2"), animationTime, { scale: 1, opacity: 1, x: secondX, y: secondY, ease: animationEase }, "round2")
      .to($(".spreader__box--3"), animationTime, { scale: 1, opacity: 1, x: fourthX, y: secondY, ease: animationEase }, "round2")
      .to($(".spreader__box--4"), animationTime, { scale: 1, opacity: 1, x: 0, y: topY, ease: animationEase}, "round3")
      .to($(".spreader__box--5"), animationTime, { scale: 1, opacity: 1, x: rightX, y: topY, ease: animationEase }, "round3")
      .to($(".spreader__box--6"), animationTime, { scale: 1, opacity: 1, x: secondX, y: fourthY, ease: animationEase }, "round4")
      .to($(".spreader__box--7"), animationTime, { scale: 1, opacity: 1, x: fourthX, y: fourthY, ease: animationEase }, "round4")
      .to($(".spreader__box--8"), animationTime, { scale: 1, opacity: 1, x: leftX, y: bottomY, ease: animationEase }, "round5");

    let windowHeightHalf = $window.outerHeight() / 2;
    let containerTop = $container.offset().top - windowHeightHalf;
    let containerHeightHalf = $container.outerHeight() / 2;
    let percentageComplete = 0;
    let scrollTimer;

    function scrollStopped() {
      console.log("scroll stopped");
      // TweenMax.to(tl, 0.1, { progress: "+=" + 0.1 });
    }

    $window.on("scroll.spreader", function() {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(scrollStopped, 150);
      let scrollTop = $window.scrollTop();
      if (containerTop >= scrollTop) {
        percentageComplete = 0;
      } else if (containerTop < scrollTop && containerTop + containerHeightHalf > scrollTop) {
        percentageComplete = (scrollTop - containerTop) / containerHeightHalf;
      } else if (containerTop + containerHeightHalf <= scrollTop) {
        percentageComplete = 1;
      }
      console.log("percentageComplete:", percentageComplete);
      // tl.progress(percentageComplete);
      TweenMax.to(tl, 1, { progress: percentageComplete, ease: "easeOutQuad" }, 0.1);
    });
  }

  render () {
    return (
      <section className="spreader">
        <div className="spreader__container">
          <div className="spreader__box spreader__box--0">
            <h1 className="spreader__text">0</h1>
          </div>
          <div className="spreader__box spreader__box--1">
            <h1 className="spreader__text">1</h1>
          </div>
          <div className="spreader__box spreader__box--2">
            <h1 className="spreader__text">2</h1>
          </div>
          <div className="spreader__box spreader__box--3">
            <h1 className="spreader__text">3</h1>
          </div>
          <div className="spreader__box spreader__box--4">
            <h1 className="spreader__text">4</h1>
          </div>
          <div className="spreader__box spreader__box--5">
            <h1 className="spreader__text">5</h1>
          </div>
          <div className="spreader__box spreader__box--6">
            <h1 className="spreader__text">6</h1>
          </div>
          <div className="spreader__box spreader__box--7">
            <h1 className="spreader__text">7</h1>
          </div>
          <div className="spreader__box spreader__box--8">
            <h1 className="spreader__text">8</h1>
          </div>
        </div>
      </section>
    );
  }
}

export default Spreader;
