import React from 'react';
import PropTypes from 'prop-types';

export default function SearchInput(props) {
  const {
    state: { query, products },
    handleChange,
    handleSubmit,
  } = props;
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
      {products.length === 0 && (
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      )}
    </form>
  );
}

SearchInput.propTypes = {
  state: PropTypes.shape({
    query: PropTypes.string,
    products: PropTypes.arrayOf(),
  }),
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
}.isRequired;
