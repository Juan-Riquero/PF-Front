import { Link, useParams } from "react-router-dom";
import "./detail.css";
import React, { useEffect } from "react";
/* import { useDispatch, useSelector } from "react-redux";
import { getDetail, deleteVideogame } from "../../Redux/Actions";
import { useState } from "react"; */

export default function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();

  return (
    <div > 
         <SearchBar />
            <div>
              <img src={grid_picture_url} alt={'img'} />
              <div>
                <h3 >{brand_name}</h3>
                <h6>Price: {price}</h6>
                <h6>Details: {details}</h6>
                <h6>Sizes: {sizes}</h6>
                <h6>Model: {name}</h6>  
                <div>
                  <Link  to="/sneakers">
                    GO BACK
                  </Link>
                  <button>
                    Add to Cart                
                  </button>
                </div>

              </div>
            </div>
           
  
    </div>
  );
}
