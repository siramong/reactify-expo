import { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";
import Card from "@/components/atoms/Card";
import StatusBadge from "@/components/atoms/StatusBadge";
import AnimatedView from "@/components/atoms/AnimatedView";
import { sendWebhook } from "@/services/webhook";
import { Ionicons } from "@expo/vector-icons";

export default function WebhookPanel() {
  const [fields, setFields] = useState(Array(10).fill(""));
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (index: number, value: string) => {
    const copy = [...fields];
    copy[index] = value;
    setFields(copy);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setStatus({ type: null, message: '' });
    
    try {
      const payload: any = {};
      fields.forEach((val, i) => {
        if (val.trim()) {
          payload[`field${i + 1}`] = val;
        }
      });

      if (Object.keys(payload).length === 0) {
        setStatus({ type: 'error', message: 'Por favor, completa al menos un campo' });
        setLoading(false);
        return;
      }

      const ok = await sendWebhook("uq5r1fytr5v2gmslm9ey", payload);
      
      if (ok) {
        setStatus({ type: 'success', message: 'Datos enviados correctamente al webhook' });
        // Clear fields after successful send
        setFields(Array(10).fill(""));
      } else {
        setStatus({ type: 'error', message: 'Error al enviar datos. Intenta nuevamente.' });
      }
    } catch {
      setStatus({ type: 'error', message: 'Error inesperado al procesar la solicitud' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <View>
      <Card variant="outlined" className="mb-4">
        <View className="flex-row items-center mb-2">
          <Ionicons name="information-circle" size={24} color="#61DAFB" />
          <Text className="text-white text-lg font-semibold ml-2">Información</Text>
        </View>
        <Text className="text-gray-400 text-sm">
          Completa los campos que deseas enviar al webhook de BotGhost. 
          Los campos vacíos serán ignorados automáticamente.
        </Text>
      </Card>

      <ScrollView showsVerticalScrollIndicator={false} className="pb-20">
        {fields.map((f, i) => (
          <AnimatedView key={i} delay={i * 50}>
            <Input
              label={`Campo ${i + 1}`}
              placeholder={`Ingresa el valor para el campo ${i + 1}`}
              value={f}
              onChangeText={(v: string) => handleChange(i, v)}
            />
          </AnimatedView>
        ))}

        <Button 
          title={loading ? "Enviando..." : "Enviar al Webhook"} 
          onPress={handleSubmit}
          loading={loading}
          disabled={loading}
        />

        {status.type && (
          <AnimatedView animation="bounceIn" className="mt-4">
            <StatusBadge 
              type={status.type} 
              message={status.message}
            />
          </AnimatedView>
        )}
      </ScrollView>
    </View>
  );
}
