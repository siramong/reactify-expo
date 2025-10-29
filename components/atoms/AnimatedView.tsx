import * as Animatable from "react-native-animatable";
import { ViewProps } from "react-native";

interface AnimatedViewProps extends ViewProps {
  animation?:
    | "fadeIn"
    | "fadeInUp"
    | "fadeInDown"
    | "fadeInLeft"
    | "fadeInRight"
    | "bounceIn"
    | "zoomIn"
    | "slideInUp"
    | "slideInDown";
  duration?: number;
  delay?: number;
}

export default function AnimatedView({
  children,
  animation = "fadeInUp",
  duration = 600,
  delay = 0,
  ...props
}: AnimatedViewProps) {
  return (
    <Animatable.View
      animation={animation}
      duration={duration}
      delay={delay}
      useNativeDriver  // 👈 this is key
      {...props}
    >
      {children}
    </Animatable.View>
  );
}
