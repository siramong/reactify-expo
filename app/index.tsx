import { ScrollView, View } from "react-native";
import AnimatedView from "@/components/atoms/AnimatedView";
import Header from "@/components/molecules/Header";
import InfoCard from "@/components/molecules/InfoCard";
import CoinBoard from "@/components/organisms/CoinBoard";
import { useRealtimeCoins } from "@/hooks/useRealtimeCoins";
import "@/global.css";

export default function Index() {
  const { coins } = useRealtimeCoins();
  
  const totalCoins = coins.reduce((sum, coin) => sum + coin.amount, 0);
  const avgCoins = coins.length > 0 ? Math.round(totalCoins / coins.length) : 0;

  return (
    <ScrollView className="flex-1 bg-dark-bg p-4">
      <AnimatedView>
        <Header 
          title="Reactify Dashboard" 
          subtitle="Monitorea tus coins en tiempo real"
        />
        
        <View className="mb-4">
          <View className="flex-row space-x-2">
            <View className="flex-1">
              <InfoCard
                icon="people"
                title="Usuarios"
                value={coins.length}
                subtitle="Total activos"
                delay={0}
              />
            </View>
            <View className="flex-1">
              <InfoCard
                icon="logo-usd"
                title="Total Coins"
                value={totalCoins}
                subtitle={`Promedio: ${avgCoins}`}
                delay={100}
              />
            </View>
          </View>
        </View>

        <CoinBoard />
      </AnimatedView>
    </ScrollView>
  );
}
