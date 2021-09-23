import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import ProductCard from '../Components/ProductCard/ProductCard';
import SearchInput from '../Components/SearchInput/SearchInput';
import {
  getCategories,
  getProductsFromCategoryAndQuery,
} from '../services/api';
import Categories from '../Components/Categories/Categories';
import ButtonCart from '../Components/ButtonCart/ButtonCart';
// import './home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      categories: [],
      products: [],
      selectedCategory: '',
      redirect: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
    this.fetchCategories = this.fetchCategories.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify([]));
      console.log('criou');
    }
    this.fetchCategories();
  }

  async handleChange(event) {
    const { name, type, value, id } = event.target;
    if (type === 'button') {
      this.setState({ [name]: id }, () => this.fetchProducts());
    } else {
      this.setState({ [name]: value });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.fetchProducts();
  }

  handleClick(product) {
    localStorage.setItem('selectedProduct', JSON.stringify(product));
    this.setState({ redirect: true });
  }

  async fetchCategories() {
    const categories = await getCategories();
    this.setState({ categories });
  }

  async fetchProducts() {
    const { query, selectedCategory } = this.state;
    const products = await getProductsFromCategoryAndQuery(
      selectedCategory,
      query,
    );
    this.setState({ products: products.results });
  }

  render() {
    const { products, categories, redirect, query } = this.state;
    if (redirect) {
      return <Redirect to="/product-details" />;
    }
    return (
      <div
        className="space-y-5 sm:space-y-8 md:space-y-10
      lg:space-y-11 overflow-hidden"
      >
        <header className="relative z-10 max-w-screen-lg xl:max-w-screen-xl mx-auto">
          <div
            className="border-b border-gray-200 py-4 flex items-center
          justify-between -mx-4 px-4 sm:mx-0 sm:px-0"
          >
            <SearchInput
              handleChange={ this.handleChange }
              query={ query }
              handleSubmit={ this.handleSubmit }
            />
            <ButtonCart />
          </div>
        </header>
        <main className="main-content">
          <Categories
            categories={ categories }
            handleChange={ this.handleChange }
          />
          <section className="container-products">
            {products.length === 0 && (
              <p
                className="mt-1 text-lg text-gray-500"
                data-testid="home-initial-message"
              >
                Digite algum termo de pesquisa ou escolha uma categoria.
              </p>
            )}
            <ProductCard products={ products } handleClick={ this.handleClick } />
          </section>
        </main>
      </div>
    );
  }
}

export default Home;
