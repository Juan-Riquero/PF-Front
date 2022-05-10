import axios from "axios";

export function getSneakers() {
  return async function (dispatch) {
    return dispatch({
      type: GET_SNEAKERS,
      payload: response.data,
    });
  };
}
