// Webhook configuration
// These values should be set in environment variables for production
// See .env.example for the list of required environment variables

const getEnvVar = (key: string, defaultValue: string = ""): string => {
  const value = process.env[key];
  if (!value && !defaultValue) {
    console.warn(`Environment variable ${key} is not set`);
  }
  return value || defaultValue;
};

export const BOTGHOST_GUILD_ID = getEnvVar("EXPO_PUBLIC_BOTGHOST_GUILD_ID");
export const BOTGHOST_API_KEY = getEnvVar("EXPO_PUBLIC_BOTGHOST_API_KEY");

// Predefined webhook event IDs
// You can add more event IDs here for different actions
export const WEBHOOK_EVENTS = {
  DEFAULT: getEnvVar("EXPO_PUBLIC_BOTGHOST_WEBHOOK_ID"),
  // Add more predefined event IDs here as needed
  // Example:
  // USER_JOINED: "your_user_joined_event_id",
  // COIN_EARNED: "your_coin_earned_event_id",
  // LEVEL_UP: "your_level_up_event_id",
} as const;

export type WebhookEventType = keyof typeof WEBHOOK_EVENTS;
