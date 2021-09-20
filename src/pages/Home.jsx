import React from 'react';
import ProductList from '../Components/ProductList/ProductList';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      categoria: '',
      products: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.fetchCategory = this.fetchCategory.bind(this);
  }

  handleChange({ target: { value } }) {
    this.setState({ query: value });
  }

  handleSubmit(event) {
    const enterCode = event.code || event.key;
    if (enterCode === 'Enter') {
      this.fetchCategory();
    }
  }

  async fetchCategory() {
    const { query, categoria } = this.state;
    const products = await getProductsFromCategoryAndQuery(categoria, query);
    // this.setState({
    //   products,
    //   query: '',
    // });
    console.log(products);
  }

  render() {
    const { query } = this.state;
    return (
      <div>
        <ProductList
          handleChange={ this.handleChange }
          query={ query }
          handleSubmit={ this.handleSubmit }
        />
      </div>
    );
  }
}
export default Home;
