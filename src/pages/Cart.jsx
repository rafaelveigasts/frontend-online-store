import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductCart from '../Components/ProductCart/ProductCart';

const objProducts = [
  {
    accepts_mercadopago: true,
    address: {
      state_id: 'BR-SP', state_name: 'São Paulo', city_id: 'BR-SP-09', city_name: 'Franca' },
    available_quantity: 500,
    buying_mode: 'buy_it_now',
    catalog_product_id: null,
    category_id: 'MLB188065',
    condition: 'new',
    currency_id: 'BRL',
    domain_id: 'MLB-PANTS',
    id: 'MLB1521164798',
    installments: { quantity: 12, amount: 15.88, rate: 14.43, currency_id: 'BRL' },
    listing_type_id: 'gold_special',
    match_score: null,
    offer_score: null,
    offer_share: null,
    official_store_id: null,
    order_backend: 1,
    original_price: 184.99,
    permalink: 'https://produto.mercadolivre.com.br/MLB-1521164798-4-calcas-jeans-feminina-cintura-alta-com-lycra-barata-_JM',
    price: 166.49,
    shipping: { free_shipping: true, mode: 'me2', tags: Array(1), logistic_type: 'cross_docking', store_pick_up: false },
    site_id: 'MLB',
    sold_quantity: 5000,
    stop_time: '2041-05-27T02:21:43.000Z',
    tags: (9)['good_quality_thumbnail', 'loyalty_discount_eligible', 'brand_verified', 'deal_of_the_day', 'good_quality_picture', 'immediate_payment', 'cart_eligible', 'best_seller_candidate', 'shipping_guaranteed'],
    thumbnail: 'http://http2.mlstatic.com/D_989005-MLB47534335418_092021-O.jpg',
    thumbnail_id: '989005-MLB47534335418_092021',
    title: '4 Calças Jeans Feminina Cintura Alta Com Lycra - Barata',
    use_thumbnail_id: false,
  },
  {
    accepts_mercadopago: true,
    address: {
      state_id: 'BR-SP', state_name: 'São Paulo', city_id: 'BR-SP-09', city_name: 'Franca' },
    available_quantity: 500,
    buying_mode: 'buy_it_now',
    catalog_product_id: null,
    category_id: 'MLB188065',
    condition: 'new',
    currency_id: 'BRL',
    domain_id: 'MLB-PANTS',
    id: 'MLB1521164798',
    installments: { quantity: 12, amount: 15.88, rate: 14.43, currency_id: 'BRL' },
    listing_type_id: 'gold_special',
    match_score: null,
    offer_score: null,
    offer_share: null,
    official_store_id: null,
    order_backend: 1,
    original_price: 184.99,
    permalink: 'https://produto.mercadolivre.com.br/MLB-1521164798-4-calcas-jeans-feminina-cintura-alta-com-lycra-barata-_JM',
    price: 166.49,
    shipping: { free_shipping: true, mode: 'me2', tags: Array(1), logistic_type: 'cross_docking', store_pick_up: false },
    site_id: 'MLB',
    sold_quantity: 5000,
    stop_time: '2041-05-27T02:21:43.000Z',
    tags: (9)['good_quality_thumbnail', 'loyalty_discount_eligible', 'brand_verified', 'deal_of_the_day', 'good_quality_picture', 'immediate_payment', 'cart_eligible', 'best_seller_candidate', 'shipping_guaranteed'],
    thumbnail: 'http://http2.mlstatic.com/D_989005-MLB47534335418_092021-O.jpg',
    thumbnail_id: '989005-MLB47534335418_092021',
    title: '4 Calças Jeans Feminina Cintura Alta Com Lycra - Barata',
    use_thumbnail_id: false,
  },
];

class Cart extends Component {
  constructor() {
    super();

    this.state = {
      totalPrice: 0,
    };
  }

  componentDidMount() {
    console.log(this.recoveryTotalPrice());
  }

  recoveryTotalPrice() {
    const totalPrice = objProducts.reduce((acc, product) => {
      acc += product.price;
      return acc;
    }, 0);

    this.setState({ totalPrice });
  }

  mapProducts() {
    /* const products = localStorage.getItem('products'); */
    return objProducts.map((product, index) => (
      <ProductCart key={ index } product={ product } />
    ));
  }

  render() {
    const emptyCartMessage = (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    );
    const { totalPrice } = this.state;
    return (
      <main className="shopping-cart-page">
        <header className="header-cart">
          <Link to="/">
            Voltar
          </Link>
          <h1>Carrinho de Compras</h1>
        </header>
        <section className="products">
          { objProducts.length === 0 ? emptyCartMessage : this.mapProducts() }
        </section>
        <section className="total-price">
          <p>
            Valor total da compra:
            <span>
              {' '}
              { totalPrice }
              {' '}
            </span>
          </p>
        </section>
        <button type="button"> Finalizar Compra </button>
      </main>
    );
  }
}

export default Cart;
