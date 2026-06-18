import React from "react";
import "./Weather.css";

function Weather() {
  return (
    <div className="weather container">
      <h1>Weather Forecast</h1>

      <div className="weather-card">
        <h2>Chennai</h2>
        <h3>32°C</h3>
        <p>Partly Cloudy</p>
      </div>
    </div>
  );
}

export default Weather;