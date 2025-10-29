import * as Animatable from "react-native-animatable";
import { ViewProps } from "react-native";

export default function AnimatedView({ children, ...props }: ViewProps) {
  return (
    <Animatable.View animation="fadeInUp" duration={600} {...props}>
      {children}
    </Animatable.View>
  );
}
