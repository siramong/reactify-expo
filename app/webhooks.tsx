import AnimatedView from "@/components/ui/AnimatedView";
import Header from "@/components/ui/Header";
import WebhookPanel from "@/components/webhooks/WebhookPanel";
import { ScrollView } from "react-native";

export default function Webhooks() {
  return (
    <ScrollView className="flex-1 bg-dark-bg p-4 pt-10">
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
