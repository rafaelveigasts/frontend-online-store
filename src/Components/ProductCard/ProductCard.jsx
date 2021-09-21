import React from 'react';
import PropTypes from 'prop-types';
import ProductNotFound from '../ProductNotFound/ProductNotFound';

export default function ProductCard(props) {
  const { products } = props;
  if (products.length === []) {
    return <ProductNotFound />;
  }
  return products.map(({ title, thumbnail, price, id }) => (
    <section data-testid="product" key={ id }>
      <p>{title}</p>
      <img src={ thumbnail } alt={ title } />
      <p>{price}</p>
    </section>
  ));
}

ProductCard.propTypes = {
  products: PropTypes.arrayOf(),
}.isRequired;
