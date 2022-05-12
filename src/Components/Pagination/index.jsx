import React from "react";


function Paginado({ numberOfSneakers, currentPage, setCurrentPage, SNEAKERS_PER_PAGE }) {

  const pageNumbers = [];
  console.log('CANTIDAD DE PAGINAS', pageNumbers);
  // Se calcula el número de páginas que se mostrarán
  const numberOfPages = Math.ceil(numberOfSneakers / SNEAKERS_PER_PAGE);

  // Se crea un array con los números de página
  for (let i = 1; i <= numberOfPages; i++) {
    pageNumbers.push(i);
  }

  // Para setear el estado en la página que sea presionada
  const paginated = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {/* Botones de las paginas */}
      {
        pageNumbers?.map((number) => {
          return (
            <button
              onClick={() => paginated(number)}
              key={number}
            >
              {number}
            </button>
          );
        })
      }

      {/* <nav>
        {pageNumbers?.map((number) => {
          return (
            <li className="number" key={number}>
              <a onClick={() => paginated(number)} href="#">
                {number}
              </a>
            </li>
          );
        })}
      </nav> */}

      {/* Boton anterior */}
      {/* <button
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        className={currentPage === 1 ? styles.disabled : styles.previous_and_next_button}>
        Anterior
      </button> */}

      {/* Boton siguiente */}
      {/* <button
        onClick={handleNextPage}
        disabled={currentPage === numbersOfPages}
        className={currentPage === numbersOfPages ? styles.disabled : styles.previous_and_next_button}>
        Siguiente
      </button> */}
    </>
  );
}

export default Paginado;