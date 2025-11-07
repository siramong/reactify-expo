# BotGhost Webhook Integration Guide

## Overview

This guide explains how to configure and extend the BotGhost webhook integration in this React Native app.

## Architecture

The webhook system follows this structure:

```
User Action (UI) → Predefined Action → Event ID → Webhook Service → BotGhost API
```

**Key Principle**: Event IDs are predefined by developers, users only execute actions.

## Configuration

### 1. Environment Variables

Set these in your `.env` file:

```bash
EXPO_PUBLIC_BOTGHOST_GUILD_ID=YOUR_BOT_ID         # Your Discord Bot ID
EXPO_PUBLIC_BOTGHOST_API_KEY=YOUR_API_KEY         # Your BotGhost API Key
EXPO_PUBLIC_BOTGHOST_WEBHOOK_ID=YOUR_EVENT_ID     # Default event ID
```

### 2. Adding New Event Types

#### Step 1: Define Event ID in `constants/config.ts`

```typescript
export const WEBHOOK_EVENTS = {
  DEFAULT: getEnvVar("EXPO_PUBLIC_BOTGHOST_WEBHOOK_ID"),
  
  // Add your new event IDs here
  USER_JOINED: "abc123xyz",           // User joins event
  COIN_EARNED: "def456uvw",           // Coin earned event
  LEVEL_UP: "ghi789rst",              // Level up event
  ACHIEVEMENT: "jkl012mno",           // Achievement unlocked
} as const;
```

#### Step 2: Add Action Button in `components/webhooks/WebhookPanel.tsx`

```typescript
const WEBHOOK_ACTIONS: WebhookAction[] = [
  {
    eventType: "DEFAULT",
    title: "Ejecutar Evento",
    description: "Dispara un evento instantáneo en BotGhost",
    icon: "flash",
    color: "#F59E0B",
    withData: false,  // No data fields needed
  },
  {
    eventType: "USER_JOINED",
    title: "Usuario Unido",
    description: "Notifica que un usuario se unió al servidor",
    icon: "person-add",
    color: "#10B981",
    withData: true,   // Requires data fields (username, etc.)
  },
  {
    eventType: "COIN_EARNED",
    title: "Monedas Ganadas",
    description: "Registra monedas ganadas por el usuario",
    icon: "cash",
    color: "#EF4444",
    withData: true,   // Requires data (amount, reason)
  },
  // Add more actions here...
];
```

## Action Types

### Without Data (`withData: false`)

Executes immediately when button is pressed. Use for simple triggers.

**Example**: Ping bot, trigger scheduled task, send notification

```typescript
{
  eventType: "PING_BOT",
  title: "Ping Bot",
  description: "Verifica que el bot está activo",
  icon: "pulse",
  color: "#06B6D4",
  withData: false,
}
```

### With Data (`withData: true`)

Opens modal for user to input custom data fields. Use for events that need context.

**Example**: Send message with content, award coins with amount, create custom notification

```typescript
{
  eventType: "SEND_MESSAGE",
  title: "Enviar Mensaje",
  description: "Envía un mensaje personalizado al canal",
  icon: "chatbubble",
  color: "#8B5CF6",
  withData: true,  // User fills: message, channel, etc.
}
```

## Webhook API Format

The service automatically formats requests according to BotGhost API:

```bash
curl https://api.botghost.com/webhook/{BOT_ID}/{EVENT_ID} \
  -X POST \
  -H "Authorization: API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "variables": [
      {
        "name": "field1",
        "variable": "{field1}",
        "value": "user_input_value"
      }
    ]
  }'
```

**Note**: Variables are only included when `payload` is provided.

## Icon Reference

Available Ionicons for action buttons:

- `flash` - Lightning bolt (events)
- `send` - Paper plane (send data)
- `person-add` - User join
- `cash` - Money/coins
- `trophy` - Achievements
- `rocket` - Level up
- `chatbubble` - Messages
- `heart` - Favorites/likes
- `star` - Ratings
- `gift` - Rewards
- `notifications` - Alerts

See full list: [Ionicons Directory](https://ionic.io/ionicons)

## Color Palette

Recommended colors for action buttons:

- `#F59E0B` - Amber (warnings, events)
- `#8B5CF6` - Purple (data, messaging)
- `#10B981` - Green (success, joins)
- `#EF4444` - Red (coins, important)
- `#06B6D4` - Cyan (info, status)
- `#F97316` - Orange (actions)
- `#EC4899` - Pink (special)
- `#6366F1` - Indigo (premium)

## Testing

To test webhooks locally:

1. Set up your BotGhost event IDs in Discord
2. Configure environment variables with valid credentials
3. Run the app: `npm start`
4. Navigate to Discord/Webhooks tab
5. Press action buttons to trigger webhooks
6. Check BotGhost dashboard for received events

## Troubleshooting

### Event ID not configured

**Error**: "Event ID no configurado. Verifica las variables de entorno."

**Solution**: Ensure the event type is added to `WEBHOOK_EVENTS` in config.ts

### Webhook execution failed

**Error**: "Error al ejecutar evento. Verifica tu configuración."

**Solutions**:
- Verify BOT_ID is correct
- Verify API_KEY is valid
- Verify EVENT_ID exists in BotGhost
- Check network connectivity

### TypeScript errors

If you see type errors after adding new event types:

1. Restart TypeScript server
2. Ensure event type is added to `WEBHOOK_EVENTS`
3. Check that `WebhookEventType` includes your new type

## Best Practices

1. **Use descriptive event names**: `USER_JOINED` not `EVENT1`
2. **Group related events**: Prefix with category (e.g., `COIN_EARNED`, `COIN_SPENT`)
3. **Test thoroughly**: Verify each event in BotGhost before deploying
4. **Document webhooks**: Add comments explaining what each event does
5. **Handle errors gracefully**: User sees friendly error messages
6. **Use appropriate colors**: Match action purpose (green=success, red=important)

## Example: Complete New Feature

Let's add a "Daily Reward" webhook:

### 1. Add to config.ts
```typescript
export const WEBHOOK_EVENTS = {
  // ... existing events
  DAILY_REWARD: "xyz789abc",
} as const;
```

### 2. Add to WebhookPanel.tsx
```typescript
const WEBHOOK_ACTIONS: WebhookAction[] = [
  // ... existing actions
  {
    eventType: "DAILY_REWARD",
    title: "Recompensa Diaria",
    description: "Reclama tu recompensa diaria de 100 monedas",
    icon: "gift",
    color: "#EC4899",
    withData: false,
  },
];
```

### 3. Create event in BotGhost
1. Go to BotGhost dashboard
2. Create new webhook event
3. Copy the event ID
4. Use as `DAILY_REWARD` value

### 4. Test
- Press "Recompensa Diaria" button
- Check Discord for bot response
- Verify coins awarded

Done! 🎉

## Support

For issues or questions:
- Check BotGhost API documentation
- Verify environment variables
- Test webhook directly with curl
- Check app logs for errors
