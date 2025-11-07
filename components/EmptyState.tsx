import AnimatedView from "@/components/AnimatedView";
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
  iconColor = "#7DD3FC",
}: EmptyStateProps) {
  return (
    <AnimatedView
      animation="fadeIn"
      className="items-center justify-center py-16 px-6"
    >
      <View
        className="rounded-full p-6 mb-4 border border-glass-border-light"
        style={{
          backgroundColor: iconColor + "20",
        }}
      >
        <Ionicons name={icon} size={64} color={iconColor} />
      </View>
      <Text className="text-white text-xl font-bold mb-2 text-center">
        {title}
      </Text>
      <Text className="text-slate-400 text-sm text-center">
        {description}
      </Text>
    </AnimatedView>
  );
}
