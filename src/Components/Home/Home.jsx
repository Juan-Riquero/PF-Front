//componenente Home
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//Componentes y funciones
// import Pagination from '../Pagination';
import Card from '../Card'
import SearchBar from '../SearchBar';

//const SNEAKERS_PER_PAGE = 11;

const Home = () => {
  const dispatch = useDispatch();
  const filteredSneakers = useSelector(state => state.Sneakers);

  // PAGINACIÓN ----------------------------------------------------------------------------------------------------
  // Se crea la paginación de 12 zapatillas por pagina
  const [currentPage, setCurrentPage] = useState(1); // Estado para seleccionar pagina actual
  const [sneakerPerPage, setSneakerPerPage] = useState(11); // Estado para seleccionar pagina actual
  const lastSneaker = currentPage * sneakerPerPage - 1;
  const firstSneaker = lastSneaker - sneakerPerPage;
  // Se corta el array de todas las zapatillas con los dos indices inicial y final de la página, para obtener las zapatillas 
  // que se mostraran en la página actual
  let currentPageSneakers = filteredSneakers.length ? filteredSneakers.slice(0, 11) : [];
  console.log("componente Home", filteredSneakers);
  //---------------------------------------------------------------------------------------------------------------

/*   useEffect(() => {

  }, [filteredSneakers]) */

  return (
    <div>
      <h1>Home</h1>
      {/* <Pagination /> */}
      <SearchBar />
      {
        currentPageSneakers.length > 0 && currentPageSneakers?.map((s, i) => < Card key={i} name={s.name} color={s.color}/>)
      }
    </div>
  );
}

export default Home;