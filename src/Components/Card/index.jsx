import React from "react";
import style from './Card.module.css'

function Card({ sneaker }) {
  const { name, color, details, price, grid_picture_url } = sneaker;

  return (
    <div className={style.card} >
      <h3 className={style.name} >{name}</h3>
      <h4 className={style.color}>{color}</h4>
      <h4>{details}</h4>
      <h4>{price}</h4>
      <img src={grid_picture_url} alt={`Foto zapatilla`}/>
    </div>
  );
}

export default Card;