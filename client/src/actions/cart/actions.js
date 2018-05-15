import axios from 'axios';

const actions = {
	ADD_ITEM: 'ADD_ITEM',
	REMOVE_ITEM: 'REMOVE_ITEM',
	SET_CART: 'SET_CART',
	SET_ITEMS: 'SET_ITEMS',

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
						payload: res.data,
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
			.get('/api/cart/items', {
				params: { cartId: cartId },
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

























