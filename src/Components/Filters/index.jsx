import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filterByBrand, filterByCategory } from '../../Redux/Actions/index';

import s from './filters.module.css'

const Filters = () => {
  const dispatch = useDispatch();

  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const peticion = async () => {
    let resp1 = await fetch(`http://localhost:3001/brands`);
    let brands = await resp1.json();
    let resp2 = await fetch(`http://localhost:3001/categories`);
    let categories = await resp2.json();
    setBrands(brands);
    setCategories(categories);
  }

  useEffect(() => {
    peticion();
    //console.log("marcas", brands)
    // eslint-disable-next-line
  }, [])


  const handleCategory = (e) => {
    e.preventDefault();
    dispatch(filterByCategory(e.target.value));

  }

  const handleBrand = (e) => {
    e.preventDefault();
    dispatch(filterByBrand(e.target.value));
    console.log("estamos en el handle brand", e.target.value)
  }

  return (
    <div className={s.filters}>
      <select
        disabled={true}
        onChange={handleCategory}
      >
        <option value="">All categories</option>
        {
          categories.length && categories?.map(({ name },id) => <option key={id} value={name}>{name}</option>)
        }
      </select>

      <select
        onChange={handleBrand}
      >
        <option value="" >All brands</option>
        {
          brands.length && brands?.map(({  name },id) => <option key={id} value={name}>{name}</option>)
        }
      </select>
    </div>
  );
}

export default Filters;