import React, { Component } from "react";

import Hero from "./Hero";
// import Carousel from "./Carousel";
// import NextCarousel from "./NextCarousel";

class Entrepreneur extends Component {

  render () {
    return (
      <React.Fragment>
        <Hero {...this.props} key={ this.props.id } />
        {/* <Carousel prevState={ this.props.prevState } updatePrevState={ this.props.updatePrevState } /> */}
        {/* <NextCarousel /> */}
      </React.Fragment>
    );
  }
}

export default Entrepreneur;
