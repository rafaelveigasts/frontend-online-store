import React from 'react';
import PropTypes from 'prop-types';
import Category from './Category';

export default function Categories(props) {
  const {
    state: { categories },
  } = props;
  return (
    <aside>
      Categorias:
      <ul>
        {categories === []
          ? null
          : categories.map((id) => <Category key={ id.id } name={ id.name } />)}
      </ul>
    </aside>
  );
}

Categories.propTypes = {
  state: PropTypes.shape({
    categories: PropTypes.string,
  }).isRequired,
};
