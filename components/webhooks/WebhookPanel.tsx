import { useState } from "react";
import { View, Text, ScrollView, Modal, TouchableOpacity } from "react-native";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import StatusBadge from "@/components/ui/StatusBadge";
import AnimatedView from "@/components/ui/AnimatedView";
import WebhookActionButton from "@/components/webhooks/WebhookActionButton";
import { sendWebhook } from "@/services/webhook";
import { WEBHOOK_EVENTS, WebhookEventType } from "@/constants/config";
import { Ionicons } from "@expo/vector-icons";

type ActionMode = "event" | "data" | null;

interface WebhookAction {
  eventType: WebhookEventType;
  title: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  withData: boolean;
}

// Define your predefined webhook actions here
const WEBHOOK_ACTIONS: WebhookAction[] = [
  {
    eventType: "DEFAULT",
    title: "Ejecutar Evento",
    description: "Dispara un evento instantáneo en BotGhost",
    icon: "flash",
    color: "#F59E0B",
    withData: false,
  },
  {
    eventType: "DEFAULT",
    title: "Enviar Datos",
    description: "Envía información personalizada al bot",
    icon: "send",
    color: "#8B5CF6",
    withData: true,
  },
  // Add more predefined actions here as needed
  // Example:
  // {
  //   eventType: "USER_JOINED",
  //   title: "Usuario Unido",
  //   description: "Notifica que un usuario se unió",
  //   icon: "person-add",
  //   color: "#10B981",
  //   withData: false,
  // },
];

export default function WebhookPanel() {
  const [fields, setFields] = useState(Array(10).fill(""));
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [loading, setLoading] = useState(false);
  const [activeMode, setActiveMode] = useState<ActionMode>(null);
  const [currentAction, setCurrentAction] = useState<WebhookAction | null>(null);

  const handleChange = (index: number, value: string) => {
    const copy = [...fields];
    copy[index] = value;
    setFields(copy);
  };

  const handleActionPress = async (action: WebhookAction) => {
    if (action.withData) {
      // If action requires data, open modal
      setCurrentAction(action);
      setActiveMode("data");
    } else {
      // If action doesn't require data, execute immediately
      await executeWebhook(action, {});
    }
  };

  const executeWebhook = async (action: WebhookAction, payload?: Record<string, any>) => {
    setLoading(true);
    setActiveMode("event");
    setStatus({ type: null, message: "" });

    try {
      const eventId = WEBHOOK_EVENTS[action.eventType];
      
      if (!eventId) {
        setStatus({
          type: "error",
          message: "Event ID no configurado. Verifica las variables de entorno.",
        });
        setLoading(false);
        setActiveMode(null);
        return;
      }

      // Send webhook with or without data based on payload
      const ok = await sendWebhook(eventId, payload);

      if (ok) {
        setStatus({
          type: "success",
          message: "¡Evento ejecutado exitosamente en BotGhost!",
        });
      } else {
        setStatus({
          type: "error",
          message: "Error al ejecutar evento. Verifica tu configuración.",
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
    if (!currentAction) return;

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

      const eventId = WEBHOOK_EVENTS[currentAction.eventType];
      
      if (!eventId) {
        setStatus({
          type: "error",
          message: "Event ID no configurado. Verifica las variables de entorno.",
        });
        setLoading(false);
        return;
      }

      const ok = await sendWebhook(eventId, payload);

      if (ok) {
        setStatus({
          type: "success",
          message: "Datos enviados correctamente al webhook",
        });
        setFields(Array(10).fill(""));
        setActiveMode(null);
        setCurrentAction(null);
      } else {
        setStatus({
          type: "error",
          message: "Error al enviar datos. Verifica tu configuración.",
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

      {/* Render all predefined webhook actions */}
      {WEBHOOK_ACTIONS.map((action, index) => (
        <WebhookActionButton
          key={index}
          title={action.title}
          description={action.description}
          icon={action.icon}
          color={action.color}
          onPress={() => handleActionPress(action)}
          loading={loading && currentAction?.title === action.title}
          disabled={loading}
          delay={index * 100}
        />
      ))}

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
        onRequestClose={() => {
          setActiveMode(null);
          setCurrentAction(null);
        }}
      >
        <View className="flex-1 bg-black/80 justify-end">
          <View className="bg-dark-bg rounded-t-3xl p-6 max-h-[90%]">
            <View className="flex-row justify-between items-center mb-4">
              <View className="flex-row items-center">
                <Ionicons name="send" size={24} color="#8B5CF6" />
                <Text className="text-white text-xl font-bold ml-2">
                  {currentAction?.title || "Enviar Datos"}
                </Text>
              </View>
              <TouchableOpacity onPress={() => {
                setActiveMode(null);
                setCurrentAction(null);
              }}>
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
                onPress={() => {
                  setActiveMode(null);
                  setCurrentAction(null);
                }}
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
