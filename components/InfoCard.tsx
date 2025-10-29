import AnimatedView from "@/components/AnimatedView";
import Card from "@/components/Card";
import { FontAwesome5 } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

interface InfoCardProps {
  icon: keyof typeof FontAwesome5.glyphMap;
  title: string;
  value: string | number;
  subtitle?: string;
  onPress?: () => void;
  delay?: number;
}

export default function InfoCard({
  icon,
  title,
  value,
  subtitle,
  onPress,
  delay = 0,
}: InfoCardProps) {
  const CardContent = (
    <Card variant="elevated" className="mb-3">
      <View className="flex-row items-center">
        <View className="bg-react-blue/20 rounded-full p-3 mr-3">
          <FontAwesome5 name={icon} size={28} color="#61DAFB" />
        </View>
        <View className="flex-1">
          <Text className="text-gray-400 text-sm">{title}</Text>
          <Text className="text-white text-2xl font-bold mt-1">{value}</Text>
          {subtitle && (
            <Text className="text-gray-500 text-xs mt-1">{subtitle}</Text>
          )}
        </View>
        {onPress && (
          <FontAwesome5 name="chevron-forward" size={20} color="#888" />
        )}
      </View>
    </Card>
  );

  if (onPress) {
    return (
      <AnimatedView animation="fadeInUp" delay={delay}>
        <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
          {CardContent}
        </TouchableOpacity>
      </AnimatedView>
    );
  }

  return (
    <AnimatedView animation="fadeInUp" delay={delay}>
      {CardContent}
    </AnimatedView>
  );
}
