import React from "react";

function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  function handleCategorySelect(category) {
    setSelectedCategory(category);
  }

  const categoryButtons = categories.map((category) => {
    const buttonClass = category === selectedCategory ? "selected" : "";
    return (
      <button
        key={category}
        className={buttonClass}
        onClick={() => handleCategorySelect(category)}
      >
        {category}
      </button>
    );
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* Render <button> elements for each category */}
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;