import React from "react";
import "./Home.css";

import {
  FaSeedling,
  FaCloudSun,
  FaBug,
  FaRupeeSign,
  FaRobot,
  FaPhoneAlt,
  FaArrowRight,
  FaTint,
  FaFlask,
} from "react-icons/fa";

const heroBg =
  "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1600";

const cropWheat =
  "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800";

const cropRice =
  "https://images.unsplash.com/photo-1586201375761-83865001e8ac?w=800";

const cropMaize =
  "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=800";

const cropCotton =
  "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=800";

const aiImg =
  "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=1600";

function Home() {
  return (
    <div className="home">
      {/* HERO */}
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)),url(${heroBg})`,
        }}
      >
        <div className="container hero-content">
          <span className="hero-badge">
            Smart Agriculture Platform
          </span>

          <h1>
            Empowering Farmers With
            <span> Smart Technology</span>
          </h1>

          <p>
            AI-powered crop management, weather forecasts,
            disease detection, and real-time market insights.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Explore Platform
              <FaArrowRight />
            </button>

            <button className="secondary-btn">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <h3>50K+</h3>
              <p>Farmers Connected</p>
            </div>

            <div className="stat-card">
              <h3>200+</h3>
              <p>Crops Supported</p>
            </div>

            <div className="stat-card">
              <h3>95%</h3>
              <p>Prediction Accuracy</p>
            </div>

            <div className="stat-card">
              <h3>24/7</h3>
              <p>AI Assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="container">
          <div className="section-heading">
            <h2>Our Features</h2>
            <p>
              Everything farmers need in one platform.
            </p>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <FaSeedling className="feature-icon" />
              <h3>Crop Guide</h3>
              <p>Complete crop cultivation guidance.</p>
            </div>

            <div className="feature-card">
              <FaCloudSun className="feature-icon" />
              <h3>Weather Forecast</h3>
              <p>Real-time weather monitoring.</p>
            </div>

            <div className="feature-card">
              <FaBug className="feature-icon" />
              <h3>Disease Detection</h3>
              <p>Identify crop diseases instantly.</p>
            </div>

            <div className="feature-card">
              <FaRupeeSign className="feature-icon" />
              <h3>Market Prices</h3>
              <p>Latest mandi prices and trends.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CROPS */}
      <section className="crops">
        <div className="container">
          <div className="section-heading">
            <h2>Popular Crops</h2>
          </div>

          <div className="crop-grid">
            <div
              className="crop-card"
              style={{ backgroundImage: `url(${cropWheat})` }}
            >
              <span>Wheat</span>
            </div>

            <div
              className="crop-card"
              style={{ backgroundImage: `url(${cropRice})` }}
            >
              <span>Rice</span>
            </div>

            <div
              className="crop-card"
              style={{ backgroundImage: `url(${cropMaize})` }}
            >
              <span>Maize</span>
            </div>

            <div
              className="crop-card"
              style={{ backgroundImage: `url(${cropCotton})` }}
            >
              <span>Cotton</span>
            </div>
          </div>
        </div>
      </section>

      {/* TIPS */}
      <section className="tips">
        <div className="container">
          <div className="section-heading">
            <h2>Farming Best Practices</h2>
          </div>

          <div className="tips-grid">
            <div className="tip-card">
              <FaSeedling />
              <h4>Quality Seeds</h4>
              <p>Use certified seeds for better yield.</p>
            </div>

            <div className="tip-card">
              <FaTint />
              <h4>Water Management</h4>
              <p>Monitor soil moisture regularly.</p>
            </div>

            <div className="tip-card">
              <FaFlask />
              <h4>Fertilization</h4>
              <p>Apply fertilizers at the right stage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI SECTION */}
      <section
        className="ai-section"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.75),rgba(0,0,0,.75)),url(${aiImg})`,
        }}
      >
        <div className="container">
          <FaRobot className="ai-icon" />

          <h2>AI Farming Assistant</h2>

          <p>
            Get instant answers about crops, diseases,
            fertilizers, irrigation, and farming methods.
          </p>

          <button className="primary-btn">
            Start Conversation
          </button>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact">
        <div className="container">
          <FaPhoneAlt className="contact-icon" />

          <h2>Need Expert Consultation?</h2>

          <p>
            Connect with agriculture specialists and
            maximize your farm productivity.
          </p>

          <button className="primary-btn">
            Contact Experts
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
