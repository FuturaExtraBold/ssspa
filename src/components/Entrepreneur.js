import React, { Component } from "react";

import Hero from "./Hero";
import NewCarousel from "./NewCarousel";
import SmallCarousel from "./SmallCarousel";

class Entrepreneur extends Component {

  render () {
    return (
      <React.Fragment>
        <Hero {...this.props} key={ this.props.id } />
        <SmallCarousel prevState={ this.props.prevState } updatePrevState={ this.props.updatePrevState } />
      </React.Fragment>
    );
  }
}

export default Entrepreneur;
