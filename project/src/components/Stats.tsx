import React from 'react';
import { iconCollection } from '../icons/iconData';
import { Terminal, Code, Zap, TrendingUp } from 'lucide-react';

interface StatsProps {
  filteredCount: number;
}

const Stats: React.FC<StatsProps> = ({ filteredCount }) => {
  const totalIcons = iconCollection.length;
  const totalCategories = new Set(iconCollection.map(icon => icon.category)).size;

  return (
    <div className="text-center mb-12">
      <div className="mb-8">
        <div className="flex justify-center items-center gap-3 mb-4">
          <Terminal className="w-8 h-8 text-green-400" />
          <h1 className="text-5xl font-bold text-green-400 font-mono tracking-wider">
            ELITE KAMRUL ICON LIBRARY
          </h1>
          <Code className="w-8 h-8 text-green-400" />
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-6"></div>
      </div>
      
      <p className="text-xl text-green-300 mb-8 max-w-3xl mx-auto font-mono leading-relaxed">
        <span className="text-green-400">&gt;</span> Elite collection of colorful SVG icons for developers and hackers
        <br />
        <span className="text-green-400">&gt;</span> Instant API access with copy functionality and direct CDN links
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
        <div className="bg-gray-900/50 border border-green-500/30 rounded-lg p-6 hover:border-green-400/50 hover:bg-gray-800/50 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 cursor-default group">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="text-4xl font-bold text-green-400 font-mono">{totalIcons.toLocaleString()}</div>
            <TrendingUp className="w-6 h-6 text-green-500 group-hover:text-green-300 group-hover:scale-110 transition-all duration-300" />
          </div>
          <div className="text-sm text-green-300/70 font-mono uppercase tracking-wider hover:text-green-300 transition-colors duration-300">Total Icons</div>
          <div className="text-xs text-green-500/50 font-mono mt-1">Auto-Updated</div>
        </div>
        <div className="bg-gray-900/50 border border-green-500/30 rounded-lg p-6 hover:border-green-400/50 hover:bg-gray-800/50 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 cursor-default group">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="text-4xl font-bold text-green-400 font-mono">{totalCategories}</div>
            <Code className="w-6 h-6 text-green-500 group-hover:text-green-300 group-hover:scale-110 transition-all duration-300" />
          </div>
          <div className="text-sm text-green-300/70 font-mono uppercase tracking-wider hover:text-green-300 transition-colors duration-300">Categories</div>
          <div className="text-xs text-green-500/50 font-mono mt-1">Dynamic Count</div>
        </div>
        <div className="bg-gray-900/50 border border-green-500/30 rounded-lg p-6 hover:border-green-400/50 hover:bg-gray-800/50 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 cursor-default group">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="text-4xl font-bold text-green-400 font-mono">{filteredCount.toLocaleString()}</div>
            <Zap className="w-6 h-6 text-green-500 group-hover:text-green-300 group-hover:scale-110 transition-all duration-300" />
          </div>
          <div className="text-sm text-green-300/70 font-mono uppercase tracking-wider hover:text-green-300 transition-colors duration-300">Showing</div>
          <div className="text-xs text-green-500/50 font-mono mt-1">Live Filter</div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-2 text-green-300 font-mono hover:text-green-200 transition-colors duration-300 cursor-default">
        <Terminal className="w-5 h-5 text-green-400 hover:text-green-300 hover:scale-110 transition-all duration-300" />
        <span>Auto-counting • Ready for production • API-style URLs • Instant copy</span>
      </div>
      <div className="text-sm text-green-300/70 font-mono uppercase tracking-wider hover:text-green-300 transition-colors duration-300 cursor-default">
        Elite Icons • Currently {totalIcons.toLocaleString()}+ and growing
      </div>
    </div>
  );
};

export default Stats;