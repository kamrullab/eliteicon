/**
 * ELITEICON JavaScript Library
 * Easy integration for 1000+ elite SVG icons
 * Author: Kamrul
 * Repository: https://github.com/kamrullab/eliteicon
 */

class EliteIcon {
  constructor(options = {}) {
    this.baseUrl = options.baseUrl || 'https://eliteicon.pages.dev';
    this.defaultSize = options.defaultSize || 24;
    this.defaultColor = options.defaultColor || 'currentColor';
    this.cache = new Map();
  }

  /**
   * Get icon URL
   * @param {string} iconId - The icon identifier
   * @returns {string} - Direct URL to the SVG icon
   */
  getIconUrl(iconId) {
    return `${this.baseUrl}/api/icons/${iconId}.svg`;
  }

  /**
   * Fetch icon SVG content
   * @param {string} iconId - The icon identifier
   * @returns {Promise<string>} - SVG content as string
   */
  async getIconSvg(iconId) {
    if (this.cache.has(iconId)) {
      return this.cache.get(iconId);
    }

    try {
      const response = await fetch(this.getIconUrl(iconId));
      if (!response.ok) {
        throw new Error(`Icon '${iconId}' not found`);
      }
      const svgContent = await response.text();
      this.cache.set(iconId, svgContent);
      return svgContent;
    } catch (error) {
      console.error('EliteIcon Error:', error.message);
      return null;
    }
  }

  /**
   * Create an icon element
   * @param {string} iconId - The icon identifier
   * @param {Object} options - Icon options
   * @returns {HTMLElement} - Icon element
   */
  async createIcon(iconId, options = {}) {
    const {
      size = this.defaultSize,
      color = this.defaultColor,
      className = '',
      style = {}
    } = options;

    const svgContent = await this.getIconSvg(iconId);
    if (!svgContent) {
      return this.createErrorIcon(iconId, { size, className, style });
    }

    const wrapper = document.createElement('div');
    wrapper.innerHTML = svgContent;
    const svg = wrapper.firstElementChild;

    if (svg) {
      svg.setAttribute('width', size);
      svg.setAttribute('height', size);
      svg.style.color = color;
      svg.className = className;
      Object.assign(svg.style, style);
    }

    return svg;
  }

  /**
   * Insert icon into DOM element
   * @param {string|HTMLElement} target - Target element or selector
   * @param {string} iconId - The icon identifier
   * @param {Object} options - Icon options
   */
  async insertIcon(target, iconId, options = {}) {
    const element = typeof target === 'string' ? document.querySelector(target) : target;
    if (!element) {
      console.error('EliteIcon Error: Target element not found');
      return;
    }

    const icon = await this.createIcon(iconId, options);
    if (icon) {
      element.appendChild(icon);
    }
  }

  /**
   * Replace element content with icon
   * @param {string|HTMLElement} target - Target element or selector
   * @param {string} iconId - The icon identifier
   * @param {Object} options - Icon options
   */
  async replaceWithIcon(target, iconId, options = {}) {
    const element = typeof target === 'string' ? document.querySelector(target) : target;
    if (!element) {
      console.error('EliteIcon Error: Target element not found');
      return;
    }

    const icon = await this.createIcon(iconId, options);
    if (icon) {
      element.innerHTML = '';
      element.appendChild(icon);
    }
  }

  /**
   * Get all available icons metadata
   * @returns {Promise<Array>} - Array of icon metadata
   */
  async getAllIcons() {
    try {
      const response = await fetch(`${this.baseUrl}/api/icons.json`);
      if (!response.ok) {
        throw new Error('Failed to fetch icons metadata');
      }
      return await response.json();
    } catch (error) {
      console.error('EliteIcon Error:', error.message);
      return [];
    }
  }

  /**
   * Search icons by name or tags
   * @param {string} query - Search query
   * @returns {Promise<Array>} - Filtered icons array
   */
  async searchIcons(query) {
    const allIcons = await this.getAllIcons();
    const searchTerm = query.toLowerCase();
    
    return allIcons.filter(icon => 
      icon.name.toLowerCase().includes(searchTerm) ||
      icon.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
      icon.category.toLowerCase().includes(searchTerm)
    );
  }

  /**
   * Get icons by category
   * @param {string} category - Category name
   * @returns {Promise<Array>} - Icons in the category
   */
  async getIconsByCategory(category) {
    const allIcons = await this.getAllIcons();
    return allIcons.filter(icon => 
      icon.category.toLowerCase() === category.toLowerCase()
    );
  }

  /**
   * Preload icons for better performance
   * @param {Array<string>} iconIds - Array of icon IDs to preload
   */
  async preloadIcons(iconIds) {
    const promises = iconIds.map(iconId => this.getIconSvg(iconId));
    await Promise.all(promises);
  }

  /**
   * Create error icon when icon is not found
   * @private
   */
  createErrorIcon(iconId, options) {
    const { size, className, style } = options;
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('width', size);
    svg.setAttribute('height', size);
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '2');
    svg.className = className;
    Object.assign(svg.style, style);
    
    svg.innerHTML = `
      <circle cx="12" cy="12" r="10"/>
      <line x1="15" y1="9" x2="9" y2="15"/>
      <line x1="9" y1="9" x2="15" y2="15"/>
    `;
    
    console.warn(`EliteIcon: Icon '${iconId}' not found, showing error icon`);
    return svg;
  }

  /**
   * Auto-replace data-icon attributes in the DOM
   */
  autoReplace() {
    const elements = document.querySelectorAll('[data-icon]');
    elements.forEach(async (element) => {
      const iconId = element.getAttribute('data-icon');
      const size = element.getAttribute('data-size') || this.defaultSize;
      const color = element.getAttribute('data-color') || this.defaultColor;
      const className = element.getAttribute('data-class') || '';
      
      await this.replaceWithIcon(element, iconId, { size, color, className });
    });
  }
}

// Create global instance
window.EliteIcon = EliteIcon;

// Auto-initialize if DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    if (window.eliteIconAutoInit !== false) {
      const eliteIcon = new EliteIcon();
      eliteIcon.autoReplace();
    }
  });
} else {
  if (window.eliteIconAutoInit !== false) {
    const eliteIcon = new EliteIcon();
    eliteIcon.autoReplace();
  }
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = EliteIcon;
}

if (typeof define === 'function' && define.amd) {
  define([], function() {
    return EliteIcon;
  });
}