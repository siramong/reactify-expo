import { View, Text, FlatList } from "react-native";
import { useRealtimeCoins } from "@/hooks/useRealtimeCoins";
import AnimatedView from "@/components/atoms/AnimatedView";

export default function CoinBoard() {
  const { coins } = useRealtimeCoins();

  return (
    <View className="mt-2">
      <FlatList
        data={coins}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AnimatedView className="bg-[#161B22] rounded-xl p-3 mb-2">
            <Text className="text-white text-lg">{item.username}</Text>
            <Text className="text-[#61DAFB] text-md">{item.amount} coins</Text>
          </AnimatedView>
        )}
      />
    </View>
  );
}
