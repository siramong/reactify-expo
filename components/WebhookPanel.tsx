import { useState } from "react";
import { View, Text, ScrollView, Modal, TouchableOpacity } from "react-native";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Card from "@/components/Card";
import StatusBadge from "@/components/StatusBadge";
import AnimatedView from "@/components/AnimatedView";
import WebhookActionButton from "@/components/WebhookActionButton";
import { sendWebhook } from "@/services/webhook";
import { Ionicons } from "@expo/vector-icons";

type ActionMode = "event" | "data" | null;

export default function WebhookPanel() {
  const [fields, setFields] = useState(Array(10).fill(""));
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [loading, setLoading] = useState(false);
  const [activeMode, setActiveMode] = useState<ActionMode>(null);

  const handleChange = (index: number, value: string) => {
    const copy = [...fields];
    copy[index] = value;
    setFields(copy);
  };

  const handleEventTrigger = async () => {
    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      // Trigger a simple event without data
      const ok = await sendWebhook("uq5r1fytr5v2gmslm9ey", { 
        event: "trigger",
        timestamp: new Date().toISOString() 
      });

      if (ok) {
        setStatus({
          type: "success",
          message: "¡Evento ejecutado exitosamente en BotGhost!",
        });
      } else {
        setStatus({
          type: "error",
          message: "Error al ejecutar evento. Intenta nuevamente.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Error inesperado al ejecutar el evento",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDataSubmit = async () => {
    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const payload: any = {};
      fields.forEach((val, i) => {
        if (val.trim()) {
          payload[`field${i + 1}`] = val;
        }
      });

      if (Object.keys(payload).length === 0) {
        setStatus({
          type: "error",
          message: "Por favor, completa al menos un campo",
        });
        setLoading(false);
        return;
      }

      const ok = await sendWebhook("uq5r1fytr5v2gmslm9ey", payload);

      if (ok) {
        setStatus({
          type: "success",
          message: "Datos enviados correctamente al webhook",
        });
        setFields(Array(10).fill(""));
        setActiveMode(null);
      } else {
        setStatus({
          type: "error",
          message: "Error al enviar datos. Intenta nuevamente.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Error inesperado al procesar la solicitud",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <View>
      <Card variant="outlined" className="mb-6">
        <View className="flex-row items-center mb-2">
          <Ionicons name="information-circle" size={24} color="#61DAFB" />
          <Text className="text-white text-lg font-semibold ml-2">
            Control de Discord
          </Text>
        </View>
        <Text className="text-gray-400 text-sm">
          Ejecuta eventos o envía datos personalizados a tu bot de Discord con un solo toque.
        </Text>
      </Card>

      {/* Main Action Buttons */}
      <WebhookActionButton
        title="Ejecutar Evento"
        description="Dispara un evento instantáneo en BotGhost"
        icon="flash"
        color="#F59E0B"
        onPress={handleEventTrigger}
        loading={loading && activeMode === "event"}
        disabled={loading}
        delay={0}
      />

      <WebhookActionButton
        title="Enviar Datos"
        description="Envía información personalizada al bot"
        icon="send"
        color="#8B5CF6"
        onPress={() => setActiveMode("data")}
        disabled={loading}
        delay={100}
      />

      {status.type && (
        <AnimatedView animation="bounceIn" className="mt-2 mb-4">
          <StatusBadge type={status.type} message={status.message} />
        </AnimatedView>
      )}

      {/* Data Entry Modal */}
      <Modal
        visible={activeMode === "data"}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setActiveMode(null)}
      >
        <View className="flex-1 bg-black/80 justify-end">
          <View className="bg-dark-bg rounded-t-3xl p-6" style={{ maxHeight: "90%" }}>
            <View className="flex-row justify-between items-center mb-4">
              <View className="flex-row items-center">
                <Ionicons name="send" size={24} color="#8B5CF6" />
                <Text className="text-white text-xl font-bold ml-2">
                  Enviar Datos
                </Text>
              </View>
              <TouchableOpacity onPress={() => setActiveMode(null)}>
                <Ionicons name="close-circle" size={28} color="#666" />
              </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
              <Text className="text-gray-400 text-sm mb-4">
                Completa los campos que desees enviar al bot
              </Text>

              {fields.map((f, i) => (
                <AnimatedView key={i} delay={i * 30}>
                  <Input
                    label={`Campo ${i + 1}`}
                    placeholder={`Valor del campo ${i + 1}`}
                    value={f}
                    onChangeText={(v: string) => handleChange(i, v)}
                  />
                </AnimatedView>
              ))}

              <Button
                title={loading ? "Enviando..." : "Enviar Datos"}
                onPress={handleDataSubmit}
                loading={loading}
                disabled={loading}
                variant="primary"
                size="lg"
              />

              <Button
                title="Cancelar"
                onPress={() => setActiveMode(null)}
                variant="outline"
                size="md"
              />
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}
