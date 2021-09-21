import React from 'react';
import { Link } from 'react-router-dom';

export default function ButtonCart() {
  return (
    <div className="btn-cart">
      <Link to="/cart">
        <button type="button" data-testid="shopping-cart-button">
          Carrinho
        </button>
      </Link>
    </div>
  );
}
