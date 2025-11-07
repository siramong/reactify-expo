import React, { useMemo } from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AnimatedView from "@/components/AnimatedView";
import Card from "@/components/Card";
import type { Coin } from "@/types";

interface LeaderboardProps {
  coins: Coin[];
  selectedCurso: string;
}

const RANK_COLORS = ["#FFD700", "#C0C0C0", "#CD7F32"];
const RANK_ICONS: (keyof typeof Ionicons.glyphMap)[] = ["trophy", "medal", "ribbon"];

export default function Leaderboard({ coins, selectedCurso }: LeaderboardProps) {
  const topStudents = useMemo(() => {
    const filtered =
      selectedCurso === "Todos"
        ? coins
        : coins.filter((c) => c.curso === selectedCurso);
    return filtered.slice(0, 3);
  }, [coins, selectedCurso]);

  if (topStudents.length === 0) {
    return null;
  }

  return (
    <Card variant="elevated" className="mb-4">
      <View className="flex-row items-center mb-4">
        <Ionicons name="podium" size={24} color="#FFD700" />
        <Text className="text-white text-xl font-bold ml-2">
          Top Estudiantes
        </Text>
      </View>

      <View className="space-y-3">
        {topStudents.map((student, index) => {
          const rankColor = RANK_COLORS[index] || "#9CA3AF";
          const rankIcon = RANK_ICONS[index] || "star";

          return (
            <AnimatedView key={student.userId} delay={index * 100}>
              <View
                className="flex-row items-center p-4 rounded-2xl"
                style={{
                  backgroundColor: rankColor + "15",
                  borderWidth: index === 0 ? 3 : 2,
                  borderColor: index === 0 ? rankColor : rankColor + "30",
                  shadowColor: index === 0 ? rankColor : "transparent",
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.4,
                  shadowRadius: 8,
                  marginTop: 5,
                  marginBottom: 5
                }}
              >
                <View
                  className="rounded-full w-10 h-10 items-center justify-center mr-3"
                  style={{ backgroundColor: rankColor + "30" }}
                >
                  <Ionicons name={rankIcon} size={20} color={rankColor} />
                </View>

                <View className="flex-1">
                  <Text className="text-white text-base font-bold">
                    {student.username}
                  </Text>
                  <Text className="text-gray-400 text-xs">
                    {student.curso}
                  </Text>
                </View>

                <View className="flex-row items-center">
                  <Ionicons name="logo-bitcoin" size={18} color={rankColor} />
                  <Text
                    className="text-lg font-extrabold ml-1"
                    style={{ color: rankColor }}
                  >
                    {student.amount}
                  </Text>
                </View>
              </View>
            </AnimatedView>
          );
        })}
      </View>
    </Card>
  );
}
