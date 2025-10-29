import { View, ViewProps } from 'react-native';
import { ReactNode } from 'react';

interface BackgroundGradientProps extends ViewProps {
  children: ReactNode;
  variant?: 'default' | 'subtle' | 'vibrant';
}

export default function BackgroundGradient({ 
  children, 
  variant = 'default',
  ...props 
}: BackgroundGradientProps) {
  // Since we're using NativeWind, we'll create gradient effects using overlays
  const gradientStyles = {
    default: 'bg-dark-bg',
    subtle: 'bg-gradient-to-b from-dark-bg to-dark-card',
    vibrant: 'bg-gradient-to-br from-dark-bg via-react-blue/5 to-dark-bg',
  };

  return (
    <View className={`flex-1 ${gradientStyles[variant]}`} {...props}>
      {children}
    </View>
  );
}
