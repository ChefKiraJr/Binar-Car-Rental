import React from 'react';
import './footer.css';
import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  MailLogo,
  TwitchLogo,
} from './Dummy';

const Footer = ({ page }) => {
  return (
    <div
      className={
        page === 'carSearch' || page === 'noResult'
          ? 'footer-container__bottom'
          : 'footer-container'
      }
    >
      <div className="footer-content">
        <div className="footer-address">
          <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
          <p>binarcarrental@gmail.com</p>
          <p>081-233-334-808</p>
        </div>
        <div className="footer-nav">
          <p>Our Services</p>
          <p>Why Us</p>
          <p>Testimonial</p>
          <p>FAQ</p>
        </div>
        <div className="footer-socmed">
          <p>Connect with us</p>
          <div className="footer-socmed__logo">
            <FacebookLogo />
            <InstagramLogo />
            <TwitterLogo />
            <MailLogo />
            <TwitchLogo />
          </div>
        </div>
        <div className="footer-copyright">
          <p>Copyright Binar 2022</p>
          <div className="footer-copyright__logo"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
