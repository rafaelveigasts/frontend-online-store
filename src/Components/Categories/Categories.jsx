import React from 'react';
import PropTypes from 'prop-types';

export default function Categories(props) {
  const {
    state: { categories },
  } = props;
  if (categories) {
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
}

Categories.propTypes = {
  state: PropTypes.shape({
    categories: PropTypes.string,
  }).isRequired,
};
