import React from 'react';

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
export default SearchInput;
