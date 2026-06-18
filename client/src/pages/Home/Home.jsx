import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Smart Farming Solutions</h1>
          <p>
            Get crop guidance, weather forecasts, disease detection,
            and market prices in one place.
          </p>

          <button>Explore Now</button>
        </div>
      </section>
    </div>
  );
}

export default Home;