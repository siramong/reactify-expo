import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';


export default function Layout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: '#61DAFB',
      tabBarInactiveTintColor: '#666',
      tabBarStyle: {
        backgroundColor: '#161B22',
        borderTopColor: '#30363D',
        borderTopWidth: 1,
        paddingTop: 5,
        paddingBottom: 5,
        height: 60,
      },
      tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: '600',
      },
      headerShown: false,
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              color={color}
              size={24}
            />
          )
        }}
      />
      <Tabs.Screen
        name="coins"
        options={{
          title: 'Coins',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "logo-usd" : "logo-usd"}
              color={color}
              size={24}
            />
          )
        }}
      />
      <Tabs.Screen
        name="webhooks"
        options={{
          title: 'Webhooks',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "send" : "send-outline"}
              color={color}
              size={24}
            />
          )
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Ajustes',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "settings" : "settings-outline"}
              color={color}
              size={24}
            />
          )
        }}
      />
    </Tabs>
  );
}