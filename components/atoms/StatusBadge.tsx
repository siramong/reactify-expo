import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface StatusBadgeProps {
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  icon?: boolean;
}

export default function StatusBadge({ type, message, icon = true }: StatusBadgeProps) {
  const styles = {
    success: {
      container: 'bg-green-500/10 border border-green-500/30',
      text: 'text-green-400',
      iconName: 'checkmark-circle' as const,
      iconColor: '#10B981',
    },
    error: {
      container: 'bg-red-500/10 border border-red-500/30',
      text: 'text-red-400',
      iconName: 'alert-circle' as const,
      iconColor: '#EF4444',
    },
    warning: {
      container: 'bg-yellow-500/10 border border-yellow-500/30',
      text: 'text-yellow-400',
      iconName: 'warning' as const,
      iconColor: '#F59E0B',
    },
    info: {
      container: 'bg-blue-500/10 border border-blue-500/30',
      text: 'text-blue-400',
      iconName: 'information-circle' as const,
      iconColor: '#3B82F6',
    },
  };

  const style = styles[type];

  return (
    <View className={`flex-row items-center p-3 rounded-xl ${style.container}`}>
      {icon && (
        <Ionicons name={style.iconName} size={20} color={style.iconColor} />
      )}
      <Text className={`${style.text} ${icon ? 'ml-2' : ''} flex-1`}>
        {message}
      </Text>
    </View>
  );
}
