import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/solid';

export default function ButtonCart() {
  return (
    <div className="flex items-center space-x-6 sm:space-x-10 ml-6 sm:ml-10">
      <Link
        className="ttext-base leading-6 font-medium hover:text-gray-600
        transition-colors duration-200 py-2"
        to="/cart"
      >
        <button type="button" data-testid="shopping-cart-button">
          <ShoppingCartIcon className="h-9 w-9 text-pink-500 sm:inline" />
        </button>
      </Link>
    </div>
  );
}
