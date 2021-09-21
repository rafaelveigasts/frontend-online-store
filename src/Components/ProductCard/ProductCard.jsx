import React from 'react';
import PropTypes from 'prop-types';
import ProductNotFound from '../ProductNotFound/ProductNotFound';

export default function ProductCard(props) {
  const { products } = props;
  if (products.length === []) {
    return <ProductNotFound />;
  }
  return products.map(({ title, thumbnail, price, id }) => (
    <div data-testid="product" key={ id } className="product">
      <p>{title}</p>
      <img width="100px" src={ thumbnail } alt={ title } />
      <p>{price}</p>
    </div>
  ));
}

ProductCard.propTypes = {
  products: PropTypes.arrayOf(),
}.isRequired;
