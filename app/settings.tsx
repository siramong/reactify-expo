import { View, Text, Image, ScrollView } from 'react-native';
import AnimatedView from '@/components/AnimatedView';
import Card from '@/components/Card';
import Header from '@/components/Header';
import { Ionicons } from '@expo/vector-icons';

export default function Settings() {
  return (
    <ScrollView className="flex-1 bg-background-primary p-4 pt-10">
      <AnimatedView>
        <Header 
          title="Configuración" 
          subtitle="Información de la aplicación"
          icon="settings"
        />

        <Card variant="glass" className="mb-4">
          <View className="items-center py-6">
            <Image
              source={require("@/assets/images/supabase-logo.png")}
              style={{ width: 120, height: 120, resizeMode: "contain" }}
            />
            <View className="flex-row items-center mt-4">
              <View className="w-3 h-3 rounded-full bg-green-500 mr-2" />
              <Text className="text-white text-lg font-semibold">
                Conectado a Supabase
              </Text>
            </View>
            <Text className="text-slate-400 text-sm mt-2">
              Base de datos en tiempo real
            </Text>
          </View>
        </Card>

        <Card variant="glass" className="mb-4">
          <View className="flex-row items-center mb-3">
            <Ionicons name="build" size={24} color="#7DD3FC" />
            <Text className="text-white text-lg font-semibold ml-2">
              Tecnologías
            </Text>
          </View>
          <View className="space-y-2">
            <View className="flex-row items-center py-2 border-b border-glass-border-light">
              <Ionicons name="logo-react" size={20} color="#7DD3FC" />
              <Text className="text-slate-300 ml-3">React Native & Expo</Text>
            </View>
            <View className="flex-row items-center py-2 border-b border-glass-border-light">
              <Ionicons name="server" size={20} color="#7DD3FC" />
              <Text className="text-slate-300 ml-3">
                Supabase (Backend & DB)
              </Text>
            </View>
            <View className="flex-row items-center py-2 border-b border-glass-border-light">
              <Ionicons name="color-palette" size={20} color="#7DD3FC" />
              <Text className="text-slate-300 ml-3">
                NativeWind (Tailwind CSS)
              </Text>
            </View>
            <View className="flex-row items-center py-2">
              <Ionicons name="flash" size={20} color="#7DD3FC" />
              <Text className="text-slate-300 ml-3">
                Real-time Subscriptions
              </Text>
            </View>
          </View>
        </Card>

        <Card variant="glass">
          <View className="flex-row items-center mb-3">
            <Ionicons name="information-circle" size={24} color="#7DD3FC" />
            <Text className="text-white text-lg font-semibold ml-2">
              Acerca de
            </Text>
          </View>
          <Text className="text-slate-400 text-sm">
            Reactify Dashboard es una aplicación de ejemplo que demuestra la
            integración de React Native, Expo, Supabase y webhooks de Discord
            con una interfaz moderna con estilo Liquid Glass y animaciones fluidas.
          </Text>
          <View className="flex-row items-center mt-4 pt-4 border-t border-glass-border-light">
            <Text className="text-slate-500 text-xs">Versión 1.0.0</Text>
          </View>
        </Card>
      </AnimatedView>
    </ScrollView>
  );
}
