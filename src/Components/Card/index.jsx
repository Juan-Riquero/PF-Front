import React from "react";

function Card({ sneaker }) {
  const { name, color, details, price} = sneaker;
  
  return (
    <div>
      <h2>{name}</h2>
      <h3>{color}</h3>
      <h3>{sneaker.details}</h3>
      <h3>{sneaker.price}</h3>
    </div>
  );
}

export default Card;