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
      color: "#3B82F6",
    },
    {
      label: "Total",
      value: totalCoins,
      icon: "wallet" as keyof typeof Ionicons.glyphMap,
      color: "#F59E0B",
    },
    {
      label: "Promedio",
      value: avgCoins,
      icon: "trending-up" as keyof typeof Ionicons.glyphMap,
      color: "#10B981",
    },
  ];

  return (
    <AnimatedView delay={150}>
      <Card variant="elevated" className="mb-4">
        <View className="flex-row justify-between items-center">
          {stats.map((stat, index) => (
            <View
              key={stat.label}
              className={`flex-1 items-center ${index < stats.length - 1 ? 'border-r border-gray-700' : ''}`}
            >
              <View
                className="rounded-full p-2 mb-2"
                style={{ backgroundColor: stat.color + "20" }}
              >
                <Ionicons name={stat.icon} size={20} color={stat.color} />
              </View>
              <Text
                className="text-2xl font-extrabold"
                style={{ color: stat.color }}
              >
                {stat.value}
              </Text>
              <Text className="text-gray-400 text-xs uppercase mt-1">
                {stat.label}
              </Text>
            </View>
          ))}
        </View>
        {topCourse && (
          <View className="mt-3 pt-3 border-t border-dark-border flex-row items-center justify-center">
            <Ionicons name="star" size={16} color="#FFD700" />
            <Text className="text-gray-400 text-xs ml-2">
              Curso destacado: <Text className="text-white font-bold">{topCourse}</Text>
            </Text>
          </View>
        )}
      </Card>
    </AnimatedView>
  );
}
