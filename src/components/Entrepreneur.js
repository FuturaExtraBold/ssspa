import React from "react";

import Hero from "./Hero";
import SmallCarousel from "./SmallCarousel";

const Entrepreneur = (props) => {
  return (
    <React.Fragment>
      <Hero {...props} key={ props.id } />
      <SmallCarousel />
    </React.Fragment>
  );
}

export default Entrepreneur;
