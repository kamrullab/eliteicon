# 🚀 ELITEICON - Elite Kamrul Icon Library

<div align="center">

![ELITEICON Logo](https://eliteicon.pages.dev/api/icons/terminal.svg)

**Elite collection of 1000+ colorful SVG icons for developers and hackers**

[![Live Demo](https://img.shields.io/badge/Live-Demo-00ff41?style=for-the-badge&logo=vercel)](https://eliteicon.pages.dev/)
[![GitHub Stars](https://img.shields.io/github/stars/kamrullab/eliteicon?style=for-the-badge&logo=github&color=00ff41)](https://github.com/kamrullab/eliteicon)
[![License](https://img.shields.io/badge/License-MIT-00ff41?style=for-the-badge)](LICENSE)
[![API Status](https://img.shields.io/badge/API-Live-00ff41?style=for-the-badge&logo=api)](https://eliteicon.pages.dev/api/icons.json)

</div>

## 🎯 **Features**

- 🎨 **1000+ Elite Icons** - Colorful SVG icons for modern development
- ⚡ **Free API Access** - No registration required, instant access
- 🔗 **Direct CDN Links** - Use icons directly via URL
- 📱 **Fully Responsive** - Perfect on all devices
- 🎭 **Multiple Categories** - Developer, Hacker, Anime, Cartoon, and more
- 🔍 **Smart Search** - Find icons by name, category, or tags
- 📋 **Instant Copy** - One-click copy for URLs, SVG code, and embed code
- 🌐 **Production Ready** - Built for high-performance applications
- 📚 **JavaScript Library** - Easy integration with any framework
- 🎪 **Terminal UI** - Hacker-style dark theme interface

## 🚀 **Quick Start**

### **Method 1: Direct URL Usage**
```html
<!-- Use any icon directly -->
<img src="https://eliteicon.pages.dev/api/icons/terminal.svg" 
     alt="Terminal" width="32" height="32" />

<!-- React/JSX -->
<img src="https://eliteicon.pages.dev/api/icons/code-editor.svg" 
     alt="Code Editor" width={24} height={24} />
```

### **Method 2: JavaScript Library**
```html
<!-- Include the library -->
<script src="https://eliteicon.pages.dev/api/eliteicon.js"></script>

<!-- Auto-replace with data attributes -->
<div data-icon="terminal" data-size="32" data-color="#00ff41"></div>

<!-- Or use programmatically -->
<script>
const eliteIcon = new EliteIcon();
eliteIcon.insertIcon('#my-container', 'terminal', {
  size: 32,
  color: '#00ff41'
});
</script>
```

### **Method 3: Fetch SVG Content**
```javascript
// Fetch and use SVG content
fetch('https://eliteicon.pages.dev/api/icons/terminal.svg')
  .then(response => response.text())
  .then(svg => {
    document.getElementById('icon-container').innerHTML = svg;
  });
```

## 📚 **API Documentation**

### **Endpoints**

| Endpoint | Description | Example |
|----------|-------------|---------|
| `/api/icons/{id}.svg` | Get individual icon | `https://eliteicon.pages.dev/api/icons/terminal.svg` |
| `/api/icons.json` | Get all icons metadata | `https://eliteicon.pages.dev/api/icons.json` |
| `/api/eliteicon.js` | JavaScript library | `https://eliteicon.pages.dev/api/eliteicon.js` |

### **Icon Metadata Format**
```json
{
  "id": "terminal",
  "name": "Terminal",
  "category": "Developer",
  "color": "#00ff41",
  "tags": ["console", "command", "cli", "bash", "shell"]
}
```

## 🎨 **Categories**

- 💻 **Developer** - Terminal, Code Editor, Git, API, Docker
- 🔒 **Hacker** - Security, Encryption, Network, Penetration Testing
- 🎭 **Anime** - Characters, Swords, Magical Items, Japanese Culture
- 🎪 **Cartoon** - Cute Animals, Characters, Fun Elements
- 🏠 **UI Essentials** - Home, Settings, Navigation, Common UI
- 🌐 **Network** - WiFi, Internet, Connectivity, Protocols
- 🗄️ **Database** - Storage, SQL, NoSQL, Data Management
- ☁️ **Cloud** - Upload, Download, Sync, Remote Storage
- 📱 **Mobile** - Smartphones, Apps, Mobile Development
- 🎮 **Gaming** - Games, Controllers, Entertainment
- 📱 **Social** - Social Media, Communication, Sharing
- 🛒 **E-commerce** - Shopping, Payment, Business
- 🎵 **Media** - Audio, Video, Multimedia
- 💬 **Communication** - Chat, Email, Messaging
- 🔧 **Tools** - Utilities, Productivity, Development Tools
- 🐾 **Animals** - Wildlife, Pets, Nature
- 🍕 **Food** - Cuisine, Cooking, Restaurants
- 🌤️ **Weather** - Climate, Forecast, Conditions
- 🚗 **Transportation** - Vehicles, Travel, Logistics
- ⚽ **Sports** - Athletics, Games, Competition
- 📚 **Education** - Learning, School, Knowledge
- 🏥 **Medical** - Healthcare, Medicine, Wellness
- 💰 **Finance** - Money, Banking, Investment

## 🛠️ **JavaScript Library API**

### **Initialization**
```javascript
const eliteIcon = new EliteIcon({
  baseUrl: 'https://eliteicon.pages.dev', // Optional
  defaultSize: 24,                        // Optional
  defaultColor: 'currentColor'            // Optional
});
```

### **Methods**

#### **Get Icon URL**
```javascript
const url = eliteIcon.getIconUrl('terminal');
// Returns: https://eliteicon.pages.dev/api/icons/terminal.svg
```

#### **Get SVG Content**
```javascript
const svg = await eliteIcon.getIconSvg('terminal');
// Returns: SVG content as string
```

#### **Create Icon Element**
```javascript
const iconElement = await eliteIcon.createIcon('terminal', {
  size: 32,
  color: '#00ff41',
  className: 'my-icon',
  style: { margin: '10px' }
});
```

#### **Insert Icon**
```javascript
await eliteIcon.insertIcon('#container', 'terminal', {
  size: 24,
  color: '#00ff41'
});
```

#### **Replace Element with Icon**
```javascript
await eliteIcon.replaceWithIcon('.icon-placeholder', 'terminal');
```

#### **Search Icons**
```javascript
const results = await eliteIcon.searchIcons('code');
// Returns array of matching icons
```

#### **Get Icons by Category**
```javascript
const devIcons = await eliteIcon.getIconsByCategory('Developer');
// Returns all developer icons
```

#### **Preload Icons**
```javascript
await eliteIcon.preloadIcons(['terminal', 'code-editor', 'git-branch']);
// Preloads icons for better performance
```

#### **Auto-Replace**
```javascript
eliteIcon.autoReplace();
// Automatically replaces all elements with data-icon attributes
```

## 🎯 **Usage Examples**

### **React Component**
```jsx
import React from 'react';

const Icon = ({ name, size = 24, color = 'currentColor' }) => (
  <img 
    src={`https://eliteicon.pages.dev/api/icons/${name}.svg`}
    alt={name}
    width={size}
    height={size}
    style={{ color }}
  />
);

// Usage
<Icon name="terminal" size={32} color="#00ff41" />
```

### **Vue Component**
```vue
<template>
  <img 
    :src="`https://eliteicon.pages.dev/api/icons/${name}.svg`"
    :alt="name"
    :width="size"
    :height="size"
    :style="{ color }"
  />
</template>

<script>
export default {
  props: {
    name: String,
    size: { type: Number, default: 24 },
    color: { type: String, default: 'currentColor' }
  }
}
</script>
```

### **Angular Component**
```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'elite-icon',
  template: `
    <img 
      [src]="iconUrl"
      [alt]="name"
      [width]="size"
      [height]="size"
      [style.color]="color"
    />
  `
})
export class EliteIconComponent {
  @Input() name: string = '';
  @Input() size: number = 24;
  @Input() color: string = 'currentColor';

  get iconUrl() {
    return `https://eliteicon.pages.dev/api/icons/${this.name}.svg`;
  }
}
```

### **Svelte Component**
```svelte
<script>
  export let name;
  export let size = 24;
  export let color = 'currentColor';
  
  $: iconUrl = `https://eliteicon.pages.dev/api/icons/${name}.svg`;
</script>

<img 
  src={iconUrl}
  alt={name}
  width={size}
  height={size}
  style="color: {color}"
/>
```

## 🔧 **Development**

### **Prerequisites**
- Node.js 18+
- npm or yarn

### **Installation**
```bash
git clone https://github.com/kamrullab/eliteicon.git
cd eliteicon
npm install
```

### **Development Server**
```bash
npm run dev
```

### **Build for Production**
```bash
npm run build
```

### **Deploy**
```bash
npm run deploy
```

## 📁 **Project Structure**

```
eliteicon/
├── public/
│   ├── api/
│   │   ├── icons/           # SVG icon files
│   │   ├── icons.json       # Icons metadata
│   │   └── eliteicon.js     # JavaScript library
│   ├── manifest.json        # PWA manifest
│   └── browserconfig.xml    # Browser configuration
├── src/
│   ├── components/          # React components
│   ├── icons/              # Icon data and utilities
│   ├── App.tsx             # Main application
│   └── main.tsx            # Entry point
├── package.json
└── README.md
```

## 🎨 **Contributing**

We welcome contributions! Here's how you can help:

### **Adding New Icons**
1. Create SVG files in `public/api/icons/`
2. Update `public/api/icons.json` with metadata
3. Add icon data to `src/icons/iconData.ts`
4. Test the icon in the interface

### **Icon Guidelines**
- **Format**: SVG with viewBox="0 0 24 24"
- **Style**: Clean, modern, colorful design
- **Size**: Optimized for web use
- **Naming**: Descriptive, kebab-case filenames
- **Categories**: Assign appropriate category and tags

### **Development Workflow**
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📊 **Performance**

- ⚡ **Fast Loading**: Icons load in <100ms via CDN
- 🗜️ **Optimized**: SVG files are minified and compressed
- 📱 **Mobile First**: Responsive design for all devices
- 🔄 **Caching**: Aggressive caching for better performance
- 🌐 **Global CDN**: Worldwide distribution for low latency

## 🔒 **Security**

- 🛡️ **CORS Enabled**: Safe cross-origin requests
- 🔐 **HTTPS Only**: Secure connections required
- 🚫 **No Tracking**: Privacy-focused, no user tracking
- ✅ **Content Security**: Safe SVG content, no scripts

## 📱 **Browser Support**

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers
- ✅ Progressive Web App support

## 📈 **Stats**

- 🎨 **1000+ Icons** across 25+ categories
- 🌍 **Global CDN** with 99.9% uptime
- ⚡ **<100ms** average response time
- 📱 **Mobile Optimized** responsive design
- 🔍 **Smart Search** with instant results
- 📋 **One-Click Copy** for easy integration

## 🤝 **Community**

- 💬 **Discord**: [Join our community](https://discord.gg/eliteicon)
- 🐦 **Twitter**: [@kamrullab](https://twitter.com/kamrullab)
- 📧 **Email**: kamrul@eliteicon.dev
- 🐛 **Issues**: [GitHub Issues](https://github.com/kamrullab/eliteicon/issues)
- 💡 **Feature Requests**: [GitHub Discussions](https://github.com/kamrullab/eliteicon/discussions)

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 **Acknowledgments**

- Built with ❤️ by [Kamrul](https://github.com/kamrullab)
- Inspired by the developer and hacker community
- Special thanks to all contributors
- Icons designed with passion for the coding community

## 🚀 **What's Next?**

- 📦 **NPM Package** - Easy installation via npm
- 🎨 **Icon Generator** - AI-powered icon creation
- 🌈 **Color Variants** - Multiple color schemes
- 📱 **Mobile App** - Native mobile application
- 🔌 **Plugins** - IDE and editor integrations
- 🎯 **Custom Collections** - User-created icon sets

---

<div align="center">

**Made with 💚 by the Elite Developer Community**

[🌐 Website](https://eliteicon.pages.dev/) • [📚 Documentation](https://eliteicon.pages.dev/#api-documentation) • [🐛 Report Bug](https://github.com/kamrullab/eliteicon/issues) • [💡 Request Feature](https://github.com/kamrullab/eliteicon/discussions)

</div>
