import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

interface CourseSelectorProps {
  courses: string[];
  selected: string;
  onSelect: (value: string) => void;
}

const CURSO_COLORS: Record<string, string> = {
  Todos: "#61DAFB",  // celeste
  "1E1": "#3B82F6",
  "1E2": "#10B981",
  "2E1": "#FACC15",
  "2E2": "#F97316",
  "3E1": "#EF4444",
  "3E2": "#8B5CF6",
};

export default function CourseSelector({
  courses,
  selected,
  onSelect,
}: CourseSelectorProps) {
  return (
    <View className="mb-3">
      <Text className="text-gray-300 text-sm mb-2 ml-1">Selecciona un curso</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="flex-row"
      >
        {courses.map((curso) => {
          const isActive = selected === curso;
          const color = CURSO_COLORS[curso] || "#9CA3AF";

          return (
            <TouchableOpacity
              key={curso}
              onPress={() => onSelect(curso)}
              className={`px-4 py-2 mr-2 rounded-full border`}
              style={{
                backgroundColor: isActive ? color : "#1F2937",
                borderColor: isActive ? color : "#374151",
              }}
            >
              <Text
                className={`text-sm font-semibold`}
                style={{ color: isActive ? "#FFFFFF" : "#D1D5DB" }}
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
