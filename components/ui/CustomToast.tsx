import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Platform,
  Text,
  TouchableOpacity,
  View,
  GestureResponderEvent,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
type ToastType = "success" | "error" | "info" | "warning";

interface Props {
  visible: boolean;
  message: string;
  description?: string;
  type?: ToastType;
  duration?: number; // ms, <=0 disables auto close
  onClose?: () => void;
  onPress?: (e: GestureResponderEvent) => void;
  position?: "top" | "bottom";
}

const ICON_COLOR: Record<ToastType, string> = {
  success: "#34D399", // emerald-400
  error: "#F87171", // red-400
  info: "#60A5FA", // blue-400
  warning: "#FBBF24", // yellow-400
};

export default function CustomToast({
  visible,
  message,
  description,
  type = "info",
  duration = 3500,
  onClose,
  onPress,
  position = "top",
}: Props) {
  // mount state so we can animate out before unmounting
  const [mounted, setMounted] = useState<boolean>(visible);

  const translateY = useRef(
    new Animated.Value(position === "top" ? -48 : 48)
  ).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const hideTimeout = useRef<number | null>(null);
  const autoCloseTimeout = useRef<number | null>(null);

  useEffect(() => {
    if (visible) {
      // ensure mounted so animation can run
      setMounted(true);

      // show animation
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();

      // auto close
      if (duration > 0) {
        const id = setTimeout(() => {
          handleClose();
        }, duration);
        // @ts-ignore
        autoCloseTimeout.current = id;
      }
    } else if (mounted) {
      // hide animation then unmount
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: position === "top" ? -48 : 48,
          duration: 220,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 220,
          useNativeDriver: true,
        }),
      ]).start(() => {
        // give a small delay before unmount to ensure animation finished
        const id = setTimeout(() => {
          setMounted(false);
        }, 10);
        // @ts-ignore
        hideTimeout.current = id;
      });

      // clear auto close if any
      if (autoCloseTimeout.current) {
        clearTimeout(autoCloseTimeout.current as unknown as number);
        autoCloseTimeout.current = null;
      }
    }

    return () => {
      if (hideTimeout.current) {
        clearTimeout(hideTimeout.current as unknown as number);
        hideTimeout.current = null;
      }
      if (autoCloseTimeout.current) {
        clearTimeout(autoCloseTimeout.current as unknown as number);
        autoCloseTimeout.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  function handleClose() {
    if (onClose) onClose();
  }

  if (!mounted) {
    return null;
  }

  const iconColor = ICON_COLOR[type];

  // Container positioning (inline styles for absolute offsets because className utilities
  // for dynamic safe-area offsets are not always available)
  const containerStyle = [
    {
      left: 16,
      right: 16,
      zIndex: 9999,
    } as const,
    position === "top"
      ? { top: Platform.select({ ios: 48, android: 20 }) }
      : { bottom: Platform.select({ ios: 40, android: 20 }) },
    { transform: [{ translateY }], opacity },
  ];

  return (
    <Animated.View pointerEvents="box-none" style={containerStyle}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={(e) => {
          if (onPress) onPress(e);
          else handleClose();
        }}
        className="mx-2"
      >
        <View className="flex-row items-center bg-slate-900/95 border border-slate-800 rounded-xl px-4 py-3 shadow-lg">
          <View className="w-9 h-9 rounded-lg bg-white/3 items-center justify-center mr-3">
            <MaterialIcons
              name={
                type === "success"
                  ? "check-circle"
                  : type === "error"
                    ? "error"
                    : type === "warning"
                      ? "warning"
                      : "info"
              }
              size={20}
              color={iconColor}
            />
          </View>

          <View className="flex-1">
            <Text
              numberOfLines={1}
              className="text-slate-100 text-base font-semibold"
            >
              {message}
            </Text>
            {description ? (
              <Text numberOfLines={2} className="text-slate-400 text-sm mt-0.5">
                {description}
              </Text>
            ) : null}
          </View>

          <TouchableOpacity
            onPress={() => handleClose()}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            className="ml-3 p-1"
          >
            <MaterialIcons name="close" size={18} color="#94A3B8" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
}
