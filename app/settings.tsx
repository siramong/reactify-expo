import { View, Text, Image, ScrollView } from 'react-native';
import AnimatedView from '@/components/ui/AnimatedView';
import Card from '@/components/ui/Card';
import Header from '@/components/ui/Header';
import { Ionicons } from '@expo/vector-icons';

export default function Settings() {
  return (
    <ScrollView className="flex-1 bg-dark-bg p-5 pt-12">
      <AnimatedView>
        <Header 
          title="Configuración" 
          subtitle="Información y tecnologías de la aplicación"
          icon="settings"
        />

        <Card variant="elevated" className="mb-5">
          <View className="items-center py-8">
            <View
              className="rounded-3xl p-4 mb-4"
              style={{
                backgroundColor: "#3ECF8E20",
                shadowColor: "#3ECF8E",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
              }}
            >
              <Image
                source={require("@/assets/images/supabase-logo.png")}
                style={{ width: 100, height: 100, resizeMode: "contain" }}
              />
            </View>
            <View className="flex-row items-center mt-2">
              <View 
                className="w-3 h-3 rounded-full mr-2"
                style={{ 
                  backgroundColor: "#10B981",
                  shadowColor: "#10B981",
                  shadowOffset: { width: 0, height: 0 },
                  shadowOpacity: 0.8,
                  shadowRadius: 4,
                }}
              />
              <Text className="text-white text-xl font-bold">
                Conectado a Supabase
              </Text>
            </View>
            <Text className="text-gray-400 text-sm mt-2">
              Base de datos en tiempo real activa
            </Text>
          </View>
        </Card>

        <Card variant="elevated" className="mb-5">
          <View className="flex-row items-center mb-4">
            <View 
              className="rounded-2xl p-2 mr-3"
              style={{ backgroundColor: "#3B82F620" }}
            >
              <Ionicons name="construct" size={24} color="#3B82F6" />
            </View>
            <Text className="text-white text-xl font-bold">
              Stack Tecnológico
            </Text>
          </View>
          <View className="space-y-2">
            <View className="flex-row items-center py-3 border-b-2 border-dark-border">
              <View 
                className="rounded-xl p-2 mr-3"
                style={{ backgroundColor: "#61DAFB20" }}
              >
                <Ionicons name="logo-react" size={24} color="#61DAFB" />
              </View>
              <View className="flex-1">
                <Text className="text-white font-semibold text-base">React Native & Expo</Text>
                <Text className="text-gray-400 text-xs mt-0.5">Framework multiplataforma</Text>
              </View>
            </View>
            <View className="flex-row items-center py-3 border-b-2 border-dark-border">
              <View 
                className="rounded-xl p-2 mr-3"
                style={{ backgroundColor: "#3ECF8E20" }}
              >
                <Ionicons name="server" size={24} color="#3ECF8E" />
              </View>
              <View className="flex-1">
                <Text className="text-white font-semibold text-base">Supabase</Text>
                <Text className="text-gray-400 text-xs mt-0.5">Backend y base de datos</Text>
              </View>
            </View>
            <View className="flex-row items-center py-3 border-b-2 border-dark-border">
              <View 
                className="rounded-xl p-2 mr-3"
                style={{ backgroundColor: "#38BDF820" }}
              >
                <Ionicons name="color-palette" size={24} color="#38BDF8" />
              </View>
              <View className="flex-1">
                <Text className="text-white font-semibold text-base">NativeWind</Text>
                <Text className="text-gray-400 text-xs mt-0.5">Tailwind CSS para React Native</Text>
              </View>
            </View>
            <View className="flex-row items-center py-3">
              <View 
                className="rounded-xl p-2 mr-3"
                style={{ backgroundColor: "#F59E0B20" }}
              >
                <Ionicons name="flash" size={24} color="#F59E0B" />
              </View>
              <View className="flex-1">
                <Text className="text-white font-semibold text-base">Realtime</Text>
                <Text className="text-gray-400 text-xs mt-0.5">Actualizaciones en tiempo real</Text>
              </View>
            </View>
          </View>
        </Card>

        <Card variant="outlined">
          <View className="flex-row items-center mb-3">
            <View 
              className="rounded-2xl p-2 mr-3"
              style={{ backgroundColor: "#8B5CF620" }}
            >
              <Ionicons name="information-circle" size={24} color="#8B5CF6" />
            </View>
            <Text className="text-white text-xl font-bold">
              Acerca de
            </Text>
          </View>
          <Text className="text-gray-400 text-sm leading-6">
            Reactify Dashboard es una aplicación moderna que demuestra la
            integración de React Native, Expo y Supabase con webhooks de Discord,
            presentando una interfaz elegante y animaciones fluidas.
          </Text>
          <View className="flex-row items-center justify-between mt-5 pt-4 border-t-2 border-dark-border">
            <Text className="text-gray-500 text-sm font-semibold">Versión 2.0.0</Text>
            <View className="flex-row items-center">
              <Ionicons name="checkmark-circle" size={16} color="#10B981" />
              <Text className="text-green-500 text-xs ml-1 font-semibold">Actualizado</Text>
            </View>
          </View>
        </Card>
      </AnimatedView>
    </ScrollView>
  );
}
