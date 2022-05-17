import axios from 'axios';
export const GET_SNEAKERS = 'GET_SNEAKERS',
	SEARCH_BY_NAME = 'SEARCH_BY_NAME',
	FILTER_BY_CATEGORY = 'FILTER_BY_CATEGORY',
	FILTER_BY_BRAND = 'FILTER_BY_BRAND',
	GET_DETAIL = 'GET_DETAIL',
	SET_CART = 'SET_CART';

export function getSneakers() {
	return async function (dispatch) {
		try {
			const { data } = await axios.get('http://localhost:3001/sneakers');
			return dispatch({
				type: GET_SNEAKERS,
				payload: data,
			});
		} catch (error) {
			console.log('There is an error in getsneakers action', error);
		}
	};
}

// export function searchByName(name) {
// 	return async function (dispatch) {
// 		try {
// 			if (name) {
// 				const { data } = await axios.get(
// 					`http://localhost:3001/sneakers?name=${name}`
// 				);
// 				return dispatch({
// 					type: SEARCH_BY_NAME,
// 					payload: data,
// 				});
// 			}
// 		} catch (error) {
// 			return dispatch({
// 				type: SEARCH_BY_NAME,
// 				payload: error,
// 			});
// 		}
// 	};
// }

export function searchByName(name) {
	return {
		type: SEARCH_BY_NAME,
		payload: name,
	};
}

export function filterByCategory(category) {
	return {
		type: FILTER_BY_CATEGORY,
		payload: category,
	};
}

export function filterByBrand(brand) {
	return {
		type: FILTER_BY_BRAND,
		payload: brand.toLowerCase(),
	};
}

//ACA EMPIEZA EL CARRITO DE COMPRAS
const cartData = [
	{
		id: 'fruit01',
		name: 'Fuji Apple',
		type: 'Import',
		price: '32',
		producent: 'FreshBox',
		notes: 'max 10kg',
		max: 10,
		qty: 1,
		image: 'https://i.ibb.co/0jwQxLn/img-apple.jpg',
		wishlisted: false,
	},
	{
		id: 'fruit02',
		name: 'Fresh Guava',
		type: 'Local',
		price: '15',
		producent: 'FreshBox',
		notes: 'max 20kg',
		max: 20,
		qty: 1,
		image: 'https://i.ibb.co/fNPztkX/img-guava.jpg',
		wishlisted: false,
	},
	{
		id: 'fruit03',
		name: 'Orange',
		type: 'Import',
		price: '18',
		producent: 'FreshBox',
		notes: 'max 12kg',
		max: 12,
		qty: 1,
		image: 'https://i.ibb.co/DtYvztW/img-orange.jpg',
		wishlisted: false,
	},
];

export function getDetailSneaker(id) {
	return async function (dispatch) {
		try {
			const { data } = await axios.get(`http://localhost:3001/sneaker/${id}`);
			return dispatch({
				type: GET_DETAIL,
				payload: data,
			});
		} catch (error) {
			console.log('There is an error in getDetailSneaker action', error);
		}
	};
}

export const addWishlist = (index) => {
	return async (dispatch, getState) => {
		const rootReducer = getState();
		const { productData } = rootReducer;
		let wishlistData = productData[index].wishlisted;

		dispatch({
			type: SET_CART,
			payload: (productData[index].wishlisted = !wishlistData),
		});
	};
};

export const addItemQuantity = (index) => {
	return async (dispatch, getState) => {
		const rootReducer = getState();
		const { productData } = rootReducer;
		let maxData = productData[index].max;

		if (productData[index].qty >= maxData) {
			return false;
		} else {
			dispatch({
				type: SET_CART,
				payload: (productData[index].qty = productData[index].qty + 1),
			});
		}
	};
};

export const decreaseItemQuantity = (index) => {
	return async (dispatch, getState) => {
		const rootReducer = getState();
		const { productData } = rootReducer;

		if (productData[index].qty <= 1) {
			return false;
		} else {
			dispatch({
				type: SET_CART,
				payload: (productData[index].qty = productData[index].qty - 1),
			});
		}
	};
};

export const addItem = () => {
	return async (dispatch) => {
		dispatch({
			type: SET_CART,
			payload: {
				productData: cartData,
			},
		});
	};
};

export const removeItem = (id) => {
	return async (dispatch, getState) => {
		const rootReducer = getState();
		const { productData } = rootReducer;

		dispatch({
			type: SET_CART,
			payload: {
				productData: productData.filter((item) => {
					return item.id !== id;
				}),
			},
		});
	};
};

export const changeCart = (data) => {
	return async (dispatch) => {
		dispatch({
			type: SET_CART,
			payload: data,
		});
	};
};
