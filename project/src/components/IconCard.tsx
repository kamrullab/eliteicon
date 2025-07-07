import React, { useState } from 'react';
import { Copy, ExternalLink, Code2, Terminal } from 'lucide-react';
import { IconData } from '../icons/iconData';

interface IconCardProps {
  icon: IconData;
  onCopy: (text: string, type: string) => void;
}

const IconCard: React.FC<IconCardProps> = ({ icon, onCopy }) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseUrl = 'https://eliteicon.pages.dev';
  const iconUrl = `${baseUrl}/api/icons/${icon.id}.svg`;
  const embedCode = `<img src="${iconUrl}" alt="${icon.name}" width="32" height="32" />`;

  const handleCopyLink = () => {
    onCopy(iconUrl, 'Link');
  };

  const handleCopySVG = () => {
    onCopy(icon.svg, 'SVG Code');
  };

  const handleCopyEmbed = () => {
    onCopy(embedCode, 'Embed Code');
  };

  return (
    <div 
      className="group relative bg-gray-900/30 rounded-lg border border-green-500/20 hover:border-green-400/50 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300 p-4 sm:p-6 backdrop-blur-sm icon-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon Display */}
      <div className="flex items-center justify-center mb-4 h-16 w-16 mx-auto bg-gray-800/50 rounded-lg group-hover:bg-gray-700/50 transition-all duration-300 border border-green-500/20 group-hover:border-green-400/40">
        <div 
          className="w-8 h-8 transition-all duration-300 group-hover:scale-110"
          style={{ color: icon.color }}
          dangerouslySetInnerHTML={{ __html: icon.svg }}
        />
      </div>

      {/* Icon Info */}
      <div className="text-center mb-4">
        <h3 className="font-semibold text-green-300 mb-2 font-mono">{icon.name}</h3>
        <span className="inline-block px-2 py-1 text-xs font-mono font-medium bg-gray-800/50 text-green-400 rounded border border-green-500/30">
          {icon.category}
        </span>
      </div>

      {/* Action Buttons */}
      <div className={`space-y-2 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
        <button
          onClick={handleCopyLink}
          className="w-full flex items-center justify-center gap-0.5 px-1 py-0.5 bg-green-600 text-black rounded hover:bg-green-500 hover:scale-105 active:scale-95 transition-all duration-300 text-xs font-mono font-semibold shadow-lg shadow-green-600/25 hover:shadow-green-500/40 h-5"
        >
          <Copy className="w-2.5 h-2.5" />
          COPY
        </button>
        
        <div className="flex gap-1">
          <button
            onClick={handleCopySVG}
            className="flex-1 flex items-center justify-center gap-0.5 px-1 py-0.5 bg-gray-800/50 text-green-300 rounded hover:bg-gray-700/50 hover:text-green-200 hover:scale-105 active:scale-95 transition-all duration-300 text-xs font-mono border border-green-500/30 hover:border-green-400/50 h-5"
          >
            <Code2 className="w-2.5 h-2.5" />
            SVG
          </button>
          
          <button
            onClick={handleCopyEmbed}
            className="flex-1 flex items-center justify-center gap-0.5 px-1 py-0.5 bg-gray-800/50 text-green-300 rounded hover:bg-gray-700/50 hover:text-green-200 hover:scale-105 active:scale-95 transition-all duration-300 text-xs font-mono border border-green-500/30 hover:border-green-400/50 h-5"
          >
            <Terminal className="w-2.5 h-2.5" />
            EMB
          </button>
        </div>
      </div>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-1">
        {icon.tags.slice(0, 3).map(tag => (
          <span key={tag} className="px-2 py-1 text-xs bg-gray-800/30 text-green-400/70 rounded font-mono border border-green-500/20">
            {tag}
          </span>
        ))}
      </div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-400/5 to-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};

export default IconCard;