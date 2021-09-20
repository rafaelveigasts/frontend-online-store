import React from 'react';
import { getCategories } from '../services/api';
import Category from './Category';

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      listAll: null,
    };
    this.handleApi = this.handleApi.bind(this);
  }

  async componentDidMount() {
    const allCategories = await getCategories();
    this.handleApi(allCategories);
  }

  handleApi(result) {
    const { listAll } = this.state;
    this.setState({
      listAll: result.PromiseResult });
  }

  render() {
    const { listAll } = this.state;
    if (listAll === null) {
      return ('vazio');
    }
    return (
      <>
        Categorias:
        <ul>
          {listAll.map((id) => <Category key={ id.id } name={ id.name } />)}
        </ul>
      </>
    );
  }
}

export default Categories;
