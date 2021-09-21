import React from 'react';
import PropTypes from 'prop-types';

class SearchInput extends React.Component {
  render() {
    const { query, handleChange, handleSubmit } = this.props;
    return (
      <form onSubmit={ handleSubmit }>
        <input
          name="query"
          value={ query }
          onChange={ handleChange }
          data-testid="query-input"
        />
        <button type="submit" data-testid="query-button">
          Pesquisar
        </button>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </form>
    );
  }
}

SearchInput.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  query: PropTypes.string,
}.isRequired;

export default SearchInput;
