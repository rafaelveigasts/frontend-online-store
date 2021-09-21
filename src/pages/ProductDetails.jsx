import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
    };
    this.retrieveFromLocalStorage = this.retrieveFromLocalStorage.bind(this);
  }

  componentDidMount() {
    this.retrieveFromLocalStorage();
  }

  retrieveFromLocalStorage() {
    const selectedProduct = localStorage.getItem('selectedProduct');
    const product = JSON.parse(selectedProduct);
    this.setState({ product });
    // aqui talves tenha que apagar o produto do local storage depois
  }

  render() {
    const {
      product: { title, thumbnail, price },
    } = this.state;
    return (
      <div>
        <p>{title}</p>
        <img width="100px" src={ thumbnail } alt={ title } />
        <p>
          {new Intl.NumberFormat('pr-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(price)}
        </p>
      </div>
    );
  }
}

export default ProductDetails;
