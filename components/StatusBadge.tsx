import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { status } from "@/theme";

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
      backgroundColor: `${status.success}26`, // 15% opacity in hex
      text: "text-emerald-400",
      iconName: "checkmark-circle" as const,
      iconColor: status.success,
    },
    error: {
      container: "border border-glass-border-light",
      backgroundColor: `${status.error}26`,
      text: "text-red-400",
      iconName: "alert-circle" as const,
      iconColor: status.error,
    },
    warning: {
      container: "border border-glass-border-light",
      backgroundColor: `${status.warning}26`,
      text: "text-amber-400",
      iconName: "warning" as const,
      iconColor: status.warning,
    },
    info: {
      container: "border border-glass-border-light",
      backgroundColor: `${status.info}26`,
      text: "text-sky-400",
      iconName: "information-circle" as const,
      iconColor: status.info,
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
