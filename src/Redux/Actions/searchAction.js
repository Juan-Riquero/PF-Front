import axios from 'axios';
export const SEARCH_BY_NAME = 'SEARCH_BY_NAME';

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
