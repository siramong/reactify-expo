import { View, ViewProps } from "react-native";
import { ReactNode } from "react";

interface CardProps extends ViewProps {
  children: ReactNode;
  variant?: "default" | "elevated" | "outlined" | "glass";
  className?: string;
}

export default function Card({
  children,
  variant = "default",
  className = "",
  ...props
}: CardProps) {
  const baseStyles = "rounded-2xl p-4";

  const variantStyles = {
    default: "bg-background-secondary",
    elevated: "bg-background-secondary",
    outlined: "bg-background-secondary border-2 border-glass-border",
    glass: "border border-glass-border",
  };

  const shadowStyles = {
    default: {},
    elevated: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 4,
    },
    outlined: {},
    glass: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 6,
      elevation: 3,
    },
  };

  return (
    <View
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      style={shadowStyles[variant]}
      {...props}
    >
      {children}
    </View>
  );
}
