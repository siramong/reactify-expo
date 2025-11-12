import AnimatedView from "@/components/ui/AnimatedView";
import Header from "@/components/ui/Header";
import WebhookPanel from "@/components/webhooks/WebhookPanel";
import { ScrollView } from "react-native";

export default function Webhooks() {
  return (
    <ScrollView className="flex-1 bg-dark-bg p-5 pt-12">
      <AnimatedView>
        <Header
          title="Discord"
          subtitle="Control de bot y eventos personalizados"
          icon="logo-discord"
        />
        <WebhookPanel />
      </AnimatedView>
    </ScrollView>
  );
}
