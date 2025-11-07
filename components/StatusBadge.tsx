import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface StatusBadgeProps {
  type: "success" | "error" | "warning" | "info";
  message: string;
  icon?: boolean;
}

export default function StatusBadge({
  type,
  message,
  icon = true,
}: StatusBadgeProps) {
  const styles = {
    success: {
      container: "border border-glass-border-light",
      backgroundColor: 'rgba(52, 211, 153, 0.15)',
      text: "text-emerald-400",
      iconName: "checkmark-circle" as const,
      iconColor: "#34D399",
    },
    error: {
      container: "border border-glass-border-light",
      backgroundColor: 'rgba(248, 113, 113, 0.15)',
      text: "text-red-400",
      iconName: "alert-circle" as const,
      iconColor: "#F87171",
    },
    warning: {
      container: "border border-glass-border-light",
      backgroundColor: 'rgba(251, 191, 36, 0.15)',
      text: "text-amber-400",
      iconName: "warning" as const,
      iconColor: "#FBBF24",
    },
    info: {
      container: "border border-glass-border-light",
      backgroundColor: 'rgba(125, 211, 252, 0.15)',
      text: "text-sky-400",
      iconName: "information-circle" as const,
      iconColor: "#7DD3FC",
    },
  };

  const style = styles[type];

  return (
    <View 
      className={`flex-row items-center p-3 rounded-2xl ${style.container}`}
      style={{ backgroundColor: style.backgroundColor }}
    >
      {icon && (
        <Ionicons name={style.iconName} size={20} color={style.iconColor} />
      )}
      <Text className={`${style.text} ${icon ? "ml-2" : ""} flex-1 font-medium`}>
        {message}
      </Text>
    </View>
  );
}
