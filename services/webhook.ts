export const sendWebhook = async (
  eventId: string,
  payload: Record<string, any>
) => {
  const url = `https://api.botghost.com/webhook/1430635396915531857/${eventId}`;
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
        Authorization: "API_KEY",
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
