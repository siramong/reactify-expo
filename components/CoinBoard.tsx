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

  const totalCoins = filteredCoins.reduce((sum, coin) => sum + coin.amount, 0);
  const avgCoins =
    filteredCoins.length > 0
      ? Math.round(totalCoins / filteredCoins.length)
      : 0;

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

      {/* Lista de usuarios */}
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
        renderItem={({ item, index }) => (
          <AnimatedView
            animation="fadeInUp"
            delay={index * 80}
            className="mb-3"
          >
            <Card variant="elevated">
              <View className="flex-row items-center justify-between">
                {/* Usuario */}
                <View className="flex-row items-center flex-1">
                  <View className="bg-react-blue/20 rounded-full p-3 mr-3">
                    <Ionicons name="person" size={24} color="#61DAFB" />
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
                    <AntDesign name="filter" size={16} color="#61DAFB" />
                    <Text className="text-react-blue text-lg font-bold ml-1">
                      {item.curso}
                    </Text>
                  </View>
                  <View className="flex-row items-center">
                    <FontAwesome5 name="coins" size={16} color="#61DAFB" />
                    <Text className="text-react-blue text-lg font-bold ml-1">
                      {item.amount}
                    </Text>
                  </View>
                </View>
              </View>
            </Card>
          </AnimatedView>
        )}
      />
    </View>
  );
}
