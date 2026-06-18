import React, { useState } from "react";
import "./AIAssistant.css";

function AIAssistant() {

  const [question,setQuestion] = useState("");

  return (
    <div className="ai container">
      <h1>AI Farming Assistant</h1>

      <div className="chat-box">
        <textarea
          placeholder="Ask your farming question..."
          value={question}
          onChange={(e)=>setQuestion(e.target.value)}
        />

        <button>Ask AI</button>
      </div>
    </div>
  );
}

export default AIAssistant;