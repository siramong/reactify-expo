import { ScrollView } from 'react-native';
import Header from '@/components/molecules/Header';
import WebhookPanel from '@/components/organisms/WebhookPanel';
import AnimatedView from '@/components/atoms/AnimatedView';


export default function Webhooks() {
return (
<ScrollView className="flex-1 bg-dark-bg p-4">
<AnimatedView>
<Header 
  title="Webhook BotGhost" 
  subtitle="Envía datos personalizados a tu bot de Discord"
/>
<WebhookPanel />
</AnimatedView>
</ScrollView>
);
}