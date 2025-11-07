import AnimatedView from "@/components/ui/AnimatedView";
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
            <View className="rounded-xl p-2 mr-3 bg-react-blue/[0.12]">
              <Ionicons name={icon} size={28} color="#61DAFB" />
            </View>
          )}
          <Text className="text-white text-4xl font-extrabold">
            {title}
          </Text>
        </View>
        {subtitle && (
          <Text className="text-gray-400 text-base ml-1">{subtitle}</Text>
        )}
      </View>
    </AnimatedView>
  );
}
