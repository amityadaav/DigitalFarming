import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaSeedling } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo">
          <FaSeedling className="logo-icon" />
          <span>AgriGuide</span>
        </div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/crop-guide">Crop Guide</Link></li>
          <li><Link to="/weather">Weather</Link></li>
          <li><Link to="/disease">Disease</Link></li>
          <li><Link to="/market">Market Prices</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <button className="nav-btn">
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default Navbar;