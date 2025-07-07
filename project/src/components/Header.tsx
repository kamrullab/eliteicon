import React from 'react';
import { Terminal, Github, Star, Zap } from 'lucide-react';
import { iconCollection } from '../icons/iconData';

const Header: React.FC = () => {
  const totalIcons = iconCollection.length;
  
  return (
    <header className="bg-black border-b border-green-500/30 sticky top-0 z-40 backdrop-blur-sm bg-black/90 hover:border-green-400/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform duration-300">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center shadow-lg shadow-green-500/25 hover:shadow-green-400/40 hover:from-green-300 hover:to-green-500 transition-all duration-300">
              <Terminal className="w-6 h-6 text-black" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-green-400 font-mono tracking-wider hover:text-green-300 transition-colors duration-300">ELITEICON</h1>
              <p className="text-xs text-green-300/70 font-mono hover:text-green-300/90 transition-colors duration-300">Elite Kamrul Icon Library</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-green-300 font-mono hover:text-green-200 transition-colors duration-300 cursor-default">
              <Zap className="w-4 h-4 text-green-400 hover:text-green-300 transition-colors duration-300" />
              <span className="hidden sm:inline">{totalIcons.toLocaleString()}+ Elite Icons</span>
              <span className="sm:hidden">{totalIcons.toLocaleString()}+</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-green-300 font-mono hover:text-green-200 transition-colors duration-300 cursor-default">
              <Star className="w-4 h-4 text-yellow-400 fill-current hover:text-yellow-300 hover:scale-110 transition-all duration-300" />
              <button 
                onClick={() => document.getElementById('api-documentation')?.scrollIntoView({ behavior: 'smooth' })}
                className="hidden sm:inline hover:text-green-200 hover:underline hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                Free API - Full Docs
              </button>
            </div>
            <a 
              href="https://github.com/kamrullab/eliteicon" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-black rounded-lg hover:bg-green-500 hover:scale-105 active:scale-95 transition-all duration-300 font-mono font-semibold shadow-lg shadow-green-600/25 hover:shadow-green-500/40 hover:shadow-xl"
            >
              <Github className="w-4 h-4 hover:rotate-12 transition-transform duration-300" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;