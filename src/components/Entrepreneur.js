import React, { Component } from "react";

import Hero from "./Hero";
import Carousel from "./Carousel";

class Entrepreneur extends Component {

  render () {
    return (
      <React.Fragment>
        <Hero {...this.props} key={ this.props.id } />
        <Carousel prevState={ this.props.prevState } updatePrevState={ this.props.updatePrevState } />
      </React.Fragment>
    );
  }
}

export default Entrepreneur;
