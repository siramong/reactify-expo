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

const RANK_COLORS = ["#FBBF24", "#94A3B8", "#D97706"];
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
    <Card variant="glass" className="mb-4">
      <View className="flex-row items-center mb-4">
        <View 
          className="rounded-full p-2 mr-2 border border-glass-border-light"
          style={{ backgroundColor: 'rgba(251, 191, 36, 0.2)' }}
        >
          <Ionicons name="podium" size={20} color="#FBBF24" />
        </View>
        <Text className="text-white text-xl font-bold">
          Top Estudiantes
        </Text>
      </View>

      <View className="space-y-3">
        {topStudents.map((student, index) => {
          const rankColor = RANK_COLORS[index] || "#94A3B8";
          const rankIcon = RANK_ICONS[index] || "star";

          return (
            <AnimatedView key={student.userId} delay={index * 100}>
              <View
                className="flex-row items-center p-4 rounded-2xl mt-1 mb-1 border"
                style={{
                  backgroundColor: `rgba(255, 255, 255, ${index === 0 ? 0.15 : 0.1})`,
                  borderColor: index === 0 ? rankColor : 'rgba(255, 255, 255, 0.1)',
                  shadowColor: index === 0 ? rankColor : "#000",
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: index === 0 ? 0.4 : 0.2,
                  shadowRadius: 8,
                }}
              >
                <View
                  className="rounded-full w-10 h-10 items-center justify-center mr-3 border border-glass-border-light"
                  style={{ backgroundColor: rankColor + "30" }}
                >
                  <Ionicons name={rankIcon} size={20} color={rankColor} />
                </View>

                <View className="flex-1">
                  <Text className="text-white text-base font-bold">
                    {student.username}
                  </Text>
                  <Text className="text-slate-400 text-xs">
                    {student.curso}
                  </Text>
                </View>

                <View className="flex-row items-center">
                  <Ionicons name="cash" size={18} color={rankColor} />
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
