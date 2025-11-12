import { BOTGHOST_BOT_ID, BOTGHOST_API_KEY } from "@/constants/config";

/**
 * Sends a webhook event to BotGhost Discord bot
 * @param eventId - The BotGhost event ID to trigger
 * @param payload - Optional data to send with the webhook
 * @returns Promise<boolean> - True if webhook was sent successfully
 */
export const sendWebhook = async (
  eventId: string,
  payload?: Record<string, any>
): Promise<boolean> => {
  // Validate configuration
  if (!BOTGHOST_BOT_ID || !BOTGHOST_API_KEY) {
    console.error("BotGhost configuration missing. Check environment variables.");
    return false;
  }

  if (!eventId) {
    console.error("Event ID is required to send webhook");
    return false;
  }

  const url = `https://api.botghost.com/webhook/${BOTGHOST_BOT_ID}/${eventId}`;
  
  // Only include body with variables if payload is provided and not empty
  const hasPayload = payload && Object.keys(payload).length > 0;
  const body = hasPayload
    ? {
        variables: Object.entries(payload).map(([key, value]) => ({
          name: key,
          variable: `{${key}}`,
          value: String(value),
        })),
      }
    : undefined;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: BOTGHOST_API_KEY,
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!res.ok) {
      console.error(`Webhook request failed with status ${res.status}`);
      return false;
    }

    return true;
  } catch (err) {
    console.error("Error sending webhook:", err);
    return false;
  }
};
