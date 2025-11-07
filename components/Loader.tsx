import { ActivityIndicator, Text } from "react-native";
import * as Animatable from "react-native-animatable";

interface LoaderProps {
  size?: "small" | "large";
  color?: string;
  text?: string;
}

export default function Loader({
  size = "large",
  color = "#7DD3FC",
  text,
}: LoaderProps) {
  return (
    <Animatable.View
      animation="fadeIn"
      className="flex-1 items-center justify-center p-4"
    >
      <ActivityIndicator size={size} color={color} />
      {text && <Text className="text-slate-300 mt-4 text-center">{text}</Text>}
    </Animatable.View>
  );
}
