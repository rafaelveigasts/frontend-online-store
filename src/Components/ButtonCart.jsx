import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ButtonCart extends Component {
  render() {
    return (
      <div className="btn-cart">
        <Link to="/Cart">
          <button type="button" data-testid="shopping-cart-button">
            Carrinho
          </button>
        </Link>
      </div>
    );
  }
}

export default ButtonCart;
