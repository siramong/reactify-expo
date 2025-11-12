import { View, ViewProps } from "react-native";
import { ReactNode } from "react";

interface CardProps extends ViewProps {
  children: ReactNode;
  variant?: "default" | "elevated" | "outlined" | "gradient";
  className?: string;
}

export default function Card({
  children,
  variant = "default",
  className = "",
  ...props
}: CardProps) {
  const baseStyles = "rounded-2xl p-5";

  const variantStyles = {
    default: "bg-dark-card",
    elevated: "bg-dark-card",
    outlined: "bg-dark-card border-2 border-dark-border",
    gradient: "bg-dark-card",
  };

  // Enhanced shadow for elevated cards
  const shadowStyle = variant === "elevated" ? {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  } : undefined;

  return (
    <View
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      style={shadowStyle}
      {...props}
    >
      {children}
    </View>
  );
}
