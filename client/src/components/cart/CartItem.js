import React from 'react';

class CartItem extends React.Component {
	renderItem () {
		const { products, cartItem } = this.props;

		const item = products.find(product => {
			return product.id === cartItem.productId;
		})

		return (
			<div>
				{ item.name }
			</div>
		)
	}

	render () {
		const { removeFromCart, index, cartId, cartItem } = this.props;

		return (
			<div onClick={() => removeFromCart(index, cartId, cartItem.id)}>
				{ 
					this.renderItem()
				}
			</div>
		)
	}
}

export default CartItem