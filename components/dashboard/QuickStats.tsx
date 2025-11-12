import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AnimatedView from "@/components/ui/AnimatedView";
import Card from "@/components/ui/Card";

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
      <Card variant="elevated" className="mb-5">
        <View className="flex-row justify-between items-center">
          {stats.map((stat, index) => (
            <View
              key={stat.label}
              className={`flex-1 items-center px-2 ${index < stats.length - 1 ? 'border-r-2 border-gray-700/50' : ''}`}
            >
              <View
                className="rounded-2xl p-3 mb-2"
                style={{ 
                  backgroundColor: stat.color + "20",
                  shadowColor: stat.color,
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.3,
                  shadowRadius: 4,
                }}
              >
                <Ionicons name={stat.icon} size={24} color={stat.color} />
              </View>
              <Text
                className="text-2xl font-extrabold"
                style={{ color: stat.color }}
              >
                {stat.value.toLocaleString()}
              </Text>
              <Text className="text-gray-400 text-xs uppercase mt-1 font-semibold tracking-wider">
                {stat.label}
              </Text>
            </View>
          ))}
        </View>
        {topCourse && (
          <View className="mt-4 pt-4 border-t-2 border-dark-border flex-row items-center justify-center">
            <View 
              className="rounded-full p-1.5"
              style={{ backgroundColor: "#FFD70030" }}
            >
              <Ionicons name="trophy" size={16} color="#FFD700" />
            </View>
            <Text className="text-gray-400 text-sm ml-2">
              Curso destacado: <Text className="text-amber-400 font-bold">{topCourse}</Text>
            </Text>
          </View>
        )}
      </Card>
    </AnimatedView>
  );
}
