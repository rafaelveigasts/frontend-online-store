import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const {
      product: { title, thumbnail, price },
    } = this.props;
    return (
      <section data-testid="product">
        <p>{title}</p>
        <img src={ thumbnail } alt={ title } />
        <p>{price}</p>
      </section>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default ProductCard;
