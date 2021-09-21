import React from 'react';
import PropTypes from 'prop-types';
import ProductNotFound from '../ProductNotFound/ProductNotFound';

export default function ProductCard(props) {
  const { products } = props;
  if (products.length === []) {
    return <ProductNotFound />;
  }
  return products.map((product) => (
    <button
      className="product-card"
      type="button"
      key={ product.id }
      value={ product.title }
      onClick={ () => {
        console.log(product);
      } }
    >
      <div data-testid="product" className="product">
        <p>{product.title}</p>
        <img width="100px" src={ product.thumbnail } alt={ product.title } />
        <p>{product.price}</p>
      </div>
    </button>
  ));
}
ProductCard.propTypes = {
  products: PropTypes.arrayOf(),
}.isRequired;