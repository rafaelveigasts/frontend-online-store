import React, { Component } from 'react';
import ProductCard from '../Components/ProductCard/ProductCard';
import ProductList from '../Components/ProductList/ProductList';
import ProductNotFound from '../Components/ProductNotFound/ProductNotFound';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Categories from '../Components/Categories';
import ButtonCart from '../Components/ButtonCart';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      category: '',
      products: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.fetchCategory = this.fetchCategory.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.fetchCategory();
  }

  async fetchCategory() {
    const { query, category } = this.state;
    const products = await getProductsFromCategoryAndQuery(category, query);
    this.setState({
      products: products.results,
      query: '',
    });
  }

  renderProducts() {
    const { products } = this.state;
    return products.map((product) => (
      <ProductCard key={ product.id } product={ product } />
    ));
  }

  render() {
    const { query, products } = this.state;
    return (
      <main>
        <aside>
          <Categories />
        </aside>
        <div className="input-form">
          <ProductList
            handleChange={ this.handleChange }
            query={ query }
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
