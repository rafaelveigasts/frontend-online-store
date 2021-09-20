import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Cart extends Component {
  render() {
    return (
      <section className="shopping-cart-page">
        <Link to="/">
          Voltar
        </Link>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </section>
    );
  }
}

export default Cart;
