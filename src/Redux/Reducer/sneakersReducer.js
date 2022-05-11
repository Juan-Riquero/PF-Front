import {
    GET_SNEAKERS
} from "../Actions/getSneakers"


const initialState = {
    Sneakers: [],
    SneakersCopy: [],
  };
  export default function  SneakersReducer  (state = initialState, { type, payload })  {
    switch (type) {
      case GET_SNEAKERS:
        return {
          ...state,
          Sneakers: payload,
          SneakersCopy: payload,
        }; 
         default:
        return state;
    }
  };