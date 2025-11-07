import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AnimatedView from "@/components/AnimatedView";
import Card from "@/components/Card";

interface QuickStatsProps {
  totalStudents: number;
  totalCoins: number;
  avgCoins: number;
  topCourse: string;
}

export default function QuickStats({
  totalStudents,
  totalCoins,
  avgCoins,
  topCourse,
}: QuickStatsProps) {
  const stats = [
    {
      label: "Estudiantes",
      value: totalStudents,
      icon: "people" as keyof typeof Ionicons.glyphMap,
      color: "#7DD3FC",
    },
    {
      label: "Total",
      value: totalCoins,
      icon: "wallet" as keyof typeof Ionicons.glyphMap,
      color: "#FBBF24",
    },
    {
      label: "Promedio",
      value: avgCoins,
      icon: "trending-up" as keyof typeof Ionicons.glyphMap,
      color: "#34D399",
    },
  ];

  return (
    <AnimatedView delay={150}>
      <Card variant="glass" className="mb-4">
        <View className="flex-row justify-between items-center">
          {stats.map((stat, index) => (
            <View
              key={stat.label}
              className={`flex-1 items-center ${index < stats.length - 1 ? 'border-r border-glass-border-light' : ''}`}
            >
              <View
                className="rounded-full p-2 mb-2 border border-glass-border-light"
                style={{ backgroundColor: stat.color + "20" }}
              >
                <Ionicons name={stat.icon} size={20} color={stat.color} />
              </View>
              <Text
                className="text-2xl font-extrabold"
                style={{ 
                  color: stat.color,
                  textShadowColor: stat.color + "40",
                  textShadowOffset: { width: 0, height: 2 },
                  textShadowRadius: 4,
                }}
              >
                {stat.value}
              </Text>
              <Text className="text-slate-400 text-xs uppercase mt-1 font-medium">
                {stat.label}
              </Text>
            </View>
          ))}
        </View>
        {topCourse && (
          <View className="mt-4 pt-4 border-t border-glass-border-light flex-row items-center justify-center">
            <Ionicons name="star" size={16} color="#FBBF24" />
            <Text className="text-slate-400 text-xs ml-2">
              Curso destacado: <Text className="text-white font-bold">{topCourse}</Text>
            </Text>
          </View>
        )}
      </Card>
    </AnimatedView>
  );
}
