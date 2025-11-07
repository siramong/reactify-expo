import AnimatedView from "@/components/AnimatedView";
import Header from "@/components/Header";
import WebhookPanel from "@/components/WebhookPanel";
import { ScrollView } from "react-native";

export default function Webhooks() {
  return (
    <ScrollView className="flex-1 bg-background-primary p-4 pt-10">
      <AnimatedView>
        <Header
          title="Discord"
          subtitle="Envía acciones personalizadas al bot de Discord"
          icon="logo-discord"
        />
        <WebhookPanel />
      </AnimatedView>
    </ScrollView>
  );
}
