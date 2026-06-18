import React from "react";
import "./CropGuide.css";

function CropGuide() {
  const crops = [
    "Rice",
    "Wheat",
    "Sugarcane",
    "Cotton"
  ];

  return (
    <div className="crop-guide container">
      <h1>Crop Guide</h1>

      <div className="crop-grid">
        {crops.map((crop,index)=>(
          <div className="crop-card" key={index}>
            <h3>{crop}</h3>
            <p>Complete cultivation guide.</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CropGuide;