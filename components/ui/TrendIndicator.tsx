import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AnimatedView from "@/components/ui/AnimatedView";

interface TrendIndicatorProps {
  value: number;
  label: string;
  trend?: "up" | "down" | "neutral";
  color?: string;
}

export default function TrendIndicator({
  value,
  label,
  trend = "neutral",
  color = "#9CA3AF",
}: TrendIndicatorProps) {
  const trendIcons = {
    up: "trending-up" as keyof typeof Ionicons.glyphMap,
    down: "trending-down" as keyof typeof Ionicons.glyphMap,
    neutral: "remove" as keyof typeof Ionicons.glyphMap,
  };

  const trendColors = {
    up: "#10B981",
    down: "#EF4444",
    neutral: "#9CA3AF",
  };

  return (
    <AnimatedView animation="fadeIn">
      <View className="flex-row items-center">
        <Ionicons
          name={trendIcons[trend]}
          size={16}
          color={trendColors[trend]}
        />
        <Text className="text-sm font-semibold ml-1" style={{ color }}>
          {value}
        </Text>
        <Text className="text-xs text-gray-500 ml-2">{label}</Text>
      </View>
    </AnimatedView>
  );
}
