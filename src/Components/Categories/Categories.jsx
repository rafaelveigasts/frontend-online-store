import React from 'react';
import PropTypes from 'prop-types';

export default function Categories(props) {
  const { categories } = props;
  if (categories.length === 0) {
    return null;
  }
  return (
    <aside>
      Categorias:
      <ul>
        {categories.map((category) => (
          <li data-testid="category" key={ category.id }>
            {category.name}
          </li>
        ))}
      </ul>
    </aside>
  );
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(),
}.isRequired;
