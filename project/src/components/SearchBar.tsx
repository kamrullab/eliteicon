import React from 'react';
import { Search, X, Terminal } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  onClear: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange, onClear }) => {
  return (
    <div className="relative max-w-md mx-auto mb-8 hover:scale-105 transition-transform duration-300">
      <div className="relative">
        <Terminal className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-400 w-5 h-5 hover:text-green-300 hover:scale-110 transition-all duration-300" />
        <input
          type="text"
          placeholder="Search elite icons..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-10 py-3 bg-gray-900/50 border border-green-500/30 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-green-400 hover:border-green-400/70 hover:bg-gray-800/50 outline-none transition-all text-green-300 placeholder-green-500/50 font-mono hover:shadow-lg hover:shadow-green-500/10"
        />
        {searchTerm && (
          <button
            onClick={onClear}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-400 hover:text-green-300 hover:scale-110 hover:rotate-90 transition-all duration-300"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-50 hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default SearchBar;