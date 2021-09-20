import React from 'react';
import ButtonCart from '../Components/ButtonCart';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { value } }) {
    this.setState({ query: value });
  }

  render() {
    const { query } = this.state;
    return (
      <div>
        <div className="input-form">
          <input
            value={ query }
            onChange={ this.handleChange }
          />
          <ButtonCart />
        </div>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}
export default Home;
