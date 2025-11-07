import { useState } from "react";
import { View, Text, ScrollView, Modal, TouchableOpacity } from "react-native";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import StatusBadge from "@/components/ui/StatusBadge";
import AnimatedView from "@/components/ui/AnimatedView";
import WebhookActionButton from "@/components/webhooks/WebhookActionButton";
import { sendWebhook } from "@/services/webhook";
import { WEBHOOK_EVENTS } from "@/constants/config";
import { Ionicons } from "@expo/vector-icons";

type ActionMode = "event" | "data" | null;

interface WebhookEventConfig {
  eventId: string;
  withData: boolean;
}

export default function WebhookPanel() {
  const [fields, setFields] = useState(Array(10).fill(""));
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [loading, setLoading] = useState(false);
  const [activeMode, setActiveMode] = useState<ActionMode>(null);
  const [eventConfig, setEventConfig] = useState<WebhookEventConfig>({
    eventId: WEBHOOK_EVENTS.DEFAULT || "",
    withData: false,
  });

  const handleChange = (index: number, value: string) => {
    const copy = [...fields];
    copy[index] = value;
    setFields(copy);
  };

  const handleEventIdChange = (value: string) => {
    setEventConfig({ ...eventConfig, eventId: value });
  };

  const handleEventTrigger = async () => {
    setLoading(true);
    setActiveMode("event");
    setStatus({ type: null, message: "" });

    try {
      if (!eventConfig.eventId.trim()) {
        setStatus({
          type: "error",
          message: "Por favor, ingresa un Event ID válido",
        });
        setLoading(false);
        setActiveMode(null);
        return;
      }

      // Trigger a simple event without data
      const ok = await sendWebhook(eventConfig.eventId);

      if (ok) {
        setStatus({
          type: "success",
          message: "¡Evento ejecutado exitosamente en BotGhost!",
        });
      } else {
        setStatus({
          type: "error",
          message: "Error al ejecutar evento. Verifica tu Event ID y configuración.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Error inesperado al ejecutar el evento",
      });
    } finally {
      setLoading(false);
      setActiveMode(null);
    }
  };

  const handleDataSubmit = async () => {
    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      if (!eventConfig.eventId.trim()) {
        setStatus({
          type: "error",
          message: "Por favor, ingresa un Event ID válido",
        });
        setLoading(false);
        return;
      }

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

      const ok = await sendWebhook(eventConfig.eventId, payload);

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
          message: "Error al enviar datos. Verifica tu Event ID y configuración.",
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

      {/* Event ID Configuration */}
      <Card variant="default" className="mb-4">
        <View className="flex-row items-center mb-3">
          <Ionicons name="settings-outline" size={20} color="#10B981" />
          <Text className="text-white text-base font-semibold ml-2">
            Configuración del Evento
          </Text>
        </View>
        <Input
          label="Event ID"
          placeholder="Ingresa tu Event ID de BotGhost"
          value={eventConfig.eventId}
          onChangeText={handleEventIdChange}
        />
        <Text className="text-gray-500 text-xs mt-1">
          El Event ID es único para cada acción en BotGhost
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
          <View className="bg-dark-bg rounded-t-3xl p-6 max-h-[90%]">
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
                Configura el Event ID y completa los campos que desees enviar al bot
              </Text>

              {/* Event ID in Modal */}
              <View className="mb-4 p-4 bg-dark-card rounded-xl border border-gray-700">
                <View className="flex-row items-center mb-2">
                  <Ionicons name="settings-outline" size={18} color="#10B981" />
                  <Text className="text-white text-sm font-semibold ml-2">
                    Event ID
                  </Text>
                </View>
                <Input
                  placeholder="Event ID de BotGhost"
                  value={eventConfig.eventId}
                  onChangeText={handleEventIdChange}
                />
              </View>

              <Text className="text-gray-400 text-sm mb-3 font-semibold">
                Datos a enviar:
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
