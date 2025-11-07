/**
 * Liquid Glass Theme - Color Palette
 * Modern glassmorphism design with transparency and depth
 */

export const colors = {
  // Primary Glass Colors
  glass: {
    // Primary gradient colors for glass effect
    primary: '#7DD3FC',      // Sky blue - main accent
    secondary: '#A78BFA',    // Purple - secondary accent
    tertiary: '#F472B6',     // Pink - tertiary accent
    
    // Glass background colors
    light: 'rgba(255, 255, 255, 0.1)',
    medium: 'rgba(255, 255, 255, 0.15)',
    strong: 'rgba(255, 255, 255, 0.2)',
    
    // Glass borders
    border: 'rgba(255, 255, 255, 0.18)',
    borderLight: 'rgba(255, 255, 255, 0.1)',
  },
  
  // Background Colors
  background: {
    primary: '#0F172A',      // Dark slate
    secondary: '#1E293B',    // Lighter slate
    tertiary: '#334155',     // Card background
    gradient: ['#0F172A', '#1E1B4B'], // Background gradient
  },
  
  // Text Colors
  text: {
    primary: '#F8FAFC',      // Almost white
    secondary: '#CBD5E1',    // Light gray
    tertiary: '#94A3B8',     // Medium gray
    muted: '#64748B',        // Muted gray
  },
  
  // Status Colors
  status: {
    success: '#34D399',      // Green
    warning: '#FBBF24',      // Amber
    error: '#F87171',        // Red
    info: '#60A5FA',         // Blue
  },
  
  // Gradient Combinations for Glass Cards
  gradients: {
    primary: ['#7DD3FC', '#3B82F6'],
    secondary: ['#A78BFA', '#7C3AED'],
    tertiary: ['#F472B6', '#EC4899'],
    success: ['#34D399', '#059669'],
    warning: ['#FBBF24', '#D97706'],
  },
  
  // Shadow Colors
  shadow: {
    light: 'rgba(0, 0, 0, 0.1)',
    medium: 'rgba(0, 0, 0, 0.2)',
    strong: 'rgba(0, 0, 0, 0.3)',
    colored: 'rgba(125, 211, 252, 0.3)', // Glass primary with shadow
  },
} as const;

// Export individual color groups for easier imports
export const { glass, background, text, status, gradients, shadow } = colors;

export default colors;
