import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import IconCard from './components/IconCard';
import Stats from './components/Stats';
import APIDocumentation from './components/APIDocumentation';
import CopyNotification from './components/CopyNotification';
import iconCollection from './icons/iconData';
import { Terminal, Github } from 'lucide-react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [notification, setNotification] = useState({ show: false, message: '' });

  const filteredIcons = useMemo(() => {
    return iconCollection.filter(icon => {
      const matchesSearch = icon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           icon.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || icon.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const handleCopy = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setNotification({ show: true, message: type });
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Stats filteredCount={filteredIcons.length} />
        
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          onClear={handleClearSearch}
        />
        
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-16">
          {filteredIcons.map(icon => (
            <IconCard
              key={icon.id}
              icon={icon}
              onCopy={handleCopy}
            />
          ))}
        </div>
        
        {filteredIcons.length === 0 && (
          <div className="text-center py-16">
            <div className="text-green-400 text-6xl mb-4">
              <Terminal className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-green-300 mb-2 font-mono">NO ICONS FOUND</h3>
            <p className="text-green-400/70 font-mono">Try adjusting your search or category filter</p>
          </div>
        )}
      </main>

      <APIDocumentation />
      
      <footer className="bg-gray-900/50 text-green-300 py-12 border-t border-green-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center gap-3 mb-4 hover:scale-105 transition-transform duration-300 cursor-default">
              <Terminal className="w-6 h-6 text-green-400 hover:text-green-300 hover:scale-110 transition-all duration-300" />
              <h3 className="text-xl font-semibold font-mono text-green-400 hover:text-green-300 transition-colors duration-300">ELITEICON</h3>
            </div>
            <p className="text-green-400/70 mb-6 font-mono hover:text-green-400/90 transition-colors duration-300 cursor-default">Elite collection of 1000+ colorful SVG icons for modern development</p>
            <div className="flex justify-center gap-6 text-sm text-green-400/70 font-mono">
              <span className="hover:text-green-400 transition-colors duration-300 cursor-default">Built by <span className="text-green-400 font-semibold hover:text-green-300 transition-colors duration-300">Kamrul</span></span>
              <span>•</span>
              <a href="https://github.com/kamrullab/eliteicon" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-green-300 hover:scale-105 transition-all duration-300">
                <Github className="w-4 h-4 hover:rotate-12 transition-transform duration-300" />
                GitHub Repository
              </a>
              <span>•</span>
              <span className="hover:text-green-400 transition-colors duration-300 cursor-default">Free for commercial use</span>
            </div>
            <div className="mt-6 text-xs text-green-500/50 font-mono hover:text-green-500/70 transition-colors duration-300 cursor-default">
              Free API • No registration required • Production ready
            </div>
          </div>
        </div>
      </footer>

      <CopyNotification
        show={notification.show}
        message={notification.message}
        onHide={() => setNotification({ show: false, message: '' })}
      />
    </div>
  );
}

export default App;