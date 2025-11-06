import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface CourseSelectorProps {
  courses: string[];
  selected: string;
  onSelect: (value: string) => void;
}

const CURSO_COLORS: Record<string, string> = {
  Todos: "#61DAFB",
  "1E1": "#3B82F6",
  "1E2": "#10B981",
  "2E1": "#FACC15",
  "2E2": "#F97316",
  "3E1": "#EF4444",
  "3E2": "#8B5CF6",
};

const CURSO_ICONS: Record<string, keyof typeof Ionicons.glyphMap> = {
  Todos: "apps",
  "1E1": "star",
  "1E2": "star-outline",
  "2E1": "flame",
  "2E2": "flash",
  "3E1": "rocket",
  "3E2": "trophy",
};

export default function CourseSelector({
  courses,
  selected,
  onSelect,
}: CourseSelectorProps) {
  return (
    <View className="mb-4">
      <View className="flex-row items-center mb-3 ml-1">
        <Ionicons name="filter" size={18} color="#9CA3AF" />
        <Text className="text-gray-300 text-sm ml-2 font-semibold uppercase tracking-wide">
          Filtrar por curso
        </Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="flex-row"
      >
        {courses.map((curso) => {
          const isActive = selected === curso;
          const color = CURSO_COLORS[curso] || "#9CA3AF";
          const icon = CURSO_ICONS[curso] || "school";

          return (
            <TouchableOpacity
              key={curso}
              onPress={() => onSelect(curso)}
              className="px-4 py-3 mr-2 rounded-xl border-2 flex-row items-center"
              style={{
                backgroundColor: isActive ? color + "20" : "#1F2937",
                borderColor: isActive ? color : "#374151",
                shadowColor: isActive ? color : "transparent",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
              }}
            >
              <Ionicons 
                name={icon} 
                size={16} 
                color={isActive ? color : "#9CA3AF"}
                style={{ marginRight: 6 }}
              />
              <Text
                className="text-sm font-bold"
                style={{ color: isActive ? color : "#D1D5DB" }}
              >
                {curso}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
