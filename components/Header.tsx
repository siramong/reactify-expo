import AnimatedView from "@/components/AnimatedView";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

interface HeaderProps {
  title: string;
  subtitle?: string;
  icon?: keyof typeof Ionicons.glyphMap;
}

export default function Header({ title, subtitle, icon }: HeaderProps) {
  return (
    <AnimatedView animation="fadeInDown">
      <View className="mb-6">
        <View className="flex-row items-center mb-2">
          {icon && (
            <View 
              className="rounded-2xl p-3 mr-3 border border-glass-border"
              style={{ backgroundColor: 'rgba(125, 211, 252, 0.15)' }}
            >
              <Ionicons name={icon} size={28} color="#7DD3FC" />
            </View>
          )}
          <Text 
            className="text-white text-4xl font-extrabold"
            style={{
              textShadowColor: 'rgba(125, 211, 252, 0.3)',
              textShadowOffset: { width: 0, height: 2 },
              textShadowRadius: 8,
            }}
          >
            {title}
          </Text>
        </View>
        {subtitle && (
          <Text className="text-slate-400 text-base ml-1">{subtitle}</Text>
        )}
      </View>
    </AnimatedView>
  );
}
