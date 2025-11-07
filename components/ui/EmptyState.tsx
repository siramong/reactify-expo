import AnimatedView from "@/components/ui/AnimatedView";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

interface EmptyStateProps {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  description: string;
  iconColor?: string;
}

export default function EmptyState({
  icon,
  title,
  description,
  iconColor = "#888",
}: EmptyStateProps) {
  return (
    <AnimatedView
      animation="fadeIn"
      className="items-center justify-center py-16 px-6"
    >
      <View
        className="rounded-full p-6 mb-4"
        style={{
          backgroundColor: iconColor + "20",
        }}
      >
        <Ionicons name={icon} size={64} color={iconColor} />
      </View>
      <Text className="text-white text-xl font-bold mb-2 text-center">
        {title}
      </Text>
      <Text className="text-gray-400 text-sm text-center">
        {description}
      </Text>
    </AnimatedView>
  );
}
