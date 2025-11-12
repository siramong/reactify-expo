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
        <View className="flex-row items-center mb-3">
          {icon && (
            <View 
              className="rounded-2xl p-3 mr-3"
              style={{
                backgroundColor: "#3B82F620",
                shadowColor: "#3B82F6",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
              }}
            >
              <Ionicons name={icon} size={32} color="#3B82F6" />
            </View>
          )}
          <View className="flex-1">
            <Text className="text-white text-4xl font-extrabold tracking-tight">
              {title}
            </Text>
          </View>
        </View>
        {subtitle && (
          <Text className="text-gray-400 text-base ml-1 leading-5">
            {subtitle}
          </Text>
        )}
      </View>
    </AnimatedView>
  );
}
