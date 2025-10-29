import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';


export default function Layout() {
return (
<Tabs screenOptions={{
tabBarActiveTintColor: '#61DAFB',
tabBarStyle: { backgroundColor: '#1E1E1E' },
headerShown: false,
}}>
<Tabs.Screen name="index" options={{ title: 'Inicio', tabBarIcon: ({color}) => <Ionicons name="home" color={color} size={22}/> }} />
<Tabs.Screen name="coins" options={{ title: 'Coins', tabBarIcon: ({color}) => <Ionicons name="logo-usd" color={color} size={22}/> }} />
<Tabs.Screen name="webhooks" options={{ title: 'Webhooks', tabBarIcon: ({color}) => <Ionicons name="send" color={color} size={22}/> }} />
<Tabs.Screen name="settings" options={{ title: 'Ajustes', tabBarIcon: ({color}) => <Ionicons name="settings" color={color} size={22}/> }} />
</Tabs>
);
}