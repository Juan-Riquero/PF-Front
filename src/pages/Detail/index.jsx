import { Link, useParams } from "react-router-dom";
import s from "./detail.module.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailSneaker } from "../../Redux/Actions";

export default function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const sneaker = useSelector((state) => state.detail);

  console.log("estamos en el componente DETAIL", sneaker);
  useEffect(() => {
    dispatch(getDetailSneaker(id));
  }, [dispatch, id]);

  return (
    <div>
      {
        !sneaker.price ? (
        <img  src="https://c.tenor.com/_tt3TLfzyYoAAAAC/s4gu-loding.gif" alt={"img"}/>
      ) : (
        <div  className={s.detail}>
          <section className={s.left} >
            <img src={sneaker.grid_picture_url} alt={"img"} />
            
            <div className={s.btn_container}>
              <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <div className={s.btn}>
                  <button className={s.home}> {'<'} </button>
                  <p className={s.btn_title}>GO BACK</p>
                </div>
              </Link>
            </div>
            
            
          </section>
          <section className={s.rigth}>
            <p className={s.brand}> {sneaker.brand_name}</p>
            <p className={s.price} >${sneaker.price}</p>
            <p className={s.details}>Details: {sneaker.details}</p>
            <p className={s.sizes_title}>Selec Size (EUR)</p>
            <div className={s.sizes}>
              
                {sneaker.sizes?.map(({ size }, i) => (
                  <div className={s.size} key={i}> <p>{size}</p> </div>
                ))}
            </div>
            <p className={s.subtitle}>Material </p>
            <p className={s.cont}>{sneaker.name}</p>
            <p className={s.subtitle}>Model</p>
            <p className={s.cont}>{sneaker.name}</p>
            <button className={s.addCart}>Add to Cart</button>
          </section>
        </div>
      )
      }
    </div>
  );
}
