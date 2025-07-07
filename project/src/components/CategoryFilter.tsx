import React from 'react';
import { iconCategories } from '../icons/iconData';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-2 justify-center">
        {iconCategories.map(category => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-lg text-sm font-mono font-medium transition-all duration-300 hover:scale-105 active:scale-95 ${
              selectedCategory === category
                ? 'bg-green-600 text-black shadow-lg shadow-green-600/25 transform scale-105 border border-green-400 hover:bg-green-500 hover:shadow-green-500/40'
                : 'bg-gray-900/50 text-green-300 border border-green-500/30 hover:bg-gray-800/70 hover:border-green-400/50 hover:text-green-200 hover:shadow-lg hover:shadow-green-500/10'
            }`}
          >
            {category === 'All' ? '> ALL' : category.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;