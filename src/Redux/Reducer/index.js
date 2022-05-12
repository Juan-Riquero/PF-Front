import {
	GET_SNEAKERS,
	SEARCH_BY_NAME,
	FILTER_BY_BRAND,
	FILTER_BY_CATEGORY,
} from '../Actions';

const initialState = {
	searchSneakers: [],
	Sneakers: [],
	SneakersCopy: [],
  filters: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
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
        Sneakers: payload,
				searchSneakers: payload,
			};

		case FILTER_BY_CATEGORY:
			return {
				...state,
				Sneakers: payload,
        filters: payload,
			};

		case FILTER_BY_BRAND:
			return {
				...state,
				Sneakers: payload,
        filters: payload,
			};

		default:
			return state;
	}
};
export default rootReducer;
