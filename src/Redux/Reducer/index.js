import {
GET_SNEAKERS,
SEARCH_BY_NAME
} from "../Actions"
 
const initialState = {
  searchSneakers: [],
  Sneakers: [],
  SneakersCopy: [],
};


const rootReducer =  (state = initialState, { type,payload }) => {
  switch (type) {
      case GET_SNEAKERS:
        return {
          ...state,
          Sneakers: payload,
          SneakersCopy: payload,
         };

       case SEARCH_BY_NAME:
          return {
        ...state,
        searchSneakers: payload
      };

    default:
      return state;
  }
};
export default rootReducer;