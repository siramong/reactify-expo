import { BOTGHOST_GUILD_ID, BOTGHOST_API_KEY } from "@/constants/config";

export const sendWebhook = async (
  eventId: string,
  payload: Record<string, any>
) => {
  const url = `https://api.botghost.com/webhook/${BOTGHOST_GUILD_ID}/${eventId}`;
  const body = {
    variables: Object.entries(payload).map(([key, value]) => ({
      name: key,
      variable: `{${key}}`,
      value: String(value),
    })),
  };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: BOTGHOST_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    return res.ok;
  } catch (err) {
    console.error("Error webhook:", err);
    return false;
  }
};
