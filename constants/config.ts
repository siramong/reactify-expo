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

// Default webhook event IDs
export const WEBHOOK_EVENTS = {
  DEFAULT: getEnvVar("EXPO_PUBLIC_BOTGHOST_WEBHOOK_ID"),
} as const;
