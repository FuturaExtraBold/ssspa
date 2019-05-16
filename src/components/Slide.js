import React from "react";
import { Link } from "react-router-dom";

const Slide = (props) => {
  // https://github.com/facebook/create-react-app/issues/585#issuecomment-245027117
  const imgUrl = require(`../assets/images/${props.short_name}.jpg`);
  console.log(imgUrl);
  return (
    <Link to={ "/entrepreneurs/" + props.short_name } className="slide">
      <img className="slide__image" src={ imgUrl } />
      <div className="slide__text">
        <p className="slide__niche">{ props.niche }</p>
        <p className="slide__name">{ props.name }</p>
      </div>
    </Link>
  );
}

export default Slide;
