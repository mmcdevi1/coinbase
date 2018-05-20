import axios from 'axios';

const actions = {
	SUBMIT_ORDER: 'SUBMIT_ORDER',

	submitOrder: (order) => {
		return dispatch => {
			axios
				.post('/api/order/new', order, {
			    headers: { authorization: localStorage.getItem('token') }
			  })
			  .then(res => {
			  	dispatch({
			  		type: actions.SUBMIT_ORDER,
			  		payload: res.data,
			  	})
			  })
			  .catch(err => {
			  	console.log(err)
			  })
		}
	},

	updateCartItems: (order) => {
		return dispatch => {
			axios
				.put('/api/cart/item', order,  {
			    headers: { authorization: localStorage.getItem('token') }
			  })
			  .then(res => {
			  	dispatch({

			  	})
			  })
			  .catch(err => {
			  	console.log(err)
			  })
		}
	}
}

export default actions;