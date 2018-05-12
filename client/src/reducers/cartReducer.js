import actions from '../actions/cart/actions';

const { ADD_ITEM } = actions;

const initialState = {
	cart: []
}

const reducer = (state=initialState, action) => {
	switch (action.type) {
		case ADD_ITEM:
			return {
				...state,
				cart: [ ...state.cart, action.payload ]
			}
		default:
			return state;
	}
}

export default reducer;