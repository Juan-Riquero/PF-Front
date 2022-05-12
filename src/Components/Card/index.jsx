import React from "react";

function Card({ sneaker }) {
  const { name, price, grid_picture_url,brand_name} = sneaker;
  
  return (
    <div>
      <h2>{name}</h2>
      <img
          src={grid_picture_url}
          alt=""
          className="imageCard"
          height="200px"
          width="350px"
        />
      <h3>{brand_name}</h3>
      <h3>{price}</h3>
    </div>
  );
}

export default Card;