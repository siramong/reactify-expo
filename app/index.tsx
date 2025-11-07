import React, { useMemo, useState } from "react";
import { FlatList, View } from "react-native";
import AnimatedView from "@/components/ui/AnimatedView";
import Header from "@/components/ui/Header";
import InfoCard from "@/components/dashboard/InfoCard";
import QuickStats from "@/components/dashboard/QuickStats";
import CoinBoard from "@/components/coins/CoinBoard";
import Leaderboard from "@/components/coins/Leaderboard";
import StatsDashboard from "@/components/dashboard/StatsDashboard";

import { useRealtimeCoins } from "@/hooks/useRealtimeCoins";
import type { Coin } from "@/types";
import "@/global.css";

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

  // Calcular curso con más monedas totales
  const topCourse = useMemo(() => {
    if (coins.length === 0) return "";
    const courseStats: Record<string, number> = {};
    coins.forEach((coin: Coin) => {
      courseStats[coin.curso] = (courseStats[coin.curso] || 0) + coin.amount;
    });
    return Object.entries(courseStats).reduce((a, b) => (b[1] > a[1] ? b : a))[0];
  }, [coins]);

  return (
    <FlatList
      className="flex-1 bg-dark-bg p-4 pt-10"
      ListHeaderComponent={
        <AnimatedView>
          {/* Header e InfoCards */}
          <Header
            title="Dashboard"
            subtitle="Monitorea las monedas en tiempo real"
            icon="stats-chart"
          />

          {/* Quick Stats - New compact overview */}
          {coins.length > 0 && (
            <QuickStats
              totalStudents={coins.length}
              totalCoins={coins.reduce((sum, c) => sum + c.amount, 0)}
              avgCoins={Math.round(coins.reduce((sum, c) => sum + c.amount, 0) / coins.length)}
              topCourse={topCourse}
            />
          )}

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

          {/* Leaderboard */}
          {coins.length > 0 && (
            <AnimatedView delay={200}>
              <Leaderboard coins={coins} selectedCurso={selectedCurso} />
            </AnimatedView>
          )}

          {/* Statistics Dashboard */}
          {filteredCoins.length > 0 && (
            <AnimatedView delay={300}>
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
