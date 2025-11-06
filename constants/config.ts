// Webhook configuration
// Note: In production, these should be loaded from environment variables
// For now, these are placeholder values that should be updated in your deployment
export const BOTGHOST_GUILD_ID = process.env.EXPO_PUBLIC_BOTGHOST_GUILD_ID || "1430635396915531857";
export const BOTGHOST_API_KEY = process.env.EXPO_PUBLIC_BOTGHOST_API_KEY || "API_KEY";

// Default webhook event IDs
export const WEBHOOK_EVENTS = {
  DEFAULT: process.env.EXPO_PUBLIC_BOTGHOST_WEBHOOK_ID || "uq5r1fytr5v2gmslm9ey",
} as const;
