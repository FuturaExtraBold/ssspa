import React from "react";

const Hero = (props) => {
  const imgUrl = require(`../assets/images/${props.short_name}.jpg`);
  console.log(imgUrl);
  return (
    <section className="hero">
      <div className="image-cover">
        <img src={ imgUrl } />
      </div>
      <div className="display-table">
        <div className="display-table__cell display-table__cell--middle">
          <div className="container hero__container">
            <div className="hero__text-container">
              <p className="hero__niche">{ props.niche }</p>
              <h1 className=" display--1 hero__title">{ props.blurb }</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
