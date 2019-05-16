import React from "react";
import { ReactComponent as KajabiLogo } from "../assets/images/ui/kajabi_logo.svg";

const Header = () => {
  return (
    <section className="header">
      <div className="header__container">
        <div className="header__left">
          <div className="header__logo">
            <KajabiLogo />
          </div>
        </div>
        <div className="header__middle">
          <a className="header__link" href="javascript:void(0);">Features</a>
          <a className="header__link" href="javascript:void(0);">Blog</a>
          <a className="header__link" href="javascript:void(0);">Support</a>
        </div>
        <div className="header__right">
          <a className="header__link" href="javascript:void(0);">Log In</a>
          <a className="btn header__btn" href="javascript:void(0);">Get Started</a>
        </div>
      </div>
    </section>
  );
}

export default Header;
