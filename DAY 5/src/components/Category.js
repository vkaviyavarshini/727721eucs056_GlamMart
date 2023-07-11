import React from 'react';
import './Category.css';

const Category = ({ category }) => {
  return (
    <div className="category">
      <h2 className="category-title">Selected category:</h2>
      <h3>{category.name}</h3>
      <p>Number of Products: {category.count}</p>
    </div>
  );
};

export default Category;
