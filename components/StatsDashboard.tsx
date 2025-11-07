import React, { useMemo } from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AnimatedView from "@/components/AnimatedView";
import Card from "@/components/Card";
import type { Coin } from "@/types";

interface StatsDashboardProps {
  coins: Coin[];
  selectedCurso: string;
}

export default function StatsDashboard({ coins, selectedCurso }: StatsDashboardProps) {
  const stats = useMemo(() => {
    const filtered =
      selectedCurso === "Todos"
        ? coins
        : coins.filter((c) => c.curso === selectedCurso);

    if (filtered.length === 0) {
      return {
        max: 0,
        min: 0,
        median: 0,
        range: 0,
      };
    }

    const amounts = filtered.map((c) => c.amount).sort((a, b) => a - b);
    const max = amounts[amounts.length - 1];
    const min = amounts[0];
    const median =
      amounts.length % 2 === 0
        ? (amounts[amounts.length / 2 - 1] + amounts[amounts.length / 2]) / 2
        : amounts[Math.floor(amounts.length / 2)];

    return {
      max,
      min,
      median: Math.round(median),
      range: max - min,
    };
  }, [coins, selectedCurso]);

  const statItems = [
    {
      icon: "trending-up" as keyof typeof Ionicons.glyphMap,
      label: "Máximo",
      value: stats.max,
      color: "#34D399",
    },
    {
      icon: "trending-down" as keyof typeof Ionicons.glyphMap,
      label: "Mínimo",
      value: stats.min,
      color: "#F87171",
    },
    {
      icon: "stats-chart" as keyof typeof Ionicons.glyphMap,
      label: "Mediana",
      value: stats.median,
      color: "#7DD3FC",
    },
    {
      icon: "swap-horizontal" as keyof typeof Ionicons.glyphMap,
      label: "Rango",
      value: stats.range,
      color: "#FBBF24",
    },
  ];

  return (
    <Card variant="glass" className="mb-4">
      <View className="flex-row items-center mb-4">
        <View 
          className="rounded-full p-2 mr-2 border border-glass-border-light"
          style={{ backgroundColor: 'rgba(125, 211, 252, 0.2)' }}
        >
          <Ionicons name="analytics" size={20} color="#7DD3FC" />
        </View>
        <Text className="text-white text-xl font-bold">
          Estadísticas
        </Text>
      </View>

      <View className="flex-row flex-wrap justify-between">
        {statItems.map((item, index) => (
          <AnimatedView
            key={item.label}
            delay={index * 50}
            className="w-[48%] mb-3"
          >
            <View
              className="p-4 rounded-2xl border"
              style={{
                backgroundColor: item.color + "15",
                borderColor: 'rgba(255, 255, 255, 0.1)',
              }}
            >
              <View className="flex-row items-center mb-2">
                <Ionicons name={item.icon} size={20} color={item.color} />
                <Text className="text-slate-400 text-xs ml-2 uppercase font-medium">
                  {item.label}
                </Text>
              </View>
              <Text
                className="text-2xl font-extrabold"
                style={{ 
                  color: item.color,
                  textShadowColor: item.color + "30",
                  textShadowOffset: { width: 0, height: 1 },
                  textShadowRadius: 3,
                }}
              >
                {item.value}
              </Text>
            </View>
          </AnimatedView>
        ))}
      </View>
    </Card>
  );
}
