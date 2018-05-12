import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import actions from '../../actions/cart/actions';

const { addToCart } = actions;

class Product extends React.Component {
	addItem = () => {
		const { products, addToCart, history } = this.props;

		addToCart( { productId: products[0].id, userId: 1 }, history )
	}

	render () {
		const { products, addToCart, history } = this.props;

		return (
			<div>
				<h2>
					{ products[0].name }
					<small>
						{ products[0].price }
					</small>
				</h2>
				<button onClick={ this.addItem }>Add to Cart</button>
			</div>
		)
	}
}

function mapStateToProps (state) {
	const { products } = state.Products;

	return {
		products,
	}
}

export default connect(mapStateToProps, { addToCart })(Product)