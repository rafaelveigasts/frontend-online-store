import React from 'react';
import PropTypes from 'prop-types';

export default function Categories(props) {
  const { categories, handleChange } = props;
  if (categories.length === 0) {
    return null;
  }
  return (
    <div
      className="fixed z-40 inset-0 flex-none h-full bg-black bg-opacity-25
    w-full lg:bg-white lg:static lg:h-auto lg:overflow-y-visible
    g:pt-0 lg:w-60 xl:w-72 lg:block hidden"
    >
      <div
        className="h-full overflow-y-auto scrolling-touch lg:h-auto lg:block
      lg:relative lg:sticky lg:bg-transparent overflow-hidden
      lg:top-18 bg-white mr-24 lg:mr-0"
      >
        <aside
          className="px-1 pt-6 overflow-y-auto font-medium text-base sm:px-3
        xl:px-5 lg:text-sm pb-10 lg:pt-10 lg:pb-14 sticky?lg:h-(screen-18)"
        >
          <h5
            className="text-gray-900 uppercase tracking-wide
          font-semibold mb-3 text-sm lg:text-xs"
          >
            Categorias:
          </h5>
          <ul>
            {categories.map((category) => (
              <li key={ category.id }>
                <input
                  className="bg-transparent hover:bg-pink-500 text-pink-700
                  font-semibold hover:text-white py-2 px-4 hover:border-transparent
                  rounded w-64 text-left"
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
      </div>
    </div>
  );
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(),
  handleChange: PropTypes.func,
}.isRequired;
