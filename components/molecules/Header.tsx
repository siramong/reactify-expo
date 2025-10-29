import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AnimatedView from "@/components/atoms/AnimatedView";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <AnimatedView animation="fadeInDown">
      <View className="mb-4">
        <Text className="text-react-blue text-3xl font-bold mb-1">
          {title}
        </Text>
        {subtitle && (
          <Text className="text-gray-400 text-base">
            {subtitle}
          </Text>
        )}
      </View>
    </AnimatedView>
  );
}
