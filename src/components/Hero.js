import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="overlay hero__bg"></div>
      <div className="display-table">
        <div className="display-table__cell display-table__cell--middle">
          <div className="container hero__container">
            <div className="hero__text-container">
              <p className="hero__niche">Backend Developer</p>
              <h1 className=" display--1 hero__title">Backend Developer Andy Huynh uses Kajabi to beautifully showcase his projects.</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
