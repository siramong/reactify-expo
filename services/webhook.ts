import { BOTGHOST_BOT_ID, BOTGHOST_API_KEY } from "@/constants/config";

export const sendWebhook = async (
  eventId: string,
  payload?: Record<string, any>
) => {
  const url = `https://api.botghost.com/webhook/${BOTGHOST_BOT_ID}/${eventId}`;
  
  // Only include body with variables if payload is provided and not empty
  const hasPayload = payload && Object.keys(payload).length > 0;
  const body = hasPayload ? {
    variables: Object.entries(payload).map(([key, value]) => ({
      name: key,
      variable: `{${key}}`,
      value: String(value),
    })),
  } : undefined;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: BOTGHOST_API_KEY,
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    return res.ok;
  } catch (err) {
    console.error("Error webhook:", err);
    return false;
  }
};
