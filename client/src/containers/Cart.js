import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import CartItem from '../components/cart/CartItem';

class Cart extends React.Component {
	componentDidMount () {
			axios
				.post('/api/cart/new', { userId: this.props.currentUser.id }, {
	      	headers: { authorization: localStorage.getItem('token') }
	    	})
				.then(res => {
					console.log(res)
					localStorage.setItem('cart', res.data[0].id)
				})
				.catch(err => {
					console.log(err)
				})
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