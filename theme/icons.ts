/**
 * Standardized Icon System
 * Centralized icon mapping for consistent usage across the app
 * Uses Ionicons as the primary icon library
 */

import { Ionicons } from '@expo/vector-icons';

export type IconName = keyof typeof Ionicons.glyphMap;

// Standardized icon mapping for common use cases
export const icons = {
  // Navigation
  nav: {
    home: 'home',
    homeOutline: 'home-outline',
    settings: 'settings',
    settingsOutline: 'settings-outline',
    back: 'arrow-back',
    forward: 'arrow-forward',
    menu: 'menu',
    close: 'close',
  },
  
  // Actions
  action: {
    add: 'add-circle',
    remove: 'remove-circle',
    edit: 'create',
    delete: 'trash',
    save: 'checkmark-circle',
    cancel: 'close-circle',
    refresh: 'refresh',
    search: 'search',
    filter: 'filter',
    sort: 'swap-vertical',
  },
  
  // Status
  status: {
    success: 'checkmark-circle',
    warning: 'warning',
    error: 'close-circle',
    info: 'information-circle',
    loading: 'hourglass',
  },
  
  // Social
  social: {
    discord: 'logo-discord',
    github: 'logo-github',
    twitter: 'logo-twitter',
    share: 'share-social',
  },
  
  // Data & Stats
  data: {
    chart: 'stats-chart',
    trending: 'trending-up',
    trendingDown: 'trending-down',
    analytics: 'analytics',
    calendar: 'calendar',
    time: 'time',
  },
  
  // UI Elements
  ui: {
    chevronRight: 'chevron-forward',
    chevronLeft: 'chevron-back',
    chevronUp: 'chevron-up',
    chevronDown: 'chevron-down',
    expand: 'chevron-down-circle',
    collapse: 'chevron-up-circle',
  },
  
  // Business/App Specific
  app: {
    wallet: 'wallet',
    coin: 'cash',
    people: 'people',
    person: 'person',
    trophy: 'trophy',
    medal: 'medal',
    star: 'star',
    starOutline: 'star-outline',
    heart: 'heart',
    heartOutline: 'heart-outline',
    flash: 'flash',
    build: 'build',
    colorPalette: 'color-palette',
    server: 'server',
  },
} as const;

// Helper function to get icon name from mapping
export function getIcon(category: keyof typeof icons, name: string): IconName {
  const iconMap = icons[category] as Record<string, string>;
  return (iconMap[name] || 'help-circle') as IconName;
}

export default icons;
