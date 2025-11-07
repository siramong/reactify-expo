import { TouchableOpacity, Text, ActivityIndicator, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "outline" | "success" | "danger" | "glass";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  disabled?: boolean;
  icon?: keyof typeof Ionicons.glyphMap;
}

export default function Button({
  title,
  onPress,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  icon,
}: ButtonProps) {
  const handlePress = () => {
    if (!disabled && !loading) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      onPress();
    }
  };

  const baseStyles = "rounded-2xl flex-row items-center justify-center";

  const variantStyles = {
    primary: "bg-glass-primary",
    secondary: "bg-glass-secondary",
    outline: "border-2 border-glass-primary",
    success: "bg-green-500",
    danger: "bg-red-500",
    glass: "border border-glass-border",
  };

  const sizeStyles = {
    sm: "px-4 py-2",
    md: "px-6 py-3",
    lg: "px-8 py-4",
  };

  const textSizeStyles = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  const textColorStyles = {
    primary: "text-background-primary",
    secondary: "text-white",
    outline: "text-glass-primary",
    success: "text-white",
    danger: "text-white",
    glass: "text-white",
  };

  const glassStyle = variant === "glass" ? {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  } : {};

  const opacity = disabled || loading ? 0.5 : 1;

  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} mt-3`}
      style={{ opacity, ...glassStyle }}
      activeOpacity={0.7}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color={variant === "outline" ? "#7DD3FC" : "#FFF"} />
      ) : (
        <View className="flex-row items-center">
          {icon && (
            <Ionicons 
              name={icon} 
              size={size === "lg" ? 24 : size === "sm" ? 16 : 20} 
              color={
                variant === "primary"
                  ? "#0F172A"
                  : variant === "outline"
                  ? "#7DD3FC"
                  : "#FFF"
              }
              className="mr-2"
            />
          )}
          <Text
            className={`${textColorStyles[variant]} ${textSizeStyles[size]} font-semibold`}
          >
            {title}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
}
