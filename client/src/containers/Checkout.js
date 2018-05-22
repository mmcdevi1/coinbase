import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import actions from '../actions/order/actions';

const { submitOrder, updateCartItems } = actions;

class Checkout extends React.Component {
	submitOrder = () => {
		const { submitOrder, updateCartItems, currentUser, cartItems } = this.props;

		submitOrder({ userId: currentUser.id })
	}

	render () {
		return (
			<div>
				<h1>Checkout</h1>
				<button onClick={this.submitOrder}>Order</button>
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

export default connect(mapStateToProps, { submitOrder, updateCartItems })(Checkout);