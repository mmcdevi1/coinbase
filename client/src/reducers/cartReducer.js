import actions from '../actions/cart/actions';

const { ADD_ITEM, SET_CART, SET_ITEMS } = actions;

const initialState = {
	cartId: null,
	cartItems: []
}

const reducer = (state=initialState, action) => {
	switch (action.type) {
		case SET_CART:
			return {
				...state,
				cartId: action.payload
			}
		case SET_ITEMS:
			return {
				...state,
				cartItems: action.payload
			}
		case ADD_ITEM:
			return {
				...state,
				cartItems: [ ...state.cartItems, action.payload ]
			}
		default:
			return state;
	}
}

export default reducer;