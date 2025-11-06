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

  const baseStyles = "rounded-xl flex-row items-center justify-center";

  const variantStyles = {
    primary: "bg-react-blue",
    secondary: "bg-dark-card border-2 border-react-blue",
    outline: "border-2 border-react-blue",
    success: "bg-green-500",
    danger: "bg-red-500",
  };

  const sizeStyles = {
    sm: "px-3 py-2",
    md: "px-4 py-3",
    lg: "px-6 py-4",
  };

  const textSizeStyles = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  const textColorStyles = {
    primary: "text-black",
    secondary: "text-react-blue",
    outline: "text-react-blue",
    success: "text-white",
    danger: "text-white",
  };

  const opacity = disabled || loading ? 0.5 : 1;

  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} mt-3`}
      style={{ opacity }}
      activeOpacity={0.7}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color={variant === "primary" || variant === "success" || variant === "danger" ? "#FFF" : "#61DAFB"} />
      ) : (
        <View className="flex-row items-center">
          {icon && (
            <Ionicons 
              name={icon} 
              size={size === "lg" ? 24 : size === "sm" ? 16 : 20} 
              color={
                variant === "primary"
                  ? "#000"
                  : variant === "success" || variant === "danger"
                  ? "#FFF"
                  : "#61DAFB"
              }
              style={{ marginRight: 8 }}
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
