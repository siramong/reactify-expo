import AnimatedView from "@/components/AnimatedView";
import Header from "@/components/Header";
import WebhookPanel from "@/components/WebhookPanel";
import { ScrollView } from "react-native";

export default function Webhooks() {
  return (
    <ScrollView className="flex-1 bg-dark-bg p-4 pt-10">
      <AnimatedView>
        <Header
          title="Administración Discord"
          subtitle="Envía acciones personalizados al bot de Discord"
        />
        <WebhookPanel />
      </AnimatedView>
    </ScrollView>
  );
}
