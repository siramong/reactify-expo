import AnimatedView from "@/components/AnimatedView";
import Card from "@/components/Card";
import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

interface InfoCardProps {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  value: string | number;
  subtitle?: string;
  onPress?: () => void;
  delay?: number;
  gradientColors?: [string, string];
}

export default function InfoCard({
  icon,
  title,
  value,
  subtitle,
  onPress,
  delay = 0,
  gradientColors = ["#7DD3FC", "#3B82F6"],
}: InfoCardProps) {
  const CardContent = (
    <Card variant="glass" className="mb-3 overflow-hidden">
      <View className="flex-row items-center">
        <View 
          className="rounded-2xl p-4 mr-4 border border-glass-border-light"
          style={{
            backgroundColor: gradientColors[0] + "20",
            shadowColor: gradientColors[0],
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.4,
            shadowRadius: 8,
          }}
        >
          <Ionicons name={icon} size={32} color={gradientColors[0]} />
        </View>
        <View className="flex-1">
          <Text className="text-slate-400 text-xs uppercase tracking-wider font-semibold">
            {title}
          </Text>
          <Text 
            className="text-white text-3xl font-extrabold mt-1"
            style={{ 
              textShadowColor: gradientColors[0] + "40",
              textShadowOffset: { width: 0, height: 2 },
              textShadowRadius: 6,
            }}
          >
            {value}
          </Text>
          {subtitle && (
            <Text className="text-slate-500 text-xs mt-1 font-medium">{subtitle}</Text>
          )}
        </View>
        {onPress && (
          <Ionicons name="chevron-forward" size={24} color="#7DD3FC" />
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
