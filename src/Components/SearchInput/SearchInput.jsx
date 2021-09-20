import React from 'react';
import PropTypes from 'prop-types';

class SearchInput extends React.Component {
  render() {
    const { query, handleChange, handleSubmit } = this.props;
    return (
      <div>
        <input
          value={ query }
          onChange={ handleChange }
          onKeyPress={ handleSubmit }
        />
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

SearchInput.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  query: PropTypes.string,
}.isRequired;

export default SearchInput;
