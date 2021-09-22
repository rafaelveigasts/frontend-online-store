import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import './productCart.css';

class ProductCart extends Component {
  constructor(props) {
    super(props);

    // this.addOrDecreaseProduct = this.addOrDecreaseProduct.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.rmProduct = this.rmProduct.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.multiplyPrice = this.multiplyPrice.bind(this);
    this.state = {
      numberProductsCart: 1,
      totalPrice: 0,
    };
  }

  componentDidMount() {
    this.handlePrice();
  }

  handlePrice() {
    const {
      product: { price },
    } = this.props;
    this.setState({ totalPrice: price });
  }

  addProduct(event) {
    const { numberProductsCart } = this.state;
    this.setState(
      (_prevState) => ({
        numberProductsCart: _prevState.numberProductsCart + 1,
      }),
      () => {
        this.multiplyPrice();
      },
    );
  }

  rmProduct(event) {
    const { numberProductsCart } = this.state;
    this.setState(
      (_prevState) => ({
        numberProductsCart: _prevState.numberProductsCart - 1,
      }),
      () => {
        if (numberProductsCart <= 0) return this.setState({ numberProductsCart: 0 });
        this.multiplyPrice();
      },
    );
  }

  // addOrDecreaseProduct({ target }) {
  //   const { numberProductsCart } = this.state;
  //   if (target.innerText === '-') {
  //     this.setState((_prevState) => (
  //       { numberProductsCart: _prevState.numberProductsCart - 1 }
  //     ),
  //     () => {
  //       if (numberProductsCart <= 0) return this.setState({ numberProductsCart: 0 });
  //       this.multiplyPrice();
  //     });
  //   } else {
  //     this.setState((_prevState) => (
  //       { numberProductsCart: _prevState.numberProductsCart + 1 }
  //     ), () => {
  //       this.multiplyPrice();
  //     });
  //   }
  // }

  multiplyPrice() {
    const { numberProductsCart } = this.state;
    const {
      product: { price },
    } = this.props;
    this.setState({ totalPrice: numberProductsCart * price });
  }

  render() {
    const {
      props: { product, removeProduct },
      state: { numberProductsCart, totalPrice },
    } = this;
    const { title, thumbnail, id } = product;
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
          <img
            width="150px"
            src={ thumbnail }
            alt={ `Imagem do produto ${title}` }
          />
        </section>
        <section className="product-name">
          <p data-testid="shopping-cart-product-name">{title}</p>
        </section>
        <section className="add-product-body">
          <button
            type="button"
            className="btn-product btn-decrease"
            data-testid="product-decrease-quantity"
            onClick={ this.rmProduct }
          >
            -
          </button>
          <p
            className="number-products-cart"
            data-testid="shopping-cart-product-quantity"
          >
            {numberProductsCart}
          </p>
          <button
            type="button"
            className="btn-product btn-add"
            data-testid="product-increase-quantity"
            onClick={ this.addProduct }
          >
            +
          </button>
        </section>
        <section className="price-body">{`R$ ${totalPrice}`}</section>
      </div>
    );
  }
}

ProductCart.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  removeProduct: PropTypes.func.isRequired,
};

export default ProductCart;
