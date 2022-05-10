import { Link, useParams } from "react-router-dom";
import "./detail.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, deleteVideogame } from "../../Redux/Actions";
import { useState } from "react";

export default function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();

  return (
    <div > 
  
    </div>
  );
}
