import { View, ViewProps } from "react-native";
import { ReactNode } from "react";
import { shadows } from "@/theme/effects";

interface GlassCardProps extends ViewProps {
  children: ReactNode;
  variant?: "light" | "medium" | "strong";
  className?: string;
  glowColor?: string;
}

/**
 * GlassCard - Liquid Glass themed card component
 * Features glassmorphism effect with transparency and glow
 */
export default function GlassCard({
  children,
  variant = "medium",
  className = "",
  glowColor,
  ...props
}: GlassCardProps) {
  const baseStyles = "rounded-2xl p-5 overflow-hidden";

  const variantStyles = {
    light: "border border-glass-border-light",
    medium: "border border-glass-border",
    strong: "border border-glass-border",
  };

  // Background opacity based on variant
  const backgroundOpacity = {
    light: 0.1,
    medium: 0.15,
    strong: 0.2,
  };

  // Glass glow effect - use theme shadows
  const glowStyle = {
    backgroundColor: `rgba(255, 255, 255, ${backgroundOpacity[variant]})`,
    ...(glowColor ? shadows.colored : shadows.lg),
    ...(glowColor && { shadowColor: glowColor }),
  };

  return (
    <View
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      style={glowStyle}
      {...props}
    >
      {children}
    </View>
  );
}
