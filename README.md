# Reactify Expo - Dashboard Moderno con React Native

Una aplicación móvil moderna construida con **React Native**, **Expo**, **NativeWind** (Tailwind CSS), y **Supabase**, que demuestra integración en tiempo real con bases de datos y webhooks de Discord.

## 🚀 Características

- **Dashboard en Tiempo Real**: Monitoreo de datos con actualizaciones automáticas
- **Integración Supabase**: Base de datos PostgreSQL con subscripciones en tiempo real
- **Webhooks Discord**: Integración con BotGhost para control de bots
- **UI Moderna**: Interfaz elegante con NativeWind (Tailwind CSS)
- **Animaciones Fluidas**: Transiciones y efectos visuales suaves
- **TypeScript**: Tipado fuerte para mayor seguridad y mantenibilidad

## 📋 Requisitos Previos

- Node.js (v14 o superior)
- npm o yarn
- Cuenta de Supabase (gratuita)
- Cuenta de BotGhost (opcional, para webhooks)

## 🛠️ Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/siramong/reactify-expo.git
cd reactify-expo
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**

Copia el archivo `.env.example` a `.env` y completa las variables:

```env
# Supabase Configuration
EXPO_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
EXPO_PUBLIC_SUPABASE_KEY=your_supabase_service_role_key_or_anon_key

# BotGhost Discord Webhook Configuration (Opcional)
EXPO_PUBLIC_BOTGHOST_BOT_ID=your_botghost_bot_id
EXPO_PUBLIC_BOTGHOST_API_KEY=your_botghost_api_key
EXPO_PUBLIC_BOTGHOST_EVENT_ID=your_default_webhook_event_id
```

4. **Iniciar la aplicación**
```bash
npm start
```

## 📱 Ejecutar en Dispositivos

### Android
```bash
npm run android
```

### iOS
```bash
npm run ios
```

### Web
```bash
npm run web
```

## 🗄️ Configuración de Supabase

1. Crea un proyecto en [Supabase](https://supabase.com)
2. Crea una tabla `coins` con la siguiente estructura:

```sql
create table coins (
  id uuid default uuid_generate_v4() primary key,
  userId text not null,
  username text not null,
  amount integer not null default 0,
  curso text not null,
  created_at timestamp with time zone default timezone('utc'::text, now())
);
```

3. Copia la URL del proyecto y la API Key desde Settings > API

## 🎮 Webhooks de Discord (Opcional)

Para usar la funcionalidad de webhooks:

1. Crea una cuenta en [BotGhost](https://botghost.com)
2. Obtén tu Bot ID y API Key
3. Configura eventos en BotGhost
4. Añade las credenciales en `.env`

### Añadir Nuevos Eventos

En `constants/config.ts`:

```typescript
export const WEBHOOK_EVENTS = {
  DEFAULT: getEnvVar("EXPO_PUBLIC_BOTGHOST_EVENT_ID"),
  USER_JOINED: "your_user_joined_event_id",
  COIN_EARNED: "your_coin_earned_event_id",
};
```

En `components/webhooks/WebhookPanel.tsx`:

```typescript
const WEBHOOK_ACTIONS: WebhookAction[] = [
  {
    eventType: "USER_JOINED",
    title: "Usuario Unido",
    description: "Notifica que un usuario se unió",
    icon: "person-add",
    color: "#10B981",
    withData: false,
  },
];
```

## 📦 Stack Tecnológico

- **[React Native](https://reactnative.dev/)** - Framework móvil multiplataforma
- **[Expo](https://expo.dev/)** - Plataforma de desarrollo y deployment
- **[NativeWind](https://www.nativewind.dev/)** - Tailwind CSS para React Native
- **[Supabase](https://supabase.com/)** - Backend as a Service (PostgreSQL + Realtime)
- **[TypeScript](https://www.typescriptlang.org/)** - Lenguaje tipado
- **[React Navigation](https://reactnavigation.org/)** - Navegación en la app

## 📂 Estructura del Proyecto

```
reactify-expo/
├── app/                    # Pantallas principales (file-based routing)
├── components/            # Componentes reutilizables
│   ├── coins/            # Componentes de monedas
│   ├── dashboard/        # Componentes del dashboard
│   ├── ui/               # Componentes UI base
│   └── webhooks/         # Componentes de webhooks
├── constants/            # Constantes y configuración
├── hooks/                # Custom React hooks
├── services/             # Servicios (Supabase, webhooks)
├── types/                # Definiciones de TypeScript
└── utils/                # Utilidades y helpers
```

## 🎨 Características de UI

- **Diseño Responsivo**: Adaptable a diferentes tamaños de pantalla
- **Modo Oscuro**: Tema oscuro por defecto con colores vibrantes
- **Animaciones**: Transiciones suaves con react-native-animatable
- **Feedback Háptico**: Respuesta táctil en interacciones
- **Iconos**: Ionicons de Expo Vector Icons

## 🔒 Seguridad

- Variables de entorno para credenciales sensibles
- Validación de tipos con TypeScript
- Manejo de errores robusto
- API Keys nunca expuestas en el código

## 📝 Scripts Disponibles

- `npm start` - Inicia Expo development server
- `npm run android` - Ejecuta en Android
- `npm run ios` - Ejecuta en iOS  
- `npm run web` - Ejecuta en navegador
- `npm run lint` - Ejecuta el linter

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea tu Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push al Branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 📧 Contacto

Para preguntas o sugerencias, abre un issue en el repositorio.

## 🙏 Agradecimientos

- [Expo Team](https://expo.dev/) por la excelente plataforma
- [Supabase](https://supabase.com/) por el increíble backend
- [NativeWind](https://www.nativewind.dev/) por Tailwind en React Native
- Comunidad de React Native

---

**Hecho con ❤️ usando React Native + Expo + Supabase**
