import React, { useState, useMemo } from "react";
import { FlatList, View } from "react-native";
import AnimatedView from "@/components/atoms/AnimatedView";
import Header from "@/components/molecules/Header";
import InfoCard from "@/components/molecules/InfoCard";
import CoinBoard from "@/components/organisms/CoinBoard";
import { useRealtimeCoins } from "@/hooks/useRealtimeCoins";
import "@/global.css";

type Coin = {
  id: string;
  username: string;
  userId: string;
  curso: string;
  amount: number;
};

export default function Index() {
  const { coins } = useRealtimeCoins();
  const [selectedCurso, setSelectedCurso] = useState<string>("");

  // Filtrar monedas según el curso seleccionado
  const filteredCoins = useMemo(() => {
    if (!selectedCurso) return coins;
    return coins.filter((coin: Coin) => coin.curso === selectedCurso);
  }, [coins, selectedCurso]);

  const totalCoins = filteredCoins.reduce((sum, coin) => sum + coin.amount, 0);
  const avgCoins =
    filteredCoins.length > 0 ? Math.round(totalCoins / filteredCoins.length) : 0;

  return (
    <FlatList
      className="flex-1 bg-dark-bg p-4 pt-10"
      ListHeaderComponent={
        <AnimatedView>
          <Header
            title="Reactify Dashboard"
            subtitle="Monitorea las monedas en tiempo real"
          />

          <View className="mb-4">
            <View className="flex-row space-x-2 place-content-between gap-5">
              <View className="flex-1">
                <InfoCard
                  icon="user-alt"
                  title="Estudiantes"
                  value={filteredCoins.length}
                  subtitle="Total activos"
                  delay={0}
                />
              </View>
              <View className="flex-1">
                <InfoCard
                  icon="coins"
                  title="Total Monedas"
                  value={totalCoins}
                  subtitle={`Promedio: ${avgCoins}`}
                  delay={100}
                />
              </View>
            </View>
          </View>

          {/* CoinBoard con dropdown */}
          <CoinBoard
            selectedCurso={selectedCurso}
            onCursoChange={setSelectedCurso}
          />
        </AnimatedView>
      }
      data={[]} // FlatList requiere data aunque sea vacío
      renderItem={null}
    />
  );
}
