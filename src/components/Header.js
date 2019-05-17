import React, { Component } from "react";
import $ from "jquery";
import TweenMax from "gsap/TweenMax";

import { ReactComponent as KajabiLogo } from "../assets/images/ui/kajabi_logo.svg";

class Header extends Component {

  componentDidMount() {
    console.log("Header componentDidMount");
    let $window = $(window);
    let $header = $(".header");
    $window.on("scroll.header-scroll", () => {
      console.log("window did scroll");
      if ($window.scrollTop() > 200) {
        $header.addClass("header--fixed");
        if (!TweenMax.isTweening($header) && !$header.isOpen) {
          TweenMax.fromTo($header, 0.3, {
            y: -$header.outerHeight()
          }, {
            y: 0,
            onComplete: function() {
              $header.isOpen = true;
            }
          });
        }
      } else {
        $header.removeClass("header--fixed");
        $header.isOpen = false;
      }
    });
  }

  render () {
    return (
      <header className="header">
        <div className="header__container">
          <div className="header__left">
            <div className="header__logo">
              <KajabiLogo />
            </div>
          </div>
          <div className="header__middle">
            <a className="header__link hidden--mobile hidden--md" href="javascript:void(0);">Features</a>
            <a className="header__link hidden--mobile hidden--md" href="javascript:void(0);">Blog</a>
            <a className="header__link hidden--mobile hidden--md" href="javascript:void(0);">Support</a>
          </div>
          <div className="header__right">
            <a className="header__link" href="javascript:void(0);">Log In</a>
            <a className="btn header__btn" href="javascript:void(0);">Get Started</a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
