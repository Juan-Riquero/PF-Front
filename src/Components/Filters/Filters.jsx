import React from 'react';
import { useDispatch } from 'react-redux';
import { filterByBrand, filterByCategory } from '../../Redux/Actions/filtersActions';

const Filters = () => {
  const dispatch = useDispatch();

  const handleCategory = (e) => {
    e.preventDefault();
    dispatch(filterByCategory(e.target.value));
  }

  const handleBrand = (e) => {
    e.preventDefault();
    dispatch(filterByBrand(e.target.value));
  }
  
  return (
    <>
      <h1>Filters</h1>
      <select
        onChange={handleCategory}
      >
        <option value="">Select</option>
        <option value="basketball">basketball</option>
        <option value="lifestyle">lifestyle</option>
        <option value="running">running</option>
        <option value="skateboarding">skateboarding</option>
        <option value="deporte">deporte</option>
        <option value="casa">casa</option>
        <option value="futbol">futbol</option>
        <option value="dormir">dormir</option>
      </select>

      <select
        onChange={handleBrand}
      >
        <option value="">Select</option>
        <option value="nike">nike</option>
        <option value="adidas">adidas</option>
        <option value="air jordan">air jordan</option>
        <option value="converse">converse</option>
        <option value="vans">vans</option>
        <option value="champion">champion</option>
        <option value="perro">perro</option>
      </select>
    </>
  );
}

export default Filters;