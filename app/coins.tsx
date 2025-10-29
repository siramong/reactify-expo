import { View } from 'react-native';
import Header from '@/components/molecules/Header';
import CoinBoard from '@/components/organisms/CoinBoard';
import AnimatedView from '@/components/atoms/AnimatedView';


export default function Coins() {
return (
<View className="flex-1 bg-dark-bg p-4 pt-10">
<AnimatedView>
<Header 
  title="Monedas en tiempo real" 
  subtitle="Datos sincronizados con Supabase"
/>
<CoinBoard />
</AnimatedView>
</View>
);
}