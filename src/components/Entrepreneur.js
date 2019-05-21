import React, { Component } from "react";

import Hero from "./Hero";

class Entrepreneur extends Component {

  render () {
    return (
      <Hero {...this.props} key={ this.props.id } />
    );
  }
}

export default Entrepreneur;
