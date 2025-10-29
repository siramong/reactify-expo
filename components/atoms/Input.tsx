import { TextInput, View, Text } from 'react-native';
import { ReactNode } from 'react';

interface InputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  error?: string;
  label?: string;
  icon?: ReactNode;
  multiline?: boolean;
  numberOfLines?: number;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
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
  keyboardType = 'default'
}: InputProps) {
  return (
    <View className="mt-3">
      {label && (
        <Text className="text-white text-sm font-medium mb-2">{label}</Text>
      )}
      <View className={`flex-row items-center bg-dark-card rounded-xl ${error ? 'border-2 border-red-500' : 'border border-dark-border'}`}>
        {icon && (
          <View className="pl-3">{icon}</View>
        )}
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          className="flex-1 text-white p-3"
          placeholderTextColor="#888"
          multiline={multiline}
          numberOfLines={numberOfLines}
          keyboardType={keyboardType}
        />
      </View>
      {error && (
        <Text className="text-red-500 text-xs mt-1">{error}</Text>
      )}
    </View>
  );
}