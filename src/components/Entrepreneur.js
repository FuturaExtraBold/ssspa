import React, { Component } from "react";

import Hero from "./Hero";
import SmallCarousel from "./SmallCarousel";

class Entrepreneur extends Component {

  state = {
    currentSlideIndex: 0
  }

  handleSlideIndexUpdate = (index) => {
    console.log("index:", index);
    this.setState({
      currentSlideIndex: index
    });
  }

  render () {
    console.log("Entrepreneur render");
    return (
      <React.Fragment>
        <Hero {...this.props} key={ this.props.id } />
        <SmallCarousel slideIndex={ this.state.currentSlideIndex } changeSlideIndex={ this.handleSlideIndexUpdate } />
      </React.Fragment>
    );
  }
}

export default Entrepreneur;
