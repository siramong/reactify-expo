import { ScrollView } from "react-native";
import AnimatedView from "@/components/atoms/AnimatedView";
import Header from "@/components/molecules/Header";
import CoinBoard from "@/components/organisms/CoinBoard";
import "@/global.css";

export default function Index() {
  return (
    <ScrollView className="flex-1 bg-dark-bg p-4">
      <AnimatedView>
        <Header 
          title="Reactify Dashboard" 
          subtitle="Monitorea tus coins en tiempo real"
        />
        <CoinBoard />
      </AnimatedView>
    </ScrollView>
  );
}
