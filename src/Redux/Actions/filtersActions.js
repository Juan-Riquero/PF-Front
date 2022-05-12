import axios from "axios";
export const FILTER_BY_CATEGORY = "FILTER_BY_CATEGORY";
export const FILTER_BY_BRAND = "FILTER_BY_BRAND";

export function filterByCategory (category) {
  return async function (dispatch) {
    try {
      const {data} = await axios.get(
        `http://localhost:3001/filters/category?category=${category}`);
  
      return dispatch({
        type: FILTER_BY_CATEGORY,
        payload: data.sneakers,
      });
    } catch (error) {
      return dispatch({
        type: FILTER_BY_CATEGORY,
        payload: error,
      })
    }
  }
}

export function filterByBrand (brand) {
  return async function (dispatch) {
    try {
      const {data} = await axios.get(
        `http://localhost:3001/filters/brand?brand=${brand}`);
  
        console.log(data);
        console.log(brand)
      return dispatch({
        type: FILTER_BY_BRAND,
        payload: data.sneakers,
      });
    } catch (error) {
      return dispatch({
        type: FILTER_BY_BRAND,
        payload: error,
      })
    }
  }
}
// `http://localhost:3001/filters/brand?brand=${brand}`



