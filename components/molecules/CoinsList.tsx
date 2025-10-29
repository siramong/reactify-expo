import React from 'react';
import { View, Text } from 'react-native';
import { Coin } from '../../services/supabase';

export default function CoinRow({ coin }: { coin: Coin }) {
  return (
    <View className="flex-row justify-between items-center p-3 bg-white rounded-xl shadow-md mb-2">
      <View>
        <Text className="text-sm text-gray-500">{coin.username}</Text>
        <Text className="font-semibold">{coin.userId}</Text>
      </View>
      <View>
        <Text className="text-lg font-bold text-reactBlue">{coin.amount}</Text>
      </View>
    </View>
  );
}