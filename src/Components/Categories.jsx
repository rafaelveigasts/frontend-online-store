import React from 'react';
import { getCategories } from '../services/api';
import Category from './Category';

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      listAll: [],
    };
    this.handleApi = this.handleApi.bind(this);
  }

  componentDidMount() {
    this.handleApi();
  }

  async handleApi() {
    const allCategories = await getCategories();
    this.setState({
      listAll: allCategories });
  }

  render() {
    const { listAll } = this.state;
    return (
      <>
        Categorias:
        <ul>
          {listAll === []
            ? null
            : listAll.map((id) => <Category key={ id.id } name={ id.name } />)}
        </ul>
      </>
    );
  }
}

export default Categories;
