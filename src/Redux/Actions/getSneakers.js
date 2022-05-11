import axios from "axios";
export const GET_SNEAKERS = "GET_SNEAKERS";

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