import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

interface CourseSelectorProps {
  courses: string[];
  selected: string;
  onSelect: (value: string) => void;
}

export default function CourseSelector({
  courses,
  selected,
  onSelect,
}: CourseSelectorProps) {
  return (
    <View className="mb-3">
      <Text className="text-gray-300 text-sm mb-2 ml-1">
        Selecciona un curso
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="flex-row"
      >
        {courses.map((curso) => {
          const isActive = selected === curso;
          return (
            <TouchableOpacity
              key={curso}
              onPress={() => onSelect(curso)}
              className={`px-4 py-2 mr-2 rounded-full border ${
                isActive
                  ? "bg-react-blue border-react-blue"
                  : "border-gray-600 bg-gray-800"
              }`}
            >
              <Text
                className={`text-sm ${
                  isActive ? "text-white font-semibold" : "text-gray-300"
                }`}
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
