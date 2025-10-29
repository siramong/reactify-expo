import { View, Text, FlatList, RefreshControl } from "react-native";
import { useRealtimeCoins } from "@/hooks/useRealtimeCoins";
import AnimatedView from "@/components/atoms/AnimatedView";
import Card from "@/components/atoms/Card";
import Loader from "@/components/atoms/Loader";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function CoinBoard() {
  const { coins, loading, refresh } = useRealtimeCoins();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refresh();
    setRefreshing(false);
  };

  if (loading && coins.length === 0) {
    return <Loader text="Cargando coins..." />;
  }

  if (coins.length === 0) {
    return (
      <AnimatedView animation="fadeIn" className="items-center justify-center py-12">
        <Ionicons name="wallet-outline" size={64} color="#888" />
        <Text className="text-gray-400 text-lg mt-4">No hay coins disponibles</Text>
        <Text className="text-gray-500 text-sm mt-2">Los datos aparecerán aquí en tiempo real</Text>
      </AnimatedView>
    );
  }

  return (
    <View className="mt-2">
      <FlatList
        data={coins}
        keyExtractor={(item) => item.id}
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
            delay={index * 100}
            className="mb-3"
          >
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
                      Usuario #{item.userId.slice(0, 8)}
                    </Text>
                  </View>
                </View>
                <View className="items-end">
                  <View className="flex-row items-center">
                    <Ionicons name="logo-usd" size={16} color="#61DAFB" />
                    <Text className="text-react-blue text-xl font-bold ml-1">
                      {item.amount}
                    </Text>
                  </View>
                  <Text className="text-gray-500 text-xs mt-1">coins</Text>
                </View>
              </View>
            </Card>
          </AnimatedView>
        )}
      />
    </View>
  );
}
