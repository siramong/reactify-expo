import { ScrollView } from 'react-native';
import Header from '@/components/molecules/Header';
import WebhookPanel from '@/components/organisms/WebhookPanel';
import AnimatedView from '@/components/atoms/AnimatedView';


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