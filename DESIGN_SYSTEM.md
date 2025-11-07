# Liquid Glass Design System

This document describes the Liquid Glass design system implemented in this project. The design system provides a modern, glassmorphism-inspired visual aesthetic with consistent colors, typography, and spacing.

## Overview

The Liquid Glass design system is a comprehensive set of design tokens and components that create a modern, transparent glass-like interface. It features:

- **Glassmorphism effects** - Semi-transparent backgrounds with subtle borders
- **Vibrant accent colors** - Sky blue, purple, and pink gradients
- **Consistent spacing** - Standardized margins, paddings, and gaps
- **Smooth animations** - Fluid transitions and micro-interactions
- **Modern typography** - Clear hierarchy with proper font sizes and weights

## File Structure

```
theme/
├── index.ts          # Main export file
├── colors.ts         # Color palette
├── typography.ts     # Font sizes, weights, and presets
├── spacing.ts        # Spacing and border radius values
├── effects.ts        # Shadows and glass effects
└── icons.ts          # Standardized icon mappings
```

## Colors

### Glass Colors

The glass effect uses semi-transparent white overlays:

- `glass.primary` - `#7DD3FC` (Sky blue)
- `glass.secondary` - `#A78BFA` (Purple)
- `glass.tertiary` - `#F472B6` (Pink)
- `glass.light` - `rgba(255, 255, 255, 0.1)`
- `glass.medium` - `rgba(255, 255, 255, 0.15)`
- `glass.strong` - `rgba(255, 255, 255, 0.2)`

### Background Colors

- `background.primary` - `#0F172A` (Dark slate)
- `background.secondary` - `#1E293B` (Lighter slate)
- `background.tertiary` - `#334155` (Card background)

### Text Colors

- `text.primary` - `#F8FAFC` (Almost white)
- `text.secondary` - `#CBD5E1` (Light gray)
- `text.tertiary` - `#94A3B8` (Medium gray)
- `text.muted` - `#64748B` (Muted gray)

### Status Colors

- `status.success` - `#34D399` (Green)
- `status.warning` - `#FBBF24` (Amber)
- `status.error` - `#F87171` (Red)
- `status.info` - `#60A5FA` (Blue)

## Typography

### Font Sizes

```typescript
fontSize: {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 30,
  '4xl': 36,
  '5xl': 48,
}
```

### Font Weights

- `light` - 300
- `normal` - 400
- `medium` - 500
- `semibold` - 600
- `bold` - 700
- `extrabold` - 800

### Text Presets

Pre-configured text styles for common use cases:

- `h1` - Extra large headers (36px, extrabold)
- `h2` - Large headers (30px, bold)
- `h3` - Medium headers (24px, bold)
- `h4` - Small headers (20px, semibold)
- `body` - Normal text (16px, normal)
- `caption` - Small text (14px, normal)
- `button` - Button text (16px, semibold, wide spacing)

## Spacing

### Spacing Scale

```typescript
spacing: {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 40,
  '3xl': 48,
  '4xl': 64,
  '5xl': 80,
}
```

### Border Radius

```typescript
borderRadius: {
  none: 0,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  '3xl': 32,
  full: 9999,
}
```

## Effects

### Shadows

Predefined shadow styles for elevation:

- `sm` - Subtle shadow (offset: 1px, opacity: 0.05)
- `md` - Medium shadow (offset: 2px, opacity: 0.1)
- `lg` - Large shadow (offset: 4px, opacity: 0.15)
- `xl` - Extra large shadow (offset: 8px, opacity: 0.2)
- `colored` - Colored shadow with glass primary color

### Glass Effects

```typescript
glassEffect: {
  light: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.18)',
  },
  medium: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  strong: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 1.5,
    borderColor: 'rgba(255, 255, 255, 0.25)',
  },
}
```

## Usage Examples

### Importing the Theme

```typescript
import { colors, typography, spacing, glassEffect } from '@/theme';
// or
import theme from '@/theme';
```

### Using Colors

```typescript
import { glass, background, text } from '@/theme';

<View style={{ backgroundColor: background.primary }}>
  <Text style={{ color: text.primary }}>Hello World</Text>
</View>
```

### Using Glass Effect

```typescript
import { glassEffect } from '@/theme/effects';

<View style={glassEffect.medium}>
  <Text>Glass Card Content</Text>
</View>
```

### Using Typography Presets

```typescript
import { textPresets } from '@/theme/typography';

<Text style={{
  fontSize: textPresets.h1.fontSize,
  fontWeight: textPresets.h1.fontWeight,
}}>
  Large Header
</Text>
```

## Components

### GlassCard

A card component with glassmorphism effect:

```typescript
import GlassCard from '@/components/ui/GlassCard';

<GlassCard variant="medium" glowColor="#7DD3FC">
  <Text>Card Content</Text>
</GlassCard>
```

Variants: `light`, `medium`, `strong`

### Card

Enhanced card component with glass variant:

```typescript
import Card from '@/components/Card';

<Card variant="glass">
  <Text>Card Content</Text>
</Card>
```

Variants: `default`, `elevated`, `outlined`, `glass`

### Button

Modernized button with Liquid Glass styling:

```typescript
import Button from '@/components/Button';

<Button
  title="Click Me"
  variant="glass"
  icon="star"
  onPress={() => {}}
/>
```

Variants: `primary`, `secondary`, `outline`, `success`, `danger`, `glass`

## Tailwind CSS Integration

The theme is integrated with Tailwind CSS through `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      glass: {
        primary: '#7DD3FC',
        secondary: '#A78BFA',
        tertiary: '#F472B6',
        light: 'rgba(255, 255, 255, 0.1)',
        medium: 'rgba(255, 255, 255, 0.15)',
        strong: 'rgba(255, 255, 255, 0.2)',
        border: 'rgba(255, 255, 255, 0.18)',
        'border-light': 'rgba(255, 255, 255, 0.1)',
      },
      background: {
        primary: '#0F172A',
        secondary: '#1E293B',
        tertiary: '#334155',
      },
    },
  },
}
```

### Using Tailwind Classes

```typescript
<View className="bg-glass-medium border border-glass-border rounded-2xl p-5">
  <Text className="text-white text-xl font-bold">Glass Card</Text>
</View>
```

## Best Practices

1. **Consistency** - Always use theme colors instead of hard-coded values
2. **Spacing** - Use the spacing scale for margins, paddings, and gaps
3. **Typography** - Use text presets for consistent font sizing
4. **Glass Effects** - Apply glass effects to cards and overlays for the signature look
5. **Shadows** - Use predefined shadow styles for depth and elevation
6. **Border Radius** - Prefer `2xl` (24px) for cards to maintain the modern aesthetic

## Migration from Old Theme

If you're updating existing components:

1. Replace `#61DAFB` (old react-blue) with `#7DD3FC` (glass.primary)
2. Replace `#0D1117` (old dark-bg) with `#0F172A` (background.primary)
3. Replace `#161B22` (old dark-card) with glass variants or `background.secondary`
4. Update `rounded-xl` to `rounded-2xl` for a more modern look
5. Add glass borders with `border border-glass-border`

## Icons

Standardized icon mappings are available in `theme/icons.ts`:

```typescript
import { icons } from '@/theme/icons';

// Navigation icons
icons.nav.home           // 'home'
icons.nav.settings       // 'settings'

// Action icons
icons.action.add         // 'add-circle'
icons.action.edit        // 'create'

// Status icons
icons.status.success     // 'checkmark-circle'
icons.status.error       // 'close-circle'

// Social icons
icons.social.discord     // 'logo-discord'
icons.social.github      // 'logo-github'
```

## Resources

- [Glassmorphism UI](https://ui.glass/generator/) - Glass effect generator
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS framework
- [NativeWind](https://www.nativewind.dev/) - Tailwind for React Native
- [Ionicons](https://ionic.io/ionicons) - Icon library

## Contributing

When adding new components or updating existing ones:

1. Import theme tokens from `@/theme`
2. Follow the established color palette
3. Use predefined spacing and typography scales
4. Apply glass effects for cards and overlays
5. Document any new patterns or variations
