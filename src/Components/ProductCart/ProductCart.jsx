import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import './productCart.css';

class ProductCart extends Component {
  constructor() {
    super();

    this.addOrDecreaseProduct = this.addOrDecreaseProduct.bind(this);
    this.state = {
      numberProductsCart: 1,
    };
  }

  addOrDecreaseProduct({ target }) {
    const { numberProductsCart } = this.state;
    if (target.innerText === '-') {
      this.setState((_prevState) => (
        { numberProductsCart: _prevState.numberProductsCart - 1 }
      ), () => {
        if (numberProductsCart <= 1) return this.setState({ numberProductsCart: 1 });
      });
    } else {
      this.setState((_prevState) => (
        { numberProductsCart: _prevState.numberProductsCart + 1 }
      ));
    }
  }

  render() {
    const { props: { product, removeProduct }, state: { numberProductsCart } } = this;
    const { title, thumbnail, price, id } = product;
    return (
      <div className="product-cart-body" id={ id }>
        <button
          type="button"
          className="button-remove-product"
          onClick={ removeProduct }
        >
          X
        </button>
        <section className="body-product">
          <img width="150px" src={ thumbnail } alt={ `Imagem do produto ${title}` } />
        </section>
        <section className="product-name" data-testid="shopping-cart-product-name">
          <p>{ title }</p>
        </section>
        <section className="add-product-body">
          <button
            type="button"
            className="btn-product btn-decrease"
            data-testid="product-decrease-quantity"
            onClick={ this.addOrDecreaseProduct }
          >
            -
          </button>
          <div className="number-products-cart" data-testid="shopping-cart-product-quantity">
            { numberProductsCart }
          </div>
          <button
            type="button"
            className="btn-product btn-add"
            data-testid="product-increase-quantity"
            onClick={ this.addOrDecreaseProduct }
          >
            +
          </button>
        </section>
        <section className="price-body">
          { `R$ ${price}` }
        </section>
      </div>
    );
  }
}

ProductCart.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCart;
