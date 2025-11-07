# Reactify Expo - Modern Dashboard with Liquid Glass Design

This is an [Expo](https://expo.dev) project showcasing a modern dashboard application with a **Liquid Glass** design system, real-time data synchronization using Supabase, and Discord webhook integration.

## ✨ Features

- 🎨 **Liquid Glass Design System** - Modern glassmorphism UI with vibrant accents
- ⚡ **Real-time Updates** - Live data synchronization with Supabase
- 🎯 **Type-Safe** - Built with TypeScript for enhanced development experience
- 🎭 **Smooth Animations** - Fluid transitions using React Native Animatable
- 🎨 **NativeWind** - Tailwind CSS for React Native styling
- 🔔 **Discord Integration** - Webhook support for notifications
- 📱 **Cross-Platform** - Works on iOS, Android, and Web

## 🎨 Design System

This project features a comprehensive **Liquid Glass** design system that includes:

- Semi-transparent glass-like UI components
- Vibrant color palette (Sky Blue, Purple, Pink)
- Consistent typography and spacing
- Standardized icon system
- Smooth shadows and effects

For detailed documentation, see [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)

## 🚀 Get started

### Prerequisites

- Node.js 18+ installed
- Expo CLI installed (`npm install -g expo-cli`)
- A Supabase account and project
- (Optional) BotGhost account for Discord webhooks

### Installation

1. Clone the repository:

```bash
git clone https://github.com/siramong/reactify-expo.git
cd reactify-expo
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

4. Configure your environment variables in `.env`:

```env
EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
EXPO_PUBLIC_SUPABASE_KEY=your_supabase_anon_key
EXPO_PUBLIC_BOTGHOST_GUILD_ID=your_discord_guild_id
EXPO_PUBLIC_BOTGHOST_API_KEY=your_botghost_api_key
EXPO_PUBLIC_BOTGHOST_WEBHOOK_ID=your_webhook_id
```

### Running the App



Start the development server:

```bash
npm start
```

Then choose your platform:

- Press `a` for Android emulator
- Press `i` for iOS simulator
- Press `w` for web browser
- Scan QR code with Expo Go app on your phone

## 📱 Platform Support

### Android

Android previews are defined as a `workspace.onStart` hook and started as a vscode task when the workspace is opened/started.

To run manually:

```bash
npm run android -- --tunnel
```

### iOS

```bash
npm run ios
```

### Web

Web previews will be started and managed automatically:

```bash
npm run web
```

## 📂 Project Structure

```
reactify-expo/
├── app/                    # Expo Router pages
│   ├── _layout.tsx        # Root layout with tabs
│   ├── index.tsx          # Dashboard page
│   ├── settings.tsx       # Settings page
│   └── webhooks.tsx       # Discord webhooks page
├── components/            # React components
│   ├── ui/               # UI components (GlassCard, etc.)
│   ├── Button.tsx        # Reusable button component
│   ├── Card.tsx          # Card component with variants
│   ├── Header.tsx        # Page header component
│   └── ...              # Other components
├── theme/                # Design system
│   ├── colors.ts        # Color palette
│   ├── typography.ts    # Font system
│   ├── spacing.ts       # Spacing scale
│   ├── effects.ts       # Shadows and effects
│   ├── icons.ts         # Icon mappings
│   └── index.ts         # Main theme export
├── hooks/               # Custom React hooks
├── services/            # API services
├── types/               # TypeScript types
├── utils/               # Utility functions
└── constants/           # App constants
```

## 🎨 Theme Customization

The Liquid Glass theme can be customized in the `theme/` directory. Key files:

- `theme/colors.ts` - Modify color palette
- `theme/typography.ts` - Adjust font sizes and weights
- `theme/effects.ts` - Customize shadows and glass effects
- `tailwind.config.js` - Configure Tailwind classes

See [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) for detailed documentation.

## 🛠️ Tech Stack

- **[React Native](https://reactnative.dev/)** - Mobile framework
- **[Expo](https://expo.dev/)** - Development platform
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[NativeWind](https://www.nativewind.dev/)** - Tailwind CSS for React Native
- **[Supabase](https://supabase.com/)** - Backend and real-time database
- **[Expo Router](https://docs.expo.dev/router/introduction/)** - File-based routing
- **[React Native Animatable](https://github.com/oblador/react-native-animatable)** - Animations

## 📝 Scripts

- `npm start` - Start development server
- `npm run android` - Run on Android
- `npm run ios` - Run on iOS
- `npm run web` - Run on web
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Design inspiration from modern glassmorphism UI trends
- Icons from [Ionicons](https://ionic.io/ionicons)
- Built with [Expo](https://expo.dev/) and [React Native](https://reactnative.dev/)

## 📚 Learn More

To learn more about the technologies used in this project:

- [Expo documentation](https://docs.expo.dev/) - Learn fundamentals and advanced topics
- [React Native documentation](https://reactnative.dev/docs/getting-started) - React Native guides
- [NativeWind documentation](https://www.nativewind.dev/) - Tailwind for React Native
- [Supabase documentation](https://supabase.com/docs) - Backend and database
- [Expo Router](https://docs.expo.dev/router/introduction/) - File-based routing

## 🎯 Roadmap

- [ ] Add more dashboard widgets
- [ ] Implement dark/light theme toggle
- [ ] Add more animation effects
- [ ] Enhance Discord integration
- [ ] Add unit and integration tests
- [ ] Improve accessibility features

---

Made with ❤️ using Expo and React Native
