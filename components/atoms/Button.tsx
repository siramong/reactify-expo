import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import * as Haptics from 'expo-haptics';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
}

export default function Button({ 
  title, 
  onPress, 
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false
}: ButtonProps) {
  const handlePress = () => {
    if (!disabled && !loading) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      onPress();
    }
  };

  const baseStyles = 'rounded-xl flex-row items-center justify-center';
  
  const variantStyles = {
    primary: 'bg-react-blue',
    secondary: 'bg-dark-card border-2 border-react-blue',
    outline: 'border-2 border-react-blue',
  };

  const sizeStyles = {
    sm: 'px-3 py-2',
    md: 'px-4 py-3',
    lg: 'px-6 py-4',
  };

  const textSizeStyles = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  const textColorStyles = {
    primary: 'text-black',
    secondary: 'text-react-blue',
    outline: 'text-react-blue',
  };

  const opacity = disabled || loading ? 0.5 : 1;

  return (
    <TouchableOpacity 
      onPress={handlePress} 
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} mt-3`}
      style={{ opacity }}
      activeOpacity={0.7}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'primary' ? '#000' : '#61DAFB'} />
      ) : (
        <Text className={`${textColorStyles[variant]} ${textSizeStyles[size]} font-semibold`}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}