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
    <div key={ product.id }>
      <button
        data-testid="product-detail-link"
        className="product-card"
        type="button"
        value={ product.title }
        onClick={ () => {
          handleClick(product);
        } }
      >
        <div data-testid="product" className="product">
          <p className="product-title">{product.title}</p>
          <img
            width="100px"
            src={ product.thumbnail }
            alt={ product.title }
            className="image-product"
          />
          <p className="p-price">
            {new Intl.NumberFormat('pr-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(product.price)}
          </p>
        </div>
      </button>
      <AddTocart
        selectedProduct={ product }
        dataTestId="product-add-to-cart"
      />
    </div>
  ));
}

ProductCard.propTypes = {
  products: PropTypes.arrayOf(),
}.isRequired;
