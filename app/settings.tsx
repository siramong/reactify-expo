import { View, Text, Image } from 'react-native';


export default function Settings() {
return (
<View className="flex-1 bg-[#0D1117] p-4 items-center justify-center">
<Image source={require('@/assets/images/supabase-logo.png')} style={{ width: 140, height: 140, resizeMode: 'contain' }} />
<Text className="text-white mt-4">App conectada con Supabase</Text>
</View>
);
}