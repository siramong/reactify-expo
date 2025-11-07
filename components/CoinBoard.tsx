import React, { useState } from "react";
import { View, Text, FlatList, RefreshControl } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AnimatedView from "@/components/AnimatedView";
import Card from "@/components/Card";
import Loader from "@/components/Loader";
import EmptyState from "@/components/EmptyState";
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
      <EmptyState
        icon="wallet-outline"
        title="No hay monedas disponibles"
        description="Los datos aparecerán aquí en tiempo real"
        iconColor="#61DAFB"
      />
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
        <EmptyState
          icon="person-outline"
          title="No hay usuarios en este curso"
          description="Selecciona otro curso para ver más datos"
          iconColor="#F59E0B"
        />
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
            const rankIcon = index === 0 ? "trophy" : index === 1 ? "medal" : index === 2 ? "ribbon" : "person-circle";
            
            return (
              <AnimatedView
                animation="fadeInUp"
                delay={index * 80}
                className="mb-3"
              >
                <Card variant="elevated">
                  <View className="flex-row items-center justify-between">
                    {/* Ranking Badge */}
                    <View className="mr-3">
                      <View 
                        className="rounded-full w-12 h-12 items-center justify-center"
                        style={{ backgroundColor: color + "20" }}
                      >
                        <Text className="text-white font-bold text-lg">
                          {index + 1}
                        </Text>
                      </View>
                    </View>

                    {/* Usuario */}
                    <View className="flex-row items-center flex-1">
                      <View className="rounded-xl p-3 mr-3" style={{ backgroundColor: color + "15" }}>
                        <Ionicons name={rankIcon} size={24} color={color} />
                      </View>
                      <View className="flex-1">
                        <Text className="text-white text-lg font-semibold">
                          {item.username}
                        </Text>
                        <View className="flex-row items-center mt-1">
                          <Ionicons name="school" size={14} color={color} />
                          <Text className="text-sm font-bold ml-1" style={{ color }}>
                            {item.curso}
                          </Text>
                        </View>
                      </View>
                    </View>

                    {/* Monedas con efecto especial */}
                    <View className="items-center">
                      <View 
                        className="rounded-2xl px-4 py-2"
                        style={{ 
                          backgroundColor: color + "20",
                          borderWidth: 2,
                          borderColor: color + "40",
                        }}
                      >
                        <View className="flex-row items-center">
                          <Ionicons name="cash" size={20} color={color} />
                          <Text className="text-xl font-extrabold ml-2" style={{ color }}>
                            {item.amount}
                          </Text>
                        </View>
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
