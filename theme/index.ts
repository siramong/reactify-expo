/**
 * Liquid Glass Theme - Main Export
 * Centralized design system for the application
 */

import colors, { glass, background, text, status, gradients, shadow } from './colors';
import typography, { textPresets } from './typography';
import spacing, { borderRadius } from './spacing';
import effects, { blur, shadows, glassEffect } from './effects';

export const theme = {
  colors,
  typography,
  spacing,
  borderRadius,
  effects,
} as const;

// Re-export for convenience
export {
  // Colors
  colors,
  glass,
  background,
  text,
  status,
  gradients,
  shadow,
  
  // Typography
  typography,
  textPresets,
  
  // Spacing
  spacing,
  borderRadius,
  
  // Effects
  effects,
  blur,
  shadows,
  glassEffect,
};

export default theme;
