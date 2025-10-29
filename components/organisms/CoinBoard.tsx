import React, { useState, useMemo } from "react";
import { View, Text, FlatList, RefreshControl } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Ionicons, FontAwesome5, AntDesign } from "@expo/vector-icons";
import { useRealtimeCoins } from "@/hooks/useRealtimeCoins";
import AnimatedView from "@/components/atoms/AnimatedView";
import Card from "@/components/atoms/Card";
import Loader from "@/components/atoms/Loader";

type Coin = {
  id: string;
  username: string;
  userId: string;
  curso: string;
  amount: number;
};

interface CoinBoardProps {
  selectedCurso: string;
  onCursoChange: (curso: string) => void;
}

export default function CoinBoard({ selectedCurso, onCursoChange }: CoinBoardProps) {
  const { coins, loading, refresh } = useRealtimeCoins();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refresh();
    setRefreshing(false);
  };

  // Filtrar monedas según el curso seleccionado
  const filteredCoins = useMemo(() => {
    if (!selectedCurso) return coins;
    return coins.filter((coin: Coin) => coin.curso === selectedCurso);
  }, [coins, selectedCurso]);

  if (loading && coins.length === 0) {
    return <Loader text="Cargando monedas..." />;
  }

  if (coins.length === 0) {
    return (
      <AnimatedView animation="fadeIn" className="items-center justify-center py-12">
        <Ionicons name="wallet-outline" size={64} color="#888" />
        <Text className="text-gray-400 text-lg mt-4">No hay monedas disponibles</Text>
        <Text className="text-gray-500 text-sm mt-2">
          Los datos aparecerán aquí en tiempo real
        </Text>
      </AnimatedView>
    );
  }

  return (
    <View className="mt-2">
      {/* Dropdown de cursos */}
      <View className="bg-gray-800 rounded-lg mb-3 px-2">
        <Picker
          selectedValue={selectedCurso}
          onValueChange={(value) => onCursoChange(value)}
          dropdownIconColor="#61DAFB"
          style={{ color: "white" }}
        >
          <Picker.Item label="Todos los cursos" value="" />
          <Picker.Item label="1E1" value="1E1" />
          <Picker.Item label="1E2" value="1E2" />
          <Picker.Item label="2E1" value="2E1" />
          <Picker.Item label="2E2" value="2E2" />
          <Picker.Item label="3E1" value="3E1" />
          <Picker.Item label="3E2" value="3E2" />
        </Picker>
      </View>

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
          <AnimatedView animation="fadeInUp" delay={index * 100} className="mb-3">
            <Card variant="elevated">
              <View className="flex-row items-center justify-between">
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
                <View className="items-end flex-row gap-5">
                  <View className="flex-row items-center">
                    <AntDesign name="filter" size={16} color="#61DAFB" />
                    <Text className="text-react-blue text-xl font-bold ml-1">
                      {item.curso}
                    </Text>
                  </View>
                  <View className="flex-row items-center">
                    <FontAwesome5 name="coins" size={16} color="#61DAFB" />
                    <Text className="text-react-blue text-xl font-bold ml-1">
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
