import { SEARCH_BY_NAME } from "../Actions/searchAction";
  
  const initialState = {
    searchSneakers: [],
  };
  
  const rootReducer = (state = initialState, { type,payload }) => {
    switch (type) {

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