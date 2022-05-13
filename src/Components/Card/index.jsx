import React from "react";
import style from './Card.module.css'
import {Link} from "react-router-dom"

function Card({ sneaker }) {
  const { name, price, grid_picture_url,brand_name,id} = sneaker;
  
  return (
    <div>
      <Link to ={`/detail/${id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
        <div className={style.card}>
          <img
              src={grid_picture_url}
              alt=""
              className={style.img}
            />
          <div className={style.data_container}>
            <section className={style.data}>
              <p className={style.brand}>{brand_name}</p>
              <p className={style.name}>{name}</p>
            </section>
            <section className={style.price_section}>
              $<p className={style.price}>{price}</p>
            </section>
          </div>
          

          
        </div>
      </Link>
    </div>
  );
}

export default Card;