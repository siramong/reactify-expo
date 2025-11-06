import React, { useMemo, useState } from "react";
import { FlatList, View } from "react-native";
import AnimatedView from "@/components/AnimatedView";
import Header from "@/components/Header";
import InfoCard from "@/components/InfoCard";
import CoinBoard from "@/components/CoinBoard";
import Leaderboard from "@/components/Leaderboard";
import StatsDashboard from "@/components/StatsDashboard";
import AchievementsBadges from "@/components/AchievementsBadges";
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
  const [selectedCurso, setSelectedCurso] = useState<string>("Todos");

  // Filtrar monedas según el curso seleccionado
  const filteredCoins = useMemo(() => {
    if (selectedCurso === "Todos" || !selectedCurso) return coins;
    return coins.filter((coin: Coin) => coin.curso === selectedCurso);
  }, [coins, selectedCurso]);

  const totalCoins = filteredCoins.reduce((sum, coin) => sum + coin.amount, 0);
  const avgCoins =
    filteredCoins.length > 0
      ? Math.round(totalCoins / filteredCoins.length)
      : 0;

  return (
    <FlatList
      className="flex-1 bg-dark-bg p-4 pt-10"
      ListHeaderComponent={
        <AnimatedView>
          {/* Header e InfoCards */}
          <Header
            title="Reactify Dashboard"
            subtitle="Monitorea las monedas en tiempo real"
          />

          <View className="mb-4">
            <View className="flex-row space-x-2 place-content-between gap-5">
              <View className="flex-1">
                <InfoCard
                  icon="people"
                  title="Estudiantes"
                  value={filteredCoins.length}
                  subtitle="Total activos"
                  delay={0}
                  gradientColors={["#3B82F6", "#2563EB"]}
                />
              </View>
              <View className="flex-1">
                <InfoCard
                  icon="wallet"
                  title="Total Monedas"
                  value={totalCoins}
                  subtitle={`Promedio: ${avgCoins}`}
                  delay={100}
                  gradientColors={["#F59E0B", "#D97706"]}
                />
              </View>
            </View>
          </View>

          {/* Achievements System */}
          {coins.length > 0 && (
            <AnimatedView delay={200}>
              <AchievementsBadges coins={coins} />
            </AnimatedView>
          )}

          {/* Leaderboard */}
          {coins.length > 0 && (
            <AnimatedView delay={300}>
              <Leaderboard coins={coins} selectedCurso={selectedCurso} />
            </AnimatedView>
          )}

          {/* Statistics Dashboard */}
          {filteredCoins.length > 0 && (
            <AnimatedView delay={400}>
              <StatsDashboard coins={coins} selectedCurso={selectedCurso} />
            </AnimatedView>
          )}

          {/* CoinBoard */}
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
