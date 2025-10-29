import React, { useState } from "react";
import { View, Text, FlatList, RefreshControl } from "react-native";
import { Ionicons, FontAwesome5, AntDesign } from "@expo/vector-icons";
import AnimatedView from "@/components/AnimatedView";
import Card from "@/components/Card";
import Loader from "@/components/Loader";
import { useRealtimeCoins } from "@/hooks/useRealtimeCoins";
import CourseSelector from "@/components/CourseSelector";

interface CoinBoardProps {
  selectedCurso: string;
  onCursoChange: (curso: string) => void;
}

const CURSO_COLORS: Record<string, string> = {
  Todos: "#9CA3AF",
  "1E1": "#3B82F6",
  "1E2": "#10B981",
  "2E1": "#FACC15",
  "2E2": "#F97316",
  "3E1": "#EF4444",
  "3E2": "#8B5CF6",
};

export default function CoinBoard({ selectedCurso, onCursoChange }: CoinBoardProps) {
  const { coins, loading, refresh } = useRealtimeCoins();
  const [refreshing, setRefreshing] = useState(false);

  const cursos = ["Todos", "1E1", "1E2", "2E1", "2E2", "3E1", "3E2"];

  const onRefresh = async () => {
    setRefreshing(true);
    await refresh();
    setRefreshing(false);
  };

  const filteredCoins =
    selectedCurso === "Todos" || !selectedCurso
      ? coins
      : coins.filter((c) => c.curso === selectedCurso);

  if (loading && coins.length === 0) {
    return <Loader text="Cargando monedas..." />;
  }

  if (coins.length === 0) {
    return (
      <AnimatedView
        animation="fadeIn"
        className="items-center justify-center py-12"
      >
        <Ionicons name="wallet-outline" size={64} color="#888" />
        <Text className="text-gray-400 text-lg mt-4">
          No hay monedas disponibles
        </Text>
        <Text className="text-gray-500 text-sm mt-2">
          Los datos aparecerán aquí en tiempo real
        </Text>
      </AnimatedView>
    );
  }

  return (
    <View className="mt-2 flex-1">
      {/* Selector de curso */}
      <CourseSelector
        courses={cursos}
        selected={selectedCurso}
        onSelect={onCursoChange}
      />

      {/* Mensaje si no hay usuarios en este curso */}
      {filteredCoins.length === 0 && (
        <AnimatedView
          animation="fadeIn"
          className="items-center justify-center py-12"
        >
          <Ionicons name="person-outline" size={64} color="#888" />
          <Text className="text-gray-400 text-lg mt-4">
            No hay usuarios en este curso
          </Text>
        </AnimatedView>
      )}

      {/* Lista de usuarios */}
      {filteredCoins.length > 0 && (
        <FlatList
          data={filteredCoins}
          keyExtractor={(item, index) => `${item.id}-${index}`}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor="#61DAFB"
              colors={["#61DAFB"]}
            />
          }
          renderItem={({ item, index }) => {
            const color = CURSO_COLORS[item.curso] || "#9CA3AF";
            return (
              <AnimatedView
                animation="fadeInUp"
                delay={index * 80}
                className="mb-3"
              >
                <Card variant="elevated">
                  <View className="flex-row items-center justify-between">
                    {/* Usuario */}
                    <View className="flex-row items-center flex-1">
                      <View className={`rounded-full p-3 mr-3`} style={{ backgroundColor: color + "33" }}>
                        <Ionicons name="person" size={24} color={color} />
                      </View>
                      <View className="flex-1">
                        <Text className="text-white text-lg font-semibold">
                          {item.username}
                        </Text>
                        <Text className="text-gray-400 text-sm">
                          ID: {item.userId.slice(0, 8)}
                        </Text>
                      </View>
                    </View>

                    {/* Curso y monedas */}
                    <View className="items-end flex-row gap-5">
                      <View className="flex-row items-center">
                        <AntDesign name="inbox" size={16} color={color} />
                        <Text className="text-lg font-bold ml-1" style={{ color }}>
                          {item.curso}
                        </Text>
                      </View>
                      <View className="flex-row items-center">
                        <FontAwesome5 name="coins" size={16} color={color} />
                        <Text className="text-lg font-bold ml-1" style={{ color }}>
                          {item.amount}
                        </Text>
                      </View>
                    </View>
                  </View>
                </Card>
              </AnimatedView>
            );
          }}
        />
      )}
    </View>
  );
}
