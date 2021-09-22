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
import './home.css';

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
    const { products, categories, redirect } = this.state;
    if (redirect) {
      return <Redirect to="/product-details" />;
    }
    return (
      <div className="home-page">
        <header className="header-home-page">
          <div className="input-form">
            <SearchInput
              handleChange={ this.handleChange }
              stateHome={ this.state }
              handleSubmit={ this.handleSubmit }
            />
          </div>
          <ButtonCart />
        </header>
        <main className="main-content">
          <Categories
            categories={ categories }
            handleChange={ this.handleChange }
          />
          <section className="container-products">
            <ProductCard products={ products } handleClick={ this.handleClick } />
          </section>
        </main>
      </div>
    );
  }
}

export default Home;
