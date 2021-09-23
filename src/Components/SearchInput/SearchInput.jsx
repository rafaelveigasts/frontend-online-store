import React from 'react';
import PropTypes from 'prop-types';
import { SearchIcon } from '@heroicons/react/solid';

export default function SearchInput(props) {
  const {
    query,
    handleChange,
    handleSubmit,
  } = props;
  return (
    <form className="w-full max-w-sm" onSubmit={ handleSubmit }>
      <div className="flex items-center border-b border-teal-500 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full
            text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          name="query"
          value={ query }
          placeholder="Pesquisar produtos..."
          onChange={ handleChange }
          data-testid="query-input"
        />
        <button
          className="flex-shrink-0 border-transparent border-4 text-white
            hover:text-white text-sm py-1 px-2 rounded bg-pink-600"
          type="submit"
          data-testid="query-button"
        >
          <SearchIcon className="h-5 w-5 text-white-500" />
        </button>
      </div>
    </form>
  );
}

SearchInput.propTypes = {
  stateHome: PropTypes.shape({
    query: PropTypes.string,
    products: PropTypes.arrayOf(),
  }),
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
}.isRequired;
