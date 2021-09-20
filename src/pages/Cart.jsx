import React, { Component } from 'react';

class Cart extends Component {
  render() {
    return (
      <section className="shopping-cart-page">
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </section>
    );
  }
}

export default Cart;
