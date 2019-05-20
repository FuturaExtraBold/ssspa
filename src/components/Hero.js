import React, { Component } from "react";
import $ from "jquery";
import TweenMax from "gsap/TweenMax";
import SplitText from "../assets/javascripts/gsap/SplitText";

class Hero extends Component {

  componentDidMount() {
    let mySplitText = new SplitText(".hero__title");
    TweenMax.to($(".hero__image-scaler"), 0.8, { scale: 1.05, ease: "easeOutQuad", transformOrigin: "center" });
    TweenMax.from($(".hero__niche"), 0.8, { opacity: 0, x: -20 });
    TweenMax.staggerFrom(mySplitText.chars, 0.8, { opacity: 0, x: -30 }, 0.01);
  }

  render() {
    console.log("Hero render");
    const imgUrl = require(`../assets/images/entrepreneurs/${this.props.short_name}.jpg`);
    return (
      <section className="hero">
        <div className="overlay hero__image-container">
          <div className="overlay hero__image-scaler">
            <div className="image-cover">
              <img className="hero__image" src={ imgUrl } />
            </div>
          </div>
        </div>
        <div className="display-table">
          <div className="display-table__cell display-table__cell--middle">
            <div className="container hero__container">
              <div className="hero__text-container">
                <p className="hero__niche">{ this.props.niche }</p>
                <h1 className=" display--1 hero__title">{ this.props.blurb }</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
