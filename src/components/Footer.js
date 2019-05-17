import React from "react";
import { ReactComponent as KajabiLogoK } from "../assets/images/ui/kajabi_logo_k.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <div className="footer__logo">
            <KajabiLogoK />
          </div>
        </div>
        <div className="footer__nav">
          <div className="footer__section">
            <p className="footer__title">Solutions</p>
            <a className="footer__link" href="javascript:void(0);">Your Online Presence</a>
            <a className="footer__link" href="javascript:void(0);">Email Marketing</a>
            <a className="footer__link" href="javascript:void(0);">Maximize Revenue</a>
            <a className="footer__link" href="javascript:void(0);">Grow Your List</a>
            <a className="footer__link" href="javascript:void(0);">Marketing Automation</a>
            <a className="footer__link" href="javascript:void(0);">Quizzes and Surveys</a>
          </div>
          <div className="footer__section">
            <p className="footer__title">Customers</p>
            <a className="footer__link" href="javascript:void(0);">Entrepreneurs</a>
            <a className="footer__link" href="javascript:void(0);">Influencers</a>
            <a className="footer__link" href="javascript:void(0);">Kajabi Heroes</a>
            <a className="footer__link" href="javascript:void(0);">Thought Leaders</a>
            <a className="footer__link" href="javascript:void(0);">Experts</a>
          </div>
          <div className="footer__section">
            <p className="footer__title">Company</p>
            <a className="footer__link" href="javascript:void(0);">Blog</a>
            <a className="footer__link" href="javascript:void(0);">About Us</a>
            <a className="footer__link" href="javascript:void(0);">Careers</a>
            <a className="footer__link" href="javascript:void(0);">Affiliates</a>
          </div>
          <div className="footer__section">
            <p className="footer__title">Contact</p>
            <a className="footer__link" href="javascript:void(0);">Contact Sales</a>
            <a className="footer__link" href="javascript:void(0);">Contact Support</a>
            <a className="footer__link" href="javascript:void(0);">Instagram</a>
            <a className="footer__link" href="javascript:void(0);">Facebook</a>
            <a className="footer__link" href="javascript:void(0);">Twitter</a>
            <a className="footer__link" href="javascript:void(0);">YouTube</a>
          </div>
          <div className="footer__section">
            <p className="footer__title">Policies</p>
            <a className="footer__link" href="javascript:void(0);">Customer License Agreement</a>
            <a className="footer__link" href="javascript:void(0);">Online Privacy Policy</a>
            <a className="footer__link" href="javascript:void(0);">Terms of Service</a>
            <a className="footer__link" href="javascript:void(0);">Data Processing Addendum</a>
            <a className="footer__link" href="javascript:void(0);">Income Disclaimer</a>
            <a className="footer__link" href="javascript:void(0);">Partner Program Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
