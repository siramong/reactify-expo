import React from 'react';
import { View, Text } from 'react-native';
import { Coin } from '@/services/supabase';
import Card from '@/components/atoms/Card';
import { Ionicons } from '@expo/vector-icons';

export default function CoinRow({ coin }: { coin: Coin }) {
  return (
    <Card variant="elevated">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center flex-1">
          <View className="bg-react-blue/20 rounded-full p-3 mr-3">
            <Ionicons name="person" size={24} color="#61DAFB" />
          </View>
          <View className="flex-1">
            <Text className="text-white text-lg font-semibold">
              {coin.username}
            </Text>
            <Text className="text-gray-400 text-sm">
              Usuario #{coin.userId.slice(0, 8)}
            </Text>
          </View>
        </View>
        <View className="items-end">
          <View className="flex-row items-center">
            <Ionicons name="logo-usd" size={16} color="#61DAFB" />
            <Text className="text-react-blue text-xl font-bold ml-1">
              {coin.amount}
            </Text>
          </View>
          <Text className="text-gray-500 text-xs mt-1">coins</Text>
        </View>
      </View>
    </Card>
  );
}