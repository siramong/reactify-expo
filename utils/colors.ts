/**
 * Color utility functions
 */

/**
 * Adds opacity to a hex color
 * @param hexColor - Hex color code (e.g., "#61DAFB")
 * @param opacity - Opacity value between 0 and 1 (e.g., 0.2 for 20%)
 * @returns Color with opacity in rgba format
 */
export function addOpacity(hexColor: string, opacity: number): string {
  // Remove # if present
  const hex = hexColor.replace("#", "");
  
  // Parse hex color
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  // Return rgba format
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

/**
 * Hex color with opacity suffix (for React Native style prop compatibility)
 * @param hexColor - Hex color code (e.g., "#61DAFB")
 * @param opacitySuffix - Two-digit hex opacity (e.g., "20" for ~12.5% opacity)
 * @returns Color with opacity suffix
 */
export function hexWithOpacity(hexColor: string, opacitySuffix: string): string {
  const hex = hexColor.replace("#", "");
  return `#${hex}${opacitySuffix}`;
}
