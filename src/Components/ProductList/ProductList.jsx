import React from 'react';
import PropTypes from 'prop-types';
import SearchInput from '../SearchInput/SearchInput';

class ProductList extends React.Component {
  render() {
    const { handleChange, query, handleSubmit } = this.props;

    return (
      <div>
        <SearchInput
          handleChange={ handleChange }
          query={ query }
          handleSubmit={ handleSubmit }
        />
      </div>
    );
  }
}

export default ProductList;

ProductList.propTypes = {
  handleChange: PropTypes.func,
}.isRequired;
