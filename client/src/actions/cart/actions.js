const actions = {
	ADD_ITEM: 'ADD_ITEM',
	REMOVE_ITEM: 'REMOVE_ITEM',

	addToCart: function (item, history) {
		return dispatch => {
			dispatch({
				type: actions.ADD_ITEM,
				payload: item,
			})

			history.push('/cart')
		}
	}
}

export default actions;