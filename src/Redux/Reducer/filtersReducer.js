import { FILTER_BY_BRAND, FILTER_BY_CATEGORY } from '../Actions/filtersActions';

const initialState = {
	filters: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case FILTER_BY_CATEGORY:
			return {
				...state,
				filters: payload,
      };

    case FILTER_BY_BRAND:
      return {
        ...state,
        filters: payload,
      };
      
		default:
			return state;
	}
};

export default rootReducer;
