> Edited for use in IDX on 07/09/12

# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

#### Android

Android previews are defined as a `workspace.onStart` hook and started as a vscode task when the workspace is opened/started.

Note, if you can't find the task, either:
- Rebuild the environment (using command palette: `IDX: Rebuild Environment`), or
- Run `npm run android -- --tunnel` command manually run android and see the output in your terminal. The device should pick up this new command and switch to start displaying the output from it.

In the output of this command/task, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You'll also find options to open the app's developer menu, reload the app, and more.

#### Web

Web previews will be started and managred automatically. Use the toolbar to manually refresh.

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## BotGhost Webhook Configuration

This app integrates with BotGhost webhooks to trigger Discord bot actions. Here's how to configure and extend webhook functionality:

### Environment Variables

Set these variables in your `.env` file (see `.env.example`):

```
EXPO_PUBLIC_BOTGHOST_GUILD_ID=YOUR_BOT_ID
EXPO_PUBLIC_BOTGHOST_API_KEY=YOUR_API_KEY
EXPO_PUBLIC_BOTGHOST_WEBHOOK_ID=YOUR_DEFAULT_WEBHOOK_EVENT_ID
```

### Adding New Webhook Events

To add new webhook event types:

1. **Add Event ID to config** (`constants/config.ts`):
```typescript
export const WEBHOOK_EVENTS = {
  DEFAULT: getEnvVar("EXPO_PUBLIC_BOTGHOST_WEBHOOK_ID"),
  USER_JOINED: "your_user_joined_event_id",  // Add your event ID
  COIN_EARNED: "your_coin_earned_event_id",
  LEVEL_UP: "your_level_up_event_id",
} as const;
```

2. **Add Action Button** (`components/webhooks/WebhookPanel.tsx`):
```typescript
const WEBHOOK_ACTIONS: WebhookAction[] = [
  // ... existing actions
  {
    eventType: "USER_JOINED",
    title: "Usuario Unido",
    description: "Notifica que un usuario se unió",
    icon: "person-add",
    color: "#10B981",
    withData: false,  // true if action needs custom data fields
  },
];
```

### Webhook Behavior

- **Actions with `withData: false`**: Execute immediately when button is pressed
- **Actions with `withData: true`**: Open modal for user to input custom fields
- All EVENT_IDs are predefined by developers, users only execute actions

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
