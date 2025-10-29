import { View, ViewProps } from "react-native";
import { ReactNode } from "react";

interface CardProps extends ViewProps {
  children: ReactNode;
  variant?: "default" | "elevated" | "outlined";
  className?: string;
}

export default function Card({
  children,
  variant = "default",
  className = "",
  ...props
}: CardProps) {
  const baseStyles = "rounded-xl p-4";

  const variantStyles = {
    default: "bg-dark-card",
    elevated: "bg-dark-card shadow-lg shadow-black/50",
    outlined: "bg-dark-card border-2 border-dark-border",
  };

  return (
    <View
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </View>
  );
}
