import { View, Text } from 'react-native';
import CoinBoard from '@/components/organisms/CoinBoard';


export default function Coins() {
return (
<View className="flex-1 bg-[#0D1117] p-4">
<Text className="text-[#61DAFB] text-2xl font-semibold mb-3">Coins en tiempo real</Text>
<CoinBoard />
</View>
);
}