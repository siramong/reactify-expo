import React, { useMemo } from "react";
import { View, Text, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AnimatedView from "@/components/AnimatedView";
import Card from "@/components/Card";
import type { Coin } from "@/types";

interface AchievementLocal {
  id: string;
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  description: string;
  color: string;
  unlocked: boolean;
}

interface AchievementsBadgesProps {
  coins: Coin[];
}

export default function AchievementsBadges({ coins }: AchievementsBadgesProps) {
  const achievements = useMemo(() => {
    const totalCoins = coins.reduce((sum, c) => sum + c.amount, 0);
    const avgCoins = coins.length > 0 ? totalCoins / coins.length : 0;
    const maxCoins = coins.length > 0 ? Math.max(...coins.map((c) => c.amount)) : 0;
    const studentCount = coins.length;

    const achievementsList: AchievementLocal[] = [
      {
        id: "first_coins",
        icon: "rocket",
        title: "¡Comienza el Viaje!",
        description: "Primeros estudiantes registrados",
        color: "#3B82F6",
        unlocked: studentCount > 0,
      },
      {
        id: "ten_students",
        icon: "people",
        title: "Comunidad Creciente",
        description: "10 estudiantes activos",
        color: "#10B981",
        unlocked: studentCount >= 10,
      },
      {
        id: "hundred_coins",
        icon: "cash",
        title: "Primeros 100",
        description: "Supera las 100 monedas totales",
        color: "#F59E0B",
        unlocked: totalCoins >= 100,
      },
      {
        id: "high_average",
        icon: "trending-up",
        title: "Alto Promedio",
        description: "Promedio mayor a 20 monedas",
        color: "#8B5CF6",
        unlocked: avgCoins >= 20,
      },
      {
        id: "top_performer",
        icon: "trophy",
        title: "Rendimiento Estelar",
        description: "Un estudiante supera 50 monedas",
        color: "#FFD700",
        unlocked: maxCoins >= 50,
      },
      {
        id: "five_hundred_total",
        icon: "diamond",
        title: "Tesorero Maestro",
        description: "500 monedas totales acumuladas",
        color: "#EC4899",
        unlocked: totalCoins >= 500,
      },
    ];

    return achievementsList;
  }, [coins]);

  const unlockedCount = achievements.filter((a) => a.unlocked).length;

  return (
    <Card variant="elevated" className="mb-4">
      <View className="flex-row items-center justify-between mb-4">
        <View className="flex-row items-center">
          <Ionicons name="star" size={24} color="#FFD700" />
          <Text className="text-white text-xl font-bold ml-2">
            Logros
          </Text>
        </View>
        <View className="bg-react-blue/20 px-3 py-1 rounded-full">
          <Text className="text-react-blue font-bold">
            {unlockedCount}/{achievements.length}
          </Text>
        </View>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="flex-row">
          {achievements.map((achievement, index) => (
            <AnimatedView key={achievement.id} delay={index * 80}>
              <View
                className="mr-3 rounded-2xl p-4 w-40"
                style={{
                  backgroundColor: achievement.unlocked
                    ? achievement.color + "20"
                    : "#1F2937",
                  borderWidth: 2,
                  borderColor: achievement.unlocked
                    ? achievement.color + "50"
                    : "#374151",
                  opacity: achievement.unlocked ? 1 : 0.5,
                }}
              >
                <View
                  className="rounded-full w-12 h-12 items-center justify-center mb-3"
                  style={{
                    backgroundColor: achievement.unlocked
                      ? achievement.color + "30"
                      : "#374151",
                  }}
                >
                  <Ionicons
                    name={achievement.icon}
                    size={24}
                    color={achievement.unlocked ? achievement.color : "#6B7280"}
                  />
                </View>
                <Text
                  className="text-sm font-bold mb-1"
                  style={{
                    color: achievement.unlocked ? "#FFFFFF" : "#9CA3AF",
                  }}
                >
                  {achievement.title}
                </Text>
                <Text
                  className="text-xs"
                  style={{
                    color: achievement.unlocked ? "#D1D5DB" : "#6B7280",
                  }}
                >
                  {achievement.description}
                </Text>
              </View>
            </AnimatedView>
          ))}
        </View>
      </ScrollView>
    </Card>
  );
}
