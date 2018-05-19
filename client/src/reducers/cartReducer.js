import actions from '../actions/cart/actions';

const { ADD_ITEM, SET_CART, SET_ITEMS, DELETE_ITEM } = actions;

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
				cartItems: action.saved ? [ ...state.cartItems, action.payload ] : [ ...state.cartItems ]
			}
		case DELETE_ITEM:
			return {
				...state,
				cartItems: [ 
					...state.cartItems.slice(0, action.payload),  
					...state.cartItems.slice(action.payload + 1)
				]
			}
		default:
			return state;
	}
}

export default reducer;