import { TextInput, View, Text } from "react-native";
import { ReactNode } from "react";

interface InputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  error?: string;
  label?: string;
  icon?: ReactNode;
  multiline?: boolean;
  numberOfLines?: number;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
}

export default function Input({
  placeholder,
  value,
  onChangeText,
  error,
  label,
  icon,
  multiline = false,
  numberOfLines = 1,
  keyboardType = "default",
}: InputProps) {
  return (
    <View className="mt-3">
      {label && (
        <Text className="text-white text-sm font-medium mb-2">{label}</Text>
      )}
      <View
        className={`flex-row items-center rounded-2xl border ${error ? "border-red-400" : "border-glass-border"}`}
        style={{ 
          backgroundColor: error ? 'rgba(248, 113, 113, 0.1)' : 'rgba(255, 255, 255, 0.1)',
        }}
      >
        {icon && <View className="pl-3">{icon}</View>}
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          className="flex-1 text-white p-4"
          placeholderTextColor="#64748B"
          multiline={multiline}
          numberOfLines={numberOfLines}
          keyboardType={keyboardType}
        />
      </View>
      {error && <Text className="text-red-400 text-xs mt-1 ml-1">{error}</Text>}
    </View>
  );
}
