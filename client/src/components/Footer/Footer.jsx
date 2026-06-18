import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          <div className="footer-col">
            <h2 className="footer-logo">🌾 AgriGuide</h2>
            <p>
              Smart farming solutions for modern farmers.
              Get crop guidance, weather updates and market prices.
            </p>
          </div>

          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li>Home</li>
              <li>Crop Guide</li>
              <li>Weather</li>
              <li>Disease Detection</li>
              <li>Market Prices</li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contact</h3>

            <p>
              <FaMapMarkerAlt /> India
            </p>

            <p>
              <FaPhoneAlt /> +91 9876543210
            </p>

            <p>
              <FaEnvelope /> support@agriguide.com
            </p>
          </div>

          <div className="footer-col">
            <h3>Follow Us</h3>

            <div className="social-icons">
              <FaFacebookF />
              <FaInstagram />
              <FaYoutube />
              <FaTwitter />
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © 2026 AgriGuide. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;