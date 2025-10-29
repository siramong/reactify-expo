import { useState } from "react";
import { View, Text } from "react-native";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";
import { sendWebhook } from "@/services/webhook";

export default function WebhookPanel() {
  const [fields, setFields] = useState(Array(10).fill(""));
  const [status, setStatus] = useState("");

  const handleChange = (index: number, value: string) => {
    const copy = [...fields];
    copy[index] = value;
    setFields(copy);
  };

  const handleSubmit = async () => {
    const payload: any = {};
    fields.forEach((val, i) => (payload[`field${i + 1}`] = val));
    const ok = await sendWebhook("uq5r1fytr5v2gmslm9ey", payload);
    setStatus(ok ? "✅ Enviado correctamente" : "❌ Error al enviar");
  };

  return (
    <View>
      {fields.map((f, i) => (
        <Input
          key={i}
          placeholder={`Campo ${i + 1}`}
          value={f}
          onChangeText={(v: string) => handleChange(i, v)}
        />
      ))}
      <Button title="Enviar al Webhook" onPress={handleSubmit} />
      {status && <Text className="text-white mt-2">{status}</Text>}
    </View>
  );
}
