import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import CartItem from '../components/cart/CartItem';
import actions from '../actions/cart/actions';

const { setCartItems, removeFromCart } = actions;

class Cart extends React.Component {
	renderCartItems () {
		const { products, cartId, cartItems, removeFromCart } = this.props;

		if (cartItems.length) {
			return cartItems.map((cartItem, index) => {
				return (
					<CartItem 
						key={index}
						index={index}
						products={products}
						cartItem={cartItem}
						removeFromCart={removeFromCart}
						cartId={cartId}
					/>
				)
			})
		} else {
			return 'Cart is empty'
		}
	}

	render () {
		console.log(this.props.cartId)
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
	const { cartItems, cartId } = state.Cart;
	const { products } = state.Products;
	const { currentUser } = state.Auth; 

	return {
		cartItems,
		products,
		currentUser,
		cartId,
	}
}

export default connect(mapStateToProps, { setCartItems, removeFromCart })(Cart);