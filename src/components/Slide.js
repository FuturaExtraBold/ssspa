import React from "react";
import { NavLink } from "react-router-dom";

const Slide = (props) => {
  // https://github.com/facebook/create-react-app/issues/585#issuecomment-245027117
  const imgUrl = require(`../assets/images/entrepreneurs/${ props.short_name }.jpg`);
  console.log(imgUrl);
  return (
    <NavLink to={ "/entrepreneurs/" + props.short_name } className="slide" activeClassName="slide--active">
      <div className="slide__image-container">
        <img className="slide__image" src={ imgUrl } />
      </div>
      <div className="slide__text">
        <p className="slide__niche">{ props.niche }</p>
        <p className="slide__name">{ props.name }</p>
      </div>
    </NavLink>
  );
}

export default Slide;
