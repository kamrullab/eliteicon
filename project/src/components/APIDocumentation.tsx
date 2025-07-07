import React, { useState } from 'react';
import { Code, Copy, ExternalLink, Terminal, Zap, Shield } from 'lucide-react';

const APIDocumentation: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('basic');
  
  const baseUrl = 'https://eliteicon.pages.dev';
  
  const basicExample = `// Direct link usage
<img src="${baseUrl}/api/icons/terminal.svg" alt="Terminal" width="32" height="32" />

// Fetch SVG content
fetch('${baseUrl}/api/icons/terminal.svg')
  .then(response => response.text())
  .then(svg => {
    document.getElementById('icon-container').innerHTML = svg;
  });

// React component usage
const Icon = ({ name, size = 24 }) => (
  <img 
    src={\`${baseUrl}/api/icons/\${name}.svg\`}
    alt={name}
    width={size}
    height={size}
  />
);`;

  const jsLibraryExample = `// Include the EliteIcon library
<script src="${baseUrl}/api/eliteicon.js"></script>

// Initialize EliteIcon
const eliteIcon = new EliteIcon();

// Method 1: Auto-replace with data attributes
<div data-icon="terminal" data-size="32" data-color="#00ff41"></div>

// Method 2: Programmatic insertion
eliteIcon.insertIcon('#my-container', 'terminal', {
  size: 32,
  color: '#00ff41',
  className: 'my-icon-class'
});

// Method 3: Get SVG content
const svgContent = await eliteIcon.getIconSvg('terminal');

// Method 4: Search icons
const searchResults = await eliteIcon.searchIcons('code');

// Method 5: Get icons by category
const devIcons = await eliteIcon.getIconsByCategory('Developer');

// Method 6: Preload icons for better performance
await eliteIcon.preloadIcons(['terminal', 'code-editor', 'git-branch']);`;

  const apiEndpoints = `// GET: Get all icons metadata
fetch('${baseUrl}/api/icons.json')
  .then(response => response.json())
  .then(icons => console.log(icons));

// GET: Individual icon SVG
fetch('${baseUrl}/api/icons/terminal.svg')
  .then(response => response.text())
  .then(svg => console.log(svg));

// Response format for icons.json:
[
  {
    "id": "terminal",
    "name": "Terminal", 
    "category": "Developer",
    "color": "#00ff41",
    "tags": ["console", "command", "cli"]
  }
]`;

  const npmExample = `// Install via NPM (coming soon)
npm install eliteicon

// ES6 Import
import EliteIcon from 'eliteicon';

// CommonJS
const EliteIcon = require('eliteicon');

// Use in your project
const eliteIcon = new EliteIcon();`;

  const handleCopy = () => {
    const codeMap = {
      basic: basicExample,
      library: jsLibraryExample,
      api: apiEndpoints,
      npm: npmExample
    };
    navigator.clipboard.writeText(codeMap[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="api-documentation" className="bg-gray-900/30 py-16 border-t border-green-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Terminal className="w-8 h-8 text-green-400" />
            <h2 className="text-3xl font-bold text-green-400 font-mono tracking-wider">FREE API DOCUMENTATION</h2>
          </div>
          <p className="text-xl text-green-300 font-mono">Complete integration guide for developers</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-900/50 rounded-lg p-6 border border-green-500/30 hover:border-green-400/50 hover:bg-gray-800/50 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 cursor-default">
            <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mb-4 border border-green-500/30 hover:border-green-400/50 hover:bg-green-600/30 transition-all duration-300">
              <Zap className="w-6 h-6 text-green-400 hover:text-green-300 hover:scale-110 transition-all duration-300" />
            </div>
            <h3 className="text-xl font-semibold text-green-300 mb-2 font-mono hover:text-green-200 transition-colors duration-300">FAST CDN</h3>
            <p className="text-green-400/70 font-mono text-sm hover:text-green-400/90 transition-colors duration-300">Global CDN delivery for instant icon loading worldwide with 99.9% uptime.</p>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-6 border border-green-500/30 hover:border-green-400/50 hover:bg-gray-800/50 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 cursor-default">
            <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mb-4 border border-green-500/30 hover:border-green-400/50 hover:bg-green-600/30 transition-all duration-300">
              <ExternalLink className="w-6 h-6 text-green-400 hover:text-green-300 hover:scale-110 transition-all duration-300" />
            </div>
            <h3 className="text-xl font-semibold text-green-300 mb-2 font-mono hover:text-green-200 transition-colors duration-300">DIRECT LINKS</h3>
            <p className="text-green-400/70 font-mono text-sm hover:text-green-400/90 transition-colors duration-300">Use direct URLs to embed icons anywhere on the web without downloads.</p>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-6 border border-green-500/30 hover:border-green-400/50 hover:bg-gray-800/50 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 cursor-default">
            <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mb-4 border border-green-500/30 hover:border-green-400/50 hover:bg-green-600/30 transition-all duration-300">
              <Shield className="w-6 h-6 text-green-400 hover:text-green-300 hover:scale-110 transition-all duration-300" />
            </div>
            <h3 className="text-xl font-semibold text-green-300 mb-2 font-mono hover:text-green-200 transition-colors duration-300">FREE ACCESS</h3>
            <p className="text-green-400/70 font-mono text-sm hover:text-green-400/90 transition-colors duration-300">No API keys, no registration required. Just copy and use instantly.</p>
          </div>
        </div>

        <div className="bg-gray-900/50 rounded-lg p-8 border border-green-500/30 hover:border-green-400/50 hover:bg-gray-800/30 transition-all duration-300">
          <div className="flex items-center justify-between mb-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
              <h3 className="text-xl font-semibold text-green-300 flex items-center gap-2 font-mono hover:text-green-200 transition-colors duration-300">
                <Code className="w-5 h-5 hover:scale-110 transition-transform duration-300" />
                INTEGRATION EXAMPLES
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'basic', label: 'BASIC' },
                  { id: 'library', label: 'JS LIBRARY' },
                  { id: 'api', label: 'REST API' },
                  { id: 'npm', label: 'NPM' }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-2 py-1 text-xs font-mono rounded transition-all hover:scale-105 active:scale-95 ${
                      activeTab === tab.id
                        ? 'bg-green-600 text-black hover:bg-green-500 shadow-lg shadow-green-600/25'
                        : 'bg-gray-800/50 text-green-300 hover:bg-gray-700/50 hover:text-green-200 hover:shadow-lg hover:shadow-green-500/10'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 px-2 py-1 bg-green-600 text-black rounded hover:bg-green-500 hover:scale-105 active:scale-95 transition-all duration-300 font-mono font-semibold shadow-lg shadow-green-600/25 hover:shadow-green-500/40 text-xs mt-4 sm:mt-0 w-full sm:w-auto justify-center min-h-[24px]"
            >
              <Copy className="w-2 h-2 hover:rotate-12 transition-transform duration-300" />
              {copied ? 'COPIED!' : 'COPY CODE'}
            </button>
          </div>
          
          <div className="bg-black rounded-lg p-6 overflow-x-auto border border-green-500/30 hover:border-green-400/50 transition-all duration-300">
            <pre className="text-green-400 text-xs sm:text-sm leading-relaxed font-mono">
              <code>
                {activeTab === 'basic' && basicExample}
                {activeTab === 'library' && jsLibraryExample}
                {activeTab === 'api' && apiEndpoints}
                {activeTab === 'npm' && npmExample}
              </code>
            </pre>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-green-300 mb-2 font-mono text-sm hover:text-green-200 transition-colors duration-300">URL PATTERN</h4>
              <code className="bg-gray-800/50 px-2 py-2 rounded text-xs sm:text-sm text-green-400 block font-mono border border-green-500/30 hover:border-green-400/50 hover:bg-gray-700/50 transition-all duration-300 break-all cursor-text">
                eliteicon.pages.dev/api/icons/[icon-id].svg
              </code>
            </div>
            <div>
              <h4 className="font-semibold text-green-300 mb-2 font-mono text-sm hover:text-green-200 transition-colors duration-300">LIBRARY CDN</h4>
              <code className="bg-gray-800/50 px-2 py-2 rounded text-xs sm:text-sm text-green-400 block font-mono border border-green-500/30 hover:border-green-400/50 hover:bg-gray-700/50 transition-all duration-300 break-all cursor-text">
                {baseUrl}/api/eliteicon.js
              </code>
            </div>
            <div>
              <h4 className="font-semibold text-green-300 mb-2 font-mono text-sm hover:text-green-200 transition-colors duration-300">CONTENT TYPE</h4>
              <code className="bg-gray-800/50 px-2 py-2 rounded text-xs sm:text-sm text-green-400 block font-mono border border-green-500/30 hover:border-green-400/50 hover:bg-gray-700/50 transition-all duration-300 break-all cursor-text">
                image/svg+xml
              </code>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gray-800/30 rounded-lg border border-green-500/20 hover:border-green-400/40 hover:bg-gray-700/30 transition-all duration-300">
            <h4 className="font-semibold text-green-300 mb-4 font-mono flex items-center gap-2 hover:text-green-200 transition-colors duration-300">
              <Zap className="w-4 h-4 hover:scale-110 transition-transform duration-300" />
              QUICK START GUIDE
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h5 className="text-green-400 font-mono mb-2 hover:text-green-300 transition-colors duration-300">1. DIRECT USAGE</h5>
                <p className="text-green-300/70 font-mono hover:text-green-300/90 transition-colors duration-300">Use direct URLs in img tags or fetch SVG content for dynamic insertion into your projects.</p>
              </div>
              <div>
                <h5 className="text-green-400 font-mono mb-2 hover:text-green-300 transition-colors duration-300">2. JAVASCRIPT LIBRARY</h5>
                <p className="text-green-300/70 font-mono hover:text-green-300/90 transition-colors duration-300">Include our lightweight JS library for advanced features like search, caching, and auto-replacement.</p>
              </div>
              <div>
                <h5 className="text-green-400 font-mono mb-2 hover:text-green-300 transition-colors duration-300">3. REST API</h5>
                <p className="text-green-300/70 font-mono hover:text-green-300/90 transition-colors duration-300">Access complete metadata and search functionality through our fast JSON API endpoints.</p>
              </div>
              <div>
                <h5 className="text-green-400 font-mono mb-2 hover:text-green-300 transition-colors duration-300">4. NPM PACKAGE</h5>
                <p className="text-green-300/70 font-mono hover:text-green-300/90 transition-colors duration-300">Coming soon! Install via NPM for seamless integration in your build process and workflows.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APIDocumentation;