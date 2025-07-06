import React from "react";
import "./Footer.css"
import logo from "../assets/logo.png";

const Footer = () => (
  <div className="footer-background">
    <div className="footer-overlay">
      <div className="footer-content">
        <h1>WE READY TO HAVE YOU<br/>THE BEST DINING EXPERIENCES</h1>
        <div className="footer-info">
          <span>
            <i className="fa fa-map-marker" /> Jendral Sudirman Street Prabuman, Bandar Lampung, Lampung, 35222
          </span>
          <span>
            <i className="fa fa-phone" /> +0721 471 285
          </span>
        </div>
        <button className="footer-button">RESERVE A TABLE</button>
        <div className="footer-logo">
          <img src={logo} alt="Cafe O2 ice Logo" style={{ maxWidth: "200px", width: "100%" }} />
        </div>
        <div className="footer-socials">
          <a href="#">Instagram</a> | <a href="#">Twitter</a> | <a href="#">Facebook</a>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;