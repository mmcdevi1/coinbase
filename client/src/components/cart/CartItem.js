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
		return (
			<div>
				{ 
					this.renderItem()
				}
			</div>
		)
	}
}

export default CartItem