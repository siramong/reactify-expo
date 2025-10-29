import { View, Text, ScrollView } from "react-native";
import AnimatedView from "@/components/atoms/AnimatedView";
import CoinBoard from "@/components/organisms/CoinBoard";
import "@/global.css";

export default function Index() {
  return (
    <ScrollView className="flex-1 bg-[#0D1117] p-4">
      <AnimatedView>
        <Text className="text-[#61DAFB] text-3xl font-bold mb-3">
          Reactify Dashboard
        </Text>
        <CoinBoard />
      </AnimatedView>
    </ScrollView>
  );
}
