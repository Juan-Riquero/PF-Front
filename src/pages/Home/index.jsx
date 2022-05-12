//componenente Home
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//Componentes y funciones
// import Pagination from '../Pagination';
import Cards from '../../Components/Cards'
import SearchBar from '../../Components/SearchBar';
import Pagination from '../../Components/Pagination';
import Filters from '../../Components/Filters';


const Home = () => {
  const dispatch = useDispatch();
  const filteredSneakers = useSelector(state => state.Sneakers);

  // PAGINACIÓN ----------------------------------------------------------------------------------------------------
  // Se crea la paginación de 12 zapatillas por pagina
  const SNEAKERS_PER_PAGE = 4; // Constante para setear cantidad de zapatillas por página
  const [currentPage, setCurrentPage] = useState(1); // Estado para seleccionar pagina actual
  const lastSneaker = currentPage * SNEAKERS_PER_PAGE;
  const firstSneaker = lastSneaker - SNEAKERS_PER_PAGE;
  // Se corta el array de todas las zapatillas con los dos indices inicial y final de la página, para obtener las zapatillas 
  // que se mostraran en la página actual
  let currentPageSneakers = filteredSneakers.length ? filteredSneakers.slice(firstSneaker, lastSneaker) : [];
  //---------------------------------------------------------------------------------------------------------------

  // useEffect(() => {
  // }, [])

  return (
    <div>
      <h1>Home</h1>

      {/* Componente para searchBar */}
      <SearchBar />
      {/* Componente para filtros */}
      <Filters />

      {/* Componente para paginado */}
      <Pagination numberOfSneakers={filteredSneakers.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        SNEAKERS_PER_PAGE={SNEAKERS_PER_PAGE}
      />

      <Cards renderSneakers={currentPageSneakers} />
    </div>
  );
}

export default Home;