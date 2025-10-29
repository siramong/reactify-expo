import AnimatedView from "@/components/AnimatedView";
import Input from "@/components/Input";
import { View } from "react-native";

interface WebhookFormProps {
  fields: string[];
  onFieldChange: (index: number, value: string) => void;
  maxFields?: number;
}

export default function WebhookForm({
  fields,
  onFieldChange,
  maxFields = 10,
}: WebhookFormProps) {
  return (
    <View>
      {fields.slice(0, maxFields).map((field, index) => (
        <AnimatedView key={index} delay={index * 50}>
          <Input
            label={`Campo ${index + 1}`}
            placeholder={`Ingresa el valor para el campo ${index + 1}`}
            value={field}
            onChangeText={(value) => onFieldChange(index, value)}
          />
        </AnimatedView>
      ))}
    </View>
  );
}
