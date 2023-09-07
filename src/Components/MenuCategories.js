import React from 'react';

function MenuCategories({ categories, filterMenu }) {
  return (
    <>
      {categories.map((category, index) => {
        return (
          <button
            className="filterButtons"
            type="button"
            key={index}
            onClick={() => filterMenu(category)}
          >
            {category}
          </button>
        );
      })}
    </>
  );
}

export default MenuCategories;
