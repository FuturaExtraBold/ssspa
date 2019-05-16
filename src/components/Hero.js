import React, { Component } from "react";
import $ from "jquery";
import TweenMax from "gsap/TweenMax";
import SplitText from "../assets/javascripts/gsap/SplitText";

class Hero extends Component {

  componentDidMount() {
    console.log("componentDidMount!");
    TweenMax.to($(".hero__image-scaler"), 0.75, { scale: 1.05, ease: "easeOutQuad", transformOrigin: "center" });
  }

  render() {
    const imgUrl = require(`../assets/images/${this.props.short_name}.jpg`);
    console.log(imgUrl);
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
