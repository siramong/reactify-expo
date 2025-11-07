import React, { useMemo } from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AnimatedView from "@/components/ui/AnimatedView";
import Card from "@/components/ui/Card";
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
      color: "#10B981",
    },
    {
      icon: "trending-down" as keyof typeof Ionicons.glyphMap,
      label: "Mínimo",
      value: stats.min,
      color: "#EF4444",
    },
    {
      icon: "stats-chart" as keyof typeof Ionicons.glyphMap,
      label: "Mediana",
      value: stats.median,
      color: "#3B82F6",
    },
    {
      icon: "swap-horizontal" as keyof typeof Ionicons.glyphMap,
      label: "Rango",
      value: stats.range,
      color: "#F59E0B",
    },
  ];

  return (
    <Card variant="elevated" className="mb-4">
      <View className="flex-row items-center mb-4">
        <Ionicons name="analytics" size={24} color="#61DAFB" />
        <Text className="text-white text-xl font-bold ml-2">
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
              className="p-4 rounded-xl border"
              style={{
                backgroundColor: item.color + "15",
                borderColor: item.color + "30",
              }}
            >
              <View className="flex-row items-center mb-2">
                <Ionicons name={item.icon} size={20} color={item.color} />
                <Text className="text-gray-400 text-xs ml-2 uppercase">
                  {item.label}
                </Text>
              </View>
              <Text
                className="text-2xl font-extrabold"
                style={{ color: item.color }}
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
