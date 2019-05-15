import React from "react";

const Slide = (props) => {
  const imgUrl = require(`../images/${props.short_name}.jpg`);
  console.log(imgUrl);
  return (
    <div className="slide">
      <img className="slide__image" src={ imgUrl } />
      <p className="slide__niche">{ props.niche }</p>
      <p className="slide__name">{ props.name }</p>
    </div>
  );
}

export default Slide;
