import { TouchableOpacity, Text, ActivityIndicator, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "outline" | "success" | "danger";
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

  const baseStyles = "rounded-2xl flex-row items-center justify-center shadow-lg";

  const variantStyles = {
    primary: "bg-blue-600",
    secondary: "bg-dark-card border-2 border-blue-600",
    outline: "border-2 border-blue-500 bg-blue-500/10",
    success: "bg-green-600",
    danger: "bg-red-600",
  };

  const sizeStyles = {
    sm: "px-4 py-2.5",
    md: "px-5 py-3.5",
    lg: "px-7 py-4",
  };

  const textSizeStyles = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  const textColorStyles = {
    primary: "text-white",
    secondary: "text-blue-500",
    outline: "text-blue-400",
    success: "text-white",
    danger: "text-white",
  };

  const iconColor = {
    primary: "#FFFFFF",
    secondary: "#3B82F6",
    outline: "#60A5FA",
    success: "#FFFFFF",
    danger: "#FFFFFF",
  };

  const opacity = disabled || loading ? 0.5 : 1;

  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} mt-3`}
      style={{ 
        opacity,
        shadowColor: variant === "primary" ? "#3B82F6" : variant === "success" ? "#10B981" : variant === "danger" ? "#EF4444" : "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
      }}
      activeOpacity={0.8}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color={iconColor[variant]} size={size === "sm" ? "small" : "small"} />
      ) : (
        <View className="flex-row items-center">
          {icon && (
            <Ionicons 
              name={icon} 
              size={size === "lg" ? 24 : size === "sm" ? 16 : 20} 
              color={iconColor[variant]}
              style={{ marginRight: 8 }}
            />
          )}
          <Text
            className={`${textColorStyles[variant]} ${textSizeStyles[size]} font-bold`}
          >
            {title}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
}
