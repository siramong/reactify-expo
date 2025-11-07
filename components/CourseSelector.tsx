import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface CourseSelectorProps {
  courses: string[];
  selected: string;
  onSelect: (value: string) => void;
}

const CURSO_COLORS: Record<string, string> = {
  Todos: "#7DD3FC",
  "1E1": "#60A5FA",
  "1E2": "#34D399",
  "2E1": "#FBBF24",
  "2E2": "#F97316",
  "3E1": "#F87171",
  "3E2": "#A78BFA",
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
        <Ionicons name="filter" size={18} color="#94A3B8" />
        <Text className="text-slate-300 text-sm ml-2 font-semibold uppercase tracking-wide">
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
          const color = CURSO_COLORS[curso] || "#94A3B8";
          const icon = CURSO_ICONS[curso] || "school";

          return (
            <TouchableOpacity
              key={curso}
              onPress={() => onSelect(curso)}
              className="px-5 py-3 mr-2 rounded-2xl border flex-row items-center"
              style={{
                backgroundColor: isActive ? color + "25" : 'rgba(255, 255, 255, 0.08)',
                borderColor: isActive ? color : 'rgba(255, 255, 255, 0.1)',
                shadowColor: isActive ? color : "transparent",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.4,
                shadowRadius: 8,
              }}
            >
              <Ionicons 
                name={icon} 
                size={16} 
                color={isActive ? color : "#94A3B8"}
                className="mr-1.5"
              />
              <Text
                className="text-sm font-bold ml-1"
                style={{ color: isActive ? color : "#CBD5E1" }}
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
