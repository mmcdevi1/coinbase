import axios from 'axios';

const actions = {
	ADD_ITEM: 'ADD_ITEM',
	DELETE_ITEM: 'DELETE_ITEM',
	SET_CART: 'SET_CART',
	SET_ITEMS: 'SET_ITEMS',

	removeFromCart: function (index, cartId, itemId) {
		return dispatch => {
			axios
				.delete(`/api/cart/${cartId}/item/${itemId}`, {
			    headers: { authorization: localStorage.getItem('token') }
			  })
			  .then(res => {
			  	dispatch({
						type: actions.DELETE_ITEM,
						payload: index
					})
			  })
			  .catch(err => {

			  })
		}
	},

	addToCart: function (currentUser, cartId, product, history) {
		return dispatch => {
			axios
				.post('/api/cart/item', { userId: currentUser.id, cartId, productId: product.id }, {
			    headers: { authorization: localStorage.getItem('token') }
			  })
				.then(res => {
					console.log(res)
					dispatch({
						type: actions.ADD_ITEM,
						payload: res.data[0],
						saved: res.data[1]
					})
				})
				.catch(err => {
					console.log(err)
				})			

			history.push('/cart')
		}
	},

	setCart: function (currentUser) {
		return dispatch => {
			axios
				.post('/api/cart/new', { userId: currentUser.id }, {
	      	headers: { authorization: localStorage.getItem('token') }
	    	})
				.then(res => {
					console.log(res)
					// localStorage.setItem('cart', res.data[0].id)
					dispatch({
						type: actions.SET_CART,
						payload: res.data[0].id
					})
				})
				.catch(err => {
					console.log(err)
				})
		}
	},

	setCartItems: function (cartId) {
		return dispatch => {
			axios
				.get(`/api/cart/${cartId}/items`, {
			    headers: { authorization: localStorage.getItem('token') }
			  })
				.then(res => {
					dispatch({
						type: actions.SET_ITEMS,
						payload: res.data,
					})
				})
				.catch(err => {
					console.log(err)
				})
		}
	}


}

export default actions;

























