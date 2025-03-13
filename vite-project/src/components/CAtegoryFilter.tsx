import React from "react";
import './Style.css'

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex space-x-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelectedCategory(cat)}
          className={`px-4 py-2 rounded-lg border ${selectedCategory === cat ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
