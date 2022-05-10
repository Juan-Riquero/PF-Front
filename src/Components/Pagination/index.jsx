import React from "react";


function Paginado({ }) {
  const pageNumber = [];
 
  for (let i = 1; i <= Math.ceil(sneakers/ gamesPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumber?.map((number) => {
          return (
            <li className="number" key={number}>
              <a onClick={() => paginado(number)} href="#">
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Paginado;