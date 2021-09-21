import React from 'react';
import PropTypes from 'prop-types';

export default function Categories(props) {
  const { categories, handleChange } = props;
  if (categories.length === 0) {
    return null;
  }
  return (
    <aside>
      Categorias:
      <ul>
        {categories.map((category) => (
          <li key={ category.id }>
            <input
              data-testid="category"
              name="selectedCategory"
              onClick={ handleChange }
              type="button"
              value={ category.name }
              id={ category.id }
            />
          </li>
        ))}
      </ul>
    </aside>
  );
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(),
  handleChange: PropTypes.func,
}.isRequired;
