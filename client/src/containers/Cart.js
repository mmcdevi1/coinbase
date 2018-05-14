import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import CartItem from '../components/cart/CartItem';

class Cart extends React.Component {
	componentDidMount () {
		if (!localStorage.getItem('cart')) {
			axios.post('/api/cart/new', { userId: this.props.currentUser.id }, {
	      headers: { authorization: localStorage.getItem('token') }
	    })
				.then(res => {
					console.log(res.data.id)
					localStorage.setItem('cart', res.data.id)
				})
				.catch(err => {
					console.log(err)
				})
		} else {
			axios.get('/api/cart', {
				params: { id: localStorage.getItem('cart') },
	      headers: { authorization: localStorage.getItem('token') }
	    })
	    	.then(res => {
	    		console.log(res)
	    	})
	    	.catch(err => {
	    		console.log(err)
	    	})
		}

	}

	renderCartItems () {
		const { cart, products } = this.props

		if (cart.length) {
			return cart.map((cartItem, index) => {
				return (
					<CartItem 
						key={index}
						products={products}
						cartItem={cartItem}
					/>
				)
			})
		} else {
			return 'Cart is empty'
		}
	}

	render () {
		return (
			<div className="cart">
				<h1>Cart</h1>
				{
					this.renderCartItems()
				}
			</div>
		)
	}
}

function mapStateToProps (state) {
	const { cart } = state.Cart;
	const { products } = state.Products;
	const { currentUser } = state.Auth; 

	return {
		cart,
		products,
		currentUser,
	}
}

export default connect(mapStateToProps)(Cart);