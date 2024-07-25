import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="foot-about-container">
          <p className="foot-about">About Us</p>
          <p className="foot-about-epistle">
            The dining facility at Greenbelt Hotel offers a delightful culinary experience that caters to every palate.
          </p>
        </div>
        <div className="quick-container">
          <p className="quick">Quick Link</p>
          <div className="sub-quicklink">
            <p><Link to="/aboutus" className="quicklink">About</Link></p>
            <p><Link to="/rooms" className="quicklink">Rooms</Link></p>
            <p><Link to="/bookroom" className="quicklink">Book a Room</Link></p>
            <p><Link to="/contact" className="quicklink">Contact</Link></p>
          </div>
        </div>
        <div className="foot-contact-container">
          <p className="foot-contact">Contact</p>
          <p className="address">5 Mathew Street off Ogba Road, Agege via Ikeja Lagos</p>
          <p className="address">+2347051550000</p>
          <p className="address">greenbelthotel2022@gmail.com</p>
        </div>
        <div className="social-media-container">
          <p className="social-media">Follow Us On Social Media</p>
          <div className="media-container">
            <p className="medialink">
              <a href="https://www.facebook.com/ayanyemi.opeyemi.1" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="3x" />
              </a>
            </p>
            <p className="medialink">
              <a href="https://www.instagram.com/youngpal008/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="3x" />
              </a>
            </p>
            <p className="medialink">
              <a href="https://x.com/Young_pal8" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} size="3x" />
              </a>
            </p>
            <p className="medialink">
              <a href="https://www.linkedin.com/in/hammed-ayanyemi-b07a61284/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
              </a>
            </p>
          </div>
        </div>
      </div>
      <div><p className="whatsapp">
              <a href="https://www.linkedin.com/in/hammed-ayanyemi-b07a61284/" target="_blank" rel="noopener noreferrer" className="whatsapplogo">
                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
              </a>
            </p>
      </div>
    </footer>
  );
};

export default Footer;
