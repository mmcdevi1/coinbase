import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../components/cart/CartItem';

class Cart extends React.Component {
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

	return {
		cart,
		products,
	}
}

export default connect(mapStateToProps)(Cart);