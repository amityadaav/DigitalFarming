import React from "react";
import "./DiseaseDetection.css";

function DiseaseDetection() {
  return (
    <div className="disease container">
      <h1>Disease Detection</h1>

      <div className="upload-box">
        <input type="file" />
        <button>Analyze Image</button>
      </div>
    </div>
  );
}

export default DiseaseDetection;