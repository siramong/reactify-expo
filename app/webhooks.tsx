import { ScrollView, Text } from 'react-native';
import WebhookPanel from '@/components/organisms/WebhookPanel';


export default function Webhooks() {
return (
<ScrollView className="flex-1 bg-[#0D1117] p-4">
<Text className="text-[#61DAFB] text-2xl font-semibold mb-3">Enviar datos al BotGhost Webhook</Text>
<WebhookPanel />
</ScrollView>
);
}