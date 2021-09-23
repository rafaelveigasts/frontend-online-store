import React from 'react';
import PropTypes from 'prop-types';

function addToStorage(selectedProduct) {
  let newCart = [];
  const cartList = JSON.parse(localStorage.getItem('cart'));
  if (cartList !== null) {
    newCart = [...cartList];
  }
  newCart.push(selectedProduct);
  localStorage.setItem('cart', JSON.stringify(newCart));
}

export default function AddToCart(props) {
  const { selectedProduct, dataTestId } = props;
  return (
    <button
      className="bg-green-500 hover:bg-green-700
      text-white font-bold py-2 px-4 rounded w-full"
      data-testid={ dataTestId }
      type="button"
      onClick={ () => {
        addToStorage(selectedProduct);
      } }
    >
      Add
    </button>
  );
}

AddToCart.propTypes = {
  selectedProduct: PropTypes.shape(),
}.isRequired;
