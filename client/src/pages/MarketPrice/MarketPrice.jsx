import React from "react";
import "./MarketPrice.css";

function MarketPrice() {
  const prices = [
    {crop:"Rice",price:"₹2500"},
    {crop:"Wheat",price:"₹2200"},
    {crop:"Cotton",price:"₹6500"},
  ];

  return (
    <div className="market container">
      <h1>Market Prices</h1>

      <table>
        <thead>
          <tr>
            <th>Crop</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {prices.map((item,index)=>(
            <tr key={index}>
              <td>{item.crop}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MarketPrice;