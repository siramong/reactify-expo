import { TouchableOpacity, Text, View, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import AnimatedView from "./AnimatedView";
import { addOpacity } from "@/utils/colors";

interface WebhookActionButtonProps {
  title: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  color?: string;
  delay?: number;
}

export default function WebhookActionButton({
  title,
  description,
  icon,
  onPress,
  loading = false,
  disabled = false,
  color = "#61DAFB",
  delay = 0,
}: WebhookActionButtonProps) {
  const handlePress = () => {
    if (!disabled && !loading) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
      onPress();
    }
  };

  const opacity = disabled || loading ? 0.6 : 1;

  return (
    <AnimatedView animation="fadeInUp" delay={delay} className="mb-4">
      <TouchableOpacity
        onPress={handlePress}
        className="rounded-2xl p-6 border-2 bg-dark-card"
        style={{ 
          borderColor: color,
          opacity,
          shadowColor: color,
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 8,
        }}
        activeOpacity={0.8}
        disabled={disabled || loading}
      >
        <View className="flex-row items-center">
          <View 
            className="rounded-full p-4 mr-4"
            style={{ backgroundColor: addOpacity(color, 0.2) }}
          >
            <Ionicons name={icon} size={32} color={color} />
          </View>
          <View className="flex-1">
            <Text className="text-white text-xl font-bold mb-1">
              {title}
            </Text>
            <Text className="text-gray-400 text-sm">
              {description}
            </Text>
          </View>
          {loading && (
            <View className="ml-2">
              <ActivityIndicator size="small" color={color} />
            </View>
          )}
        </View>
      </TouchableOpacity>
    </AnimatedView>
  );
}
