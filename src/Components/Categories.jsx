import React from 'react';
import { getCategories } from '../services/api';

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
    return (
      <aside>
        {listAll.map((id) => <Category key={ id.id } id={ id.id } name={ id.name } />)}
      </aside>
    );
  }
}

export default Categories;
