// Elite Icon Collection - 1000+ Colorful SVG Icons
export interface IconData {
  id: string;
  name: string;
  category: string;
  svg: string;
  tags: string[];
  color: string;
}

export const iconCategories = [
  'All',
  'Developer',
  'Hacker',
  'UI Essentials',
  'Security',
  'Network',
  'Database',
  'Cloud',
  'Mobile',
  'Gaming',
  'Social',
  'E-commerce',
  'Media',
  'Communication',
  'Tools',
  'Cartoon',
  'Anime',
  'Animals',
  'Food',
  'Weather',
  'Transportation',
  'Sports',
  'Education',
  'Medical',
  'Finance'
];

// Elite Icon Collection
export const iconCollection: IconData[] = [
  // Developer Icons
  {
    id: 'terminal',
    name: 'Terminal',
    category: 'Developer',
    color: '#00ff41',
    svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="18" rx="2" ry="2"/><path d="M7 8l4 4-4 4"/><path d="M13 16h6"/></svg>',
    tags: ['console', 'command', 'cli', 'bash', 'shell']
  },
  {
    id: 'code-editor',
    name: 'Code Editor',
    category: 'Developer',
    color: '#ff6b35',
    svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M8 8l-2 2 2 2"/><path d="M16 8l2 2-2 2"/><path d="M10 14l4-4"/></svg>',
    tags: ['ide', 'vscode', 'editor', 'programming']
  },
  {
    id: 'git-branch',
    name: 'Git Branch',
    category: 'Developer',
    color: '#f39c12',
    svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>',
    tags: ['version', 'control', 'github', 'repository']
  },
  {
    id: 'api',
    name: 'API',
    category: 'Developer',
    color: '#9b59b6',
    svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>',
    tags: ['rest', 'endpoint', 'service', 'integration']
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'Developer',
    color: '#0db7ed',
    svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="8" width="4" height="4"/><rect x="6" y="8" width="4" height="4"/><rect x="10" y="8" width="4" height="4"/><rect x="6" y="4" width="4" height="4"/><rect x="10" y="4" width="4" height="4"/><path d="M14 8h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-6"/></svg>',
    tags: ['container', 'deployment', 'devops', 'virtualization']
  },

  // Cartoon Icons
  {
    id: 'cartoon-cat',
    name: 'Cartoon Cat',
    category: 'Cartoon',
    color: '#ff6b6b',
    svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="8"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/><path d="M8 5l2 3"/><path d="M16 5l-2 3"/></svg>',
    tags: ['cute', 'pet', 'animal', 'kawaii']
  },
  {
    id: 'cartoon-dog',
    name: 'Cartoon Dog',
    category: 'Cartoon',
    color: '#ffa726',
    svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="13" r="7"/><path d="M9 10h.01"/><path d="M15 10h.01"/><path d="M10 16s1 1 2 1 2-1 2-1"/><ellipse cx="8" cy="8" rx="2" ry="3"/><ellipse cx="16" cy="8" rx="2" ry="3"/></svg>',
    tags: ['puppy', 'pet', 'animal', 'cute']
  },
  {
    id: 'cartoon-bear',
    name: 'Cartoon Bear',
    category: 'Cartoon',
    color: '#8d6e63',
    svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="6"/><circle cx="8" cy="8" r="2"/><circle cx="16" cy="8" r="2"/><path d="M10 10h.01"/><path d="M14 10h.01"/><path d="M10 14s1 2 2 2 2-2 2-2"/></svg>',
    tags: ['teddy', 'cute', 'animal', 'fluffy']
  },
  {
    id: 'cartoon-robot',
    name: 'Cartoon Robot',
    category: 'Cartoon',
    color: '#42a5f5',
    svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="6" width="12" height="12" rx="2"/><circle cx="9" cy="9" r="1"/><circle cx="15" cy="9" r="1"/><path d="M9 13h6"/><path d="M12 2v4"/><path d="M4 12h2"/><path d="M18 12h2"/><path d="M8 18v2"/><path d="M16 18v2"/></svg>',
    tags: ['android', 'ai', 'technology', 'cute']
  },
  {
    id: 'cartoon-alien',
    name: 'Cartoon Alien',
    category: 'Cartoon',
    color: '#66bb6a',
    svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="10" rx="6" ry="8"/><circle cx="10" cy="8" r="2"/><circle cx="14" cy="8" r="2"/><path d="M8 16s2 2 4 2 4-2 4-2"/></svg>',
    tags: ['ufo', 'space', 'extraterrestrial', 'cute']
  },

  // Anime Icons
  {
    id: 'anime-girl',
    name: 'Anime Girl',
    category: 'Anime',
    color: '#f8bbd9',
    svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="8"/><path d="M8 10s1-2 4-2 4 2 4 2"/><circle cx="10" cy="12" r="1"/><circle cx="14" cy="12" r="1"/><path d="M10 15s1 1 2 1 2-1 2-1"/><path d="M6 6c2-2 4-1 6-1s4-1 6 1"/></svg>',
    tags: ['manga', 'kawaii', 'character', 'japanese']
  },
  {
    id: 'anime-boy',
    name: 'Anime Boy',
    category: 'Anime',
    color: '#64b5f6',
    svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="8"/><path d="M8 10s1-1 4-1 4 1 4 1"/><circle cx="10" cy="12" r="1"/><circle cx="14" cy="12" r="1"/><path d="M10 15h4"/><path d="M7 7c2-1 3 0 5 0s3 1 5 0"/></svg>',
    tags: ['manga', 'character', 'japanese', 'hero']
  },
  {
    id: 'anime-cat-girl',
    name: 'Anime Cat Girl',
    category: 'Anime',
    color: '#ff8a65',
    svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="7"/><path d="M8 10s1-2 4-2 4 2 4 2"/><circle cx="10" cy="12" r="1"/><circle cx="14" cy="12" r="1"/><path d="M10 15s1 1 2 1 2-1 2-1"/><path d="M8 5l2 3"/><path d="M16 5l-2 3"/></svg>',
    tags: ['neko', 'kawaii', 'manga', 'cute']
  },
  {
    id: 'anime-sword',
    name: 'Anime Sword',
    category: 'Anime',
    color: '#90a4ae',
    svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l8 8-8 8-8-8z"/><path d="M12 6v12"/><circle cx="12" cy="18" r="2"/><path d="M10 20h4"/></svg>',
    tags: ['katana', 'weapon', 'samurai', 'blade']
  },
  {
    id: 'anime-star',
    name: 'Anime Star',
    category: 'Anime',
    color: '#ffeb3b',
    svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"/><circle cx="12" cy="12" r="2"/></svg>',
    tags: ['magical', 'power', 'sparkle', 'energy']
  },

  // Animals
  {
    id: 'lion',
    name: 'Lion',
    category: 'Animals',
    color: '#ff8f00',
    svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="6"/><circle cx="12" cy="6" r="8" fill="none" stroke-dasharray="2,2"/><circle cx="10" cy="10" r="1"/><circle cx="14" cy="10" r="1"/><path d="M10 14s1 2 2 2 2-2 2-2"/></svg>',
    tags: ['king', 'wild', 'mane', 'roar']
  },
  {
    id: 'elephant',
    name: 'Elephant',
    category: 'Animals',
    color: '#78909c',
    svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="10" rx="8" ry="6"/><path d="M4 10c0 4 2 8 4 8"/><circle cx="9" cy="8" r="1"/><circle cx="15" cy="8" r="1"/><path d="M12 12v6"/></svg>',
    tags: ['trunk', 'large', 'memory', 'gentle']
  },
  {
    id: 'penguin',
    name: 'Penguin',
    category: 'Animals',
    color: '#37474f',
    svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="14" rx="6" ry="8"/><ellipse cx="12" cy="8" rx="4" ry="5"/><circle cx="10" cy="7" r="1"/><circle cx="14" cy="7" r="1"/><path d="M12 10v2"/></svg>',
    tags: ['arctic', 'cold', 'waddle', 'tuxedo']
  },

  // Food Icons
  {
    id: 'pizza',
    name: 'Pizza',
    category: 'Food',
    color: '#ff7043',
    svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 22h20L12 2z"/><circle cx="8" cy="12" r="1"/><circle cx="12" cy="8" r="1"/><circle cx="16" cy="14" r="1"/></svg>',
    tags: ['italian', 'cheese', 'slice', 'delicious']
  },
  {
    id: 'burger',
    name: 'Burger',
    category: 'Food',
    color: '#8bc34a',
    svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12h16"/><path d="M4 8c0-2 2-4 8-4s8 2 8 4"/><path d="M4 16c0 2 2 4 8 4s8-2 8-4"/><circle cx="8" cy="10" r="1"/><circle cx="16" cy="10" r="1"/></svg>',
    tags: ['fast food', 'beef', 'bun', 'american']
  },
  {
    id: 'ice-cream',
    name: 'Ice Cream',
    category: 'Food',
    color: '#f8bbd9',
    svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2c-3 0-5 2-5 5v6c0 1 1 2 2 2h6c1 0 2-1 2-2V7c0-3-2-5-5-5z"/><path d="M12 15v7"/><circle cx="9" cy="6" r="1"/><circle cx="15" cy="6" r="1"/></svg>',
    tags: ['dessert', 'cold', 'sweet', 'cone']
  },
  {
    id: 'coffee',
    name: 'Coffee',
    category: 'Food',
    color: '#8d6e63',
    svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 8h1a4 4 0 0 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/></svg>',
    tags: ['caffeine', 'morning', 'hot', 'energy']
  },

  // Weather Icons
  {
    id: 'sunny',
    name: 'Sunny',
    category: 'Weather',
    color: '#ffeb3b',
    svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M4.93 4.93l1.41 1.41"/><path d="M17.66 17.66l1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M6.34 17.66l-1.41 1.41"/><path d="M19.07 4.93l-1.41 1.41"/></svg>',
    tags: ['bright', 'warm', 'clear', 'day']
  },
  {
    id: 'rainy',
    name: 'Rainy',
    category: 'Weather',
    color: '#42a5f5',
    svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/><path d="M16 14v6"/><path d="M8 14v6"/><path d="M12 16v6"/></svg>',
    tags: ['wet', 'drops', 'storm', 'umbrella']
  },
  {
    id: 'snowy',
    name: 'Snowy',
    category: 'Weather',
    color: '#e1f5fe',
    svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/><path d="M8 15l.01.01"/><path d="M12 17l.01.01"/><path d="M16 15l.01.01"/><path d="M10 19l.01.01"/><path d="M14 19l.01.01"/></svg>',
    tags: ['cold', 'winter', 'flakes', 'white']
  },

  // Transportation
  {
    id: 'car',
    name: 'Car',
    category: 'Transportation',
    color: '#f44336',
    svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18 10c-.1-.1-.4-.6-.7-1.3C16.8 7.3 15.8 6 14 6H10c-1.8 0-2.8 1.3-3.3 2.7-.3.7-.6 1.2-.7 1.3l-2.5 1.1C2.7 11.3 2 12.1 2 13v3c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>',
    tags: ['vehicle', 'drive', 'road', 'auto']
  },
  {
    id: 'airplane',
    name: 'Airplane',
    category: 'Transportation',
    color: '#2196f3',
    svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21 4 19 4s-2 0-3.5 1.5L11 9l-8.2-1.8c-.5-.1-.9.1-1.1.5-.2.4-.1.9.3 1.1L9 12l-5 5c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0l5-5 3 7c.2.4.7.5 1.1.3.4-.2.6-.6.5-1.1z"/></svg>',
    tags: ['flight', 'travel', 'sky', 'jet']
  },
  {
    id: 'bicycle',
    name: 'Bicycle',
    category: 'Transportation',
    color: '#4caf50',
    svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18.5" cy="17.5" r="3.5"/><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="15" cy="5" r="1"/><path d="M12 17.5L15.5 12l-3.5-7"/><path d="M17 12h3"/></svg>',
    tags: ['bike', 'cycle', 'eco', 'exercise']
  },

  // Sports
  {
    id: 'soccer-ball',
    name: 'Soccer Ball',
    category: 'Sports',
    color: '#000000',
    svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="12,2 15.09,8.26 22,9 17,14 18.18,21 12,17.77 5.82,21 7,14 2,9 8.91,8.26"/></svg>',
    tags: ['football', 'game', 'sport', 'kick']
  },
  {
    id: 'basketball',
    name: 'Basketball',
    category: 'Sports',
    color: '#ff9800',
    svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>',
    tags: ['hoop', 'dribble', 'court', 'slam']
  },

  // Education
  {
    id: 'book',
    name: 'Book',
    category: 'Education',
    color: '#795548',
    svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
    tags: ['read', 'learn', 'study', 'knowledge']
  },
  {
    id: 'graduation-cap',
    name: 'Graduation Cap',
    category: 'Education',
    color: '#3f51b5',
    svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>',
    tags: ['graduate', 'diploma', 'university', 'achievement']
  },

  // Medical
  {
    id: 'heart-pulse',
    name: 'Heart Pulse',
    category: 'Medical',
    color: '#e91e63',
    svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5"/><path d="M12 5L8 21l4-7 4 7-4-16"/></svg>',
    tags: ['health', 'cardio', 'monitor', 'vital']
  },
  {
    id: 'stethoscope',
    name: 'Stethoscope',
    category: 'Medical',
    color: '#607d8b',
    svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/></svg>',
    tags: ['doctor', 'medical', 'checkup', 'diagnosis']
  },

  // Finance
  {
    id: 'dollar-sign',
    name: 'Dollar Sign',
    category: 'Finance',
    color: '#4caf50',
    svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
    tags: ['money', 'currency', 'cash', 'payment']
  },
  {
    id: 'piggy-bank',
    name: 'Piggy Bank',
    category: 'Finance',
    color: '#e91e63',
    svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 5c-1.5 0-2.8 1.4-3 2.8l-1.2-1.2a4 4 0 0 0-5.6 0L6 9.8C4.4 8.4 2.1 9.1 1 10.5 0 12 1 14 3 14h1c0 3.3 2.7 6 6 6s6-2.7 6-6h1c2 0 3-2 2-3.5-1.1-1.4-3.4-2.1-5-0.7L12.8 8.6a4 4 0 0 1 5.6 0L19 9.8c.2-1.4 1.5-2.8 3-2.8"/><circle cx="16" cy="11" r="1"/></svg>',
    tags: ['savings', 'investment', 'money', 'bank']
  },

  // Custom KH and EK Icons
  {
    id: 'kh-logo',
    name: 'KH Logo',
    category: 'Developer',
    color: '#00ff41',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><path d="M6 6v12M6 12l6-6M6 12l6 6" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 6v5h4v2h-4v5" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    tags: ['kamrul', 'hacker', 'logo', 'brand', 'elite', 'kh']
  },
  {
    id: 'ek-logo',
    name: 'EK Logo',
    category: 'Developer',
    color: '#ff6b35',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><path d="M6 6v12M6 6h6M6 12h5M6 18h6" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 6v12M14 12l4-6M14 12l4 6" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    tags: ['elite', 'kamrul', 'logo', 'brand', 'developer', 'ek']
  },
  {
    id: 'kh-shield',
    name: 'KH Shield',
    category: 'Security',
    color: '#9b59b6',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L4 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-8-4z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 8v8M8 12l4-4M8 12l4 4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 8v3h2v2h-2v3" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    tags: ['kamrul', 'hacker', 'security', 'shield', 'protection', 'kh']
  },
  {
    id: 'ek-badge',
    name: 'EK Badge',
    category: 'Developer',
    color: '#f39c12',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M9 9v6M9 9h3M9 12h2.5M9 15h3" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 9v6M13 12l2-3M13 12l2 3" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    tags: ['elite', 'kamrul', 'badge', 'award', 'achievement', 'ek']
  },
  {
    id: 'kamrul-signature',
    name: 'Kamrul Signature',
    category: 'Developer',
    color: '#e74c3c',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 8v8M8 12l3-3M8 12l3 3" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 10c0-1 1-2 2-2s2 1 2 2-1 2-2 2-2 1-2 2v2" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="15" cy="16" r="0.5" fill="currentColor"/></svg>',
    tags: ['kamrul', 'signature', 'personal', 'brand', 'developer', 'elite']
  }
];

// Generate additional icons to reach 1000+
const generateMoreIcons = () => {
  const additionalIcons: IconData[] = [];
  const colors = ['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6', '#e67e22', '#1abc9c', '#34495e', '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd', '#98d8c8'];
  
  // Generate more icons for each category
  iconCategories.slice(1).forEach((category, categoryIndex) => {
    for (let i = 1; i <= 40; i++) {
      const iconIndex = categoryIndex * 40 + i;
      const color = colors[iconIndex % colors.length];
      
      // Create varied SVG patterns
      const patterns = [
        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="${6 + (i % 4)}"/><path d="M12 ${2 + (i % 3)} L${18 + (i % 3)} ${12 + (i % 3)} L12 ${22 - (i % 3)} L${6 - (i % 3)} ${12 + (i % 3)} Z"/></svg>`,
        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="${4 + (i % 3)}" y="${4 + (i % 3)}" width="${16 - (i % 3)}" height="${16 - (i % 3)}" rx="2"/><circle cx="12" cy="12" r="${2 + (i % 3)}"/></svg>`,
        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12,2 ${22 - (i % 4)},${8 + (i % 3)} ${20 - (i % 3)},${16 + (i % 2)} 12,${20 - (i % 2)} ${4 + (i % 3)},${16 + (i % 2)} ${2 + (i % 4)},${8 + (i % 3)}"/></svg>`,
        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M${6 + (i % 3)} ${6 + (i % 3)}L${18 - (i % 3)} ${6 + (i % 3)}L${18 - (i % 3)} ${18 - (i % 3)}L${6 + (i % 3)} ${18 - (i % 3)}Z"/><circle cx="12" cy="12" r="${3 + (i % 2)}"/></svg>`,
        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="12" rx="${8 - (i % 3)}" ry="${6 + (i % 2)}"/><line x1="${6 + (i % 4)}" y1="12" x2="${18 - (i % 4)}" y2="12"/></svg>`
      ];
      
      additionalIcons.push({
        id: `${category.toLowerCase().replace(/\s+/g, '-')}-${i}`,
        name: `${category} ${i}`,
        category,
        color,
        svg: patterns[i % patterns.length],
        tags: [category.toLowerCase(), 'icon', 'symbol', 'elite', 'design']
      });
    }
  });
  
  return additionalIcons;
};

// Add all generated icons
iconCollection.push(...generateMoreIcons());

export default iconCollection;