import axios from "axios";
export const GET_SNEAKERS = "GET_SNEAKERS";
export const SEARCH_BY_NAME = 'SEARCH_BY_NAME';

export function getSneakers() {
	return async function (dispatch) {
		try {
        const getSneakers = await axios.get("http://localhost:3001/sneakers");
        console.log(getSneakers)
        return dispatch({
          type: GET_SNEAKERS,
          payload: getSneakers
        })
		} catch (error) {
      console.log("There is an error in getsneakers action",error)
		}
	};
}
export function searchByName(name) {
	return async function (dispatch) {
		try {
			if (name) {
				const { data } = await axios.get(
					`http://localhost:3001/sneakers?name=${name}`
				);
				return dispatch({
					type: SEARCH_BY_NAME,
					payload: data,
				});
			}
		} catch (error) {
      return dispatch({
        type: SEARCH_BY_NAME,
        payload: error,
      })
		}
	};
}