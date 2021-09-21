import React, { Component } from 'react';
import ProductCard from '../Components/ProductCard/ProductCard';
import SearchInput from '../Components/SearchInput/SearchInput';
import ProductNotFound from '../Components/ProductNotFound/ProductNotFound';
import {
  getCategories,
  getProductsFromCategoryAndQuery,
} from '../services/api';
import Categories from '../Components/Categories';
import ButtonCart from '../Components/ButtonCart';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      categories: [],
      products: [],
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
    const { query, categories } = this.state;
    const products = await getProductsFromCategoryAndQuery(categories, query);
    this.setState(() => ({
      products: products.results,
      query: '',
    }));
  }

  renderProducts() {
    const { products } = this.state;
    return products.map((product) => (
      <ProductCard key={ product.id } product={ product } />
    ));
  }

  render() {
    const { products } = this.state;
    return (
      <main>
        <Categories state={ this.state } />
        <div className="input-form">
          <SearchInput
            handleChange={ this.handleChange }
            state={ this.state }
            handleSubmit={ this.handleSubmit }
          />
          <ButtonCart />
        </div>
        <div>
          {products !== [] ? this.renderProducts() : <ProductNotFound />}
        </div>
      </main>
    );
  }
}

export default Home;
