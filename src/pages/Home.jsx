import React, { Component } from 'react';
import ProductCard from '../Components/ProductCard/ProductCard';
import SearchInput from '../Components/SearchInput/SearchInput';
import {
  getCategories,
  getProductsFromCategoryAndQuery,
} from '../services/api';
import Categories from '../Components/Categories/Categories';
import ButtonCart from '../Components/ButtonCart/ButtonCart';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      categories: [],
      products: [],
      selectedCategory: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
    this.fetchCategories = this.fetchCategories.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState(() => ({ [name]: value }));
  }

  handleSubmit(event) {
    event.preventDefault();
    this.fetchProducts();
  }

  async fetchCategories() {
    const categories = await getCategories();
    this.setState(() => ({ categories }));
  }

  async fetchProducts() {
    const { query, selectedCategory } = this.state;
    const products = await getProductsFromCategoryAndQuery(selectedCategory, query);
    this.setState(() => ({
      products: products.results,
      query: '',
    }));
  }

  render() {
    const { products, categories } = this.state;
    return (
      <>
        <Categories categories={ categories } />
        <header>
          <div className="input-form">
            <SearchInput
              handleChange={ this.handleChange }
              stateHome={ this.state }
              handleSubmit={ this.handleSubmit }
            />
          </div>
          <ButtonCart />
        </header>
        <main>
          <ProductCard products={ products } />
        </main>
      </>
    );
  }
}

export default Home;
