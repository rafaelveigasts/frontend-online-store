import React from 'react';
import PropTypes from 'prop-types';
import ProductNotFound from '../ProductNotFound/ProductNotFound';
import AddTocart from '../AddToCart/AddToCart';
import '../../pages/home.css';

export default function ProductCard(props) {
  const { products, handleClick } = props;
  if (products.length === []) {
    return <ProductNotFound />;
  }
  return products.map((product) => (
    <div
      className="flex flex-col content-around max-w-sm
      rounded overflow-hidden shadow-lg w-64 h-72 justify-around"
      key={ product.id }
    >
      <button
        className="flex flex-col content-around max-w-sm rounded
        overflow-hidden shadow-lg w-64 h-72 justify-around"
        data-testid="product-detail-link"
        type="button"
        value={ product.title }
        onClick={ () => {
          handleClick(product);
        } }
      >
        <div data-testid="product">
          <h2
            className="sm:text-sm sm:leading-snug font-semibold
          tracking-wide uppercase text-grey-600 mb-3"
          >
            {product.title}
          </h2>
          <div className="flex justify-center">
            <img
              className="w-24 object-center"
              src={ product.thumbnail }
              alt={ product.title }
            />
          </div>
          <p className="justify-self-end">
            {new Intl.NumberFormat('pr-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(product.price)}
          </p>
        </div>
      </button>
      <AddTocart selectedProduct={ product } dataTestId="product-add-to-cart" />
    </div>
  ));
}

ProductCard.propTypes = {
  products: PropTypes.arrayOf(),
}.isRequired;
