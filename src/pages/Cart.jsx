import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingCart: [],
    };
    this.importFromStorage = this.importFromStorage.bind(this);
  }

  componentDidMount() {
    this.importFromStorage();
  }

  importFromStorage() {
    const shoppingCart = JSON.parse(localStorage.getItem('cart'));
    this.setState({
      shoppingCart,
    });
  }

  render() {
    const { shoppingCart } = this.state;
    return (
      <section className="shopping-cart-page">
        <ul>
          { shoppingCart.map((item) => (
            <li key={ item.id }>
              <p data-testid="shopping-cart-product-name">
                { item.title }
              </p>
            </li>
          ))}
        </ul>
        <Link to="/">
          Voltar
        </Link>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </section>
    );
  }
}

export default Cart;
