import {
	GET_SNEAKERS,
	SEARCH_BY_NAME,
	FILTER_BY_BRAND,
	FILTER_BY_CATEGORY,
	GET_DETAIL,
} from '../Actions';

const initialState = {
	searchSneakers: [],
	Sneakers: [],
	SneakersCopy: [],
	filters: [],
	detail: [],
  
  productData: [{
    id: "fruit01",
    name: "Fuji Apple",
    type: "Import",
    price: "32",
    producent: "FreshBox",
    notes: "max 10kg",
    max: 10,
    qty: 1,
    image: 'https://i.ibb.co/0jwQxLn/img-apple.jpg',
    wishlisted: false
  },
  {
    id: "fruit02",
    name: "Fresh Guava",
    type: "Local",
    price: "15",
    producent: "FreshBox",
    notes: "max 20kg",
    max: 20,
    qty: 1,
    image: 'https://i.ibb.co/fNPztkX/img-guava.jpg',
    wishlisted: false
  },
  {
    id: "fruit03",
    name: "Orange",
    type: "Import",
    price: "18",
    producent: "FreshBox",
    notes: "max 12kg",
    max: 12,
    qty: 1,
    image: 'https://i.ibb.co/DtYvztW/img-orange.jpg',
    wishlisted: false
  }
  ],
  showDiscountForm: false,
  discountCode: "",
  discountCodeValid: null,
  showCheckoutScreen: false
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
			const sneakerMatching = state.SneakersCopy.filter((s) =>
				s.match.toLowerCase().includes(payload.toLowerCase())
			);
			return {
				...state,
				Sneakers: sneakerMatching,
			};

		case FILTER_BY_CATEGORY:
			//const filterCategory= state.SneakersCopy.filter((el)=> el.category.includes(payload))
			const filterCategory =
				payload === ''
					? state.SneakersCopy
					: state.SneakersCopy.filter((el) => el.categories?.includes(payload));
			return {
				...state,
				Sneakers: filterCategory,
			};

		case FILTER_BY_BRAND:
			// const filterBrand= state.SneakersCopy.filter((el)=> el.brand_name.toLowerCase()===payload)
			const filterBrand =
				payload === ''
					? state.SneakersCopy
					: state.SneakersCopy.filter(
							(el) => el.brand.toLowerCase() === payload
					  );
			return {
				...state,
				Sneakers: filterBrand,
			};

		case GET_DETAIL:
			return {
				...state,
				detail: payload,
			};

		case 'SET_CART':
			return Object.assign({}, state, payload);

		default:
			return state;
	}
};

export default rootReducer;
