import React from "react";
import "./home.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


 export default function Home() {
  const dispatch = useDispatch();

  
  
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage, setGamesPerPage] = useState(15);
  const indexOfLastGame = currentPage * gamesPerPage; //15
  const indexOfFirstGame = indexOfLastGame - gamesPerPage; // 0

  const currentGames = fullGames.slice(indexOfFirstGame, indexOfLastGame);
  const paginas = Math.ceil(fullGames.length / gamesPerPage)
 
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
   // dispatch(getGames());
  }, [dispatch]);
  return (
    <div >  
    </div>
  );
}