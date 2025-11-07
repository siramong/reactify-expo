# Component Usage Examples

This guide provides practical examples of how to use the components in the Liquid Glass design system.

## Table of Contents

- [Cards](#cards)
- [Buttons](#buttons)
- [Forms](#forms)
- [Status & Feedback](#status--feedback)
- [Layout](#layout)
- [Data Display](#data-display)

## Cards

### Basic Card

```typescript
import Card from '@/components/Card';

<Card variant="default">
  <Text className="text-white">Basic card content</Text>
</Card>
```

### Glass Card

```typescript
import Card from '@/components/Card';

<Card variant="glass">
  <View className="flex-row items-center">
    <Ionicons name="star" size={24} color="#7DD3FC" />
    <Text className="text-white text-lg font-bold ml-3">
      Glass Effect Card
    </Text>
  </View>
</Card>
```

### Elevated Card with Shadow

```typescript
import Card from '@/components/Card';

<Card variant="elevated" className="mb-4">
  <Text className="text-white text-xl font-bold mb-2">
    Elevated Card
  </Text>
  <Text className="text-slate-400">
    This card has a shadow for depth
  </Text>
</Card>
```

### Custom GlassCard

```typescript
import GlassCard from '@/components/ui/GlassCard';

<GlassCard variant="medium" glowColor="#7DD3FC">
  <View className="flex-row items-center justify-between">
    <Text className="text-white font-semibold">Custom Glass</Text>
    <Ionicons name="chevron-forward" size={20} color="#7DD3FC" />
  </View>
</GlassCard>
```

## Buttons

### Primary Button

```typescript
import Button from '@/components/Button';

<Button
  title="Save Changes"
  variant="primary"
  onPress={() => console.log('Pressed')}
/>
```

### Button with Icon

```typescript
<Button
  title="Add Item"
  variant="primary"
  icon="add-circle"
  onPress={handleAdd}
/>
```

### Glass Button

```typescript
<Button
  title="Continue"
  variant="glass"
  size="lg"
  icon="arrow-forward"
  onPress={handleContinue}
/>
```

### Outline Button

```typescript
<Button
  title="Cancel"
  variant="outline"
  size="md"
  onPress={handleCancel}
/>
```

### Loading State

```typescript
<Button
  title="Submitting..."
  variant="primary"
  loading={isLoading}
  disabled={isLoading}
  onPress={handleSubmit}
/>
```

### Small Button

```typescript
<Button
  title="Edit"
  variant="secondary"
  size="sm"
  icon="create"
  onPress={handleEdit}
/>
```

## Forms

### Input Field

```typescript
import Input from '@/components/Input';

const [name, setName] = useState('');

<Input
  label="Full Name"
  placeholder="Enter your name"
  value={name}
  onChangeText={setName}
/>
```

### Input with Icon

```typescript
<Input
  label="Email Address"
  placeholder="name@example.com"
  value={email}
  onChangeText={setEmail}
  keyboardType="email-address"
  icon={<Ionicons name="mail" size={20} color="#7DD3FC" />}
/>
```

### Input with Error

```typescript
<Input
  label="Password"
  placeholder="Enter password"
  value={password}
  onChangeText={setPassword}
  error={passwordError}
/>
```

### Multiline Input

```typescript
<Input
  label="Description"
  placeholder="Enter description"
  value={description}
  onChangeText={setDescription}
  multiline
  numberOfLines={4}
/>
```

## Status & Feedback

### Status Badges

```typescript
import StatusBadge from '@/components/StatusBadge';

// Success
<StatusBadge
  type="success"
  message="Operation completed successfully!"
/>

// Error
<StatusBadge
  type="error"
  message="Something went wrong. Please try again."
/>

// Warning
<StatusBadge
  type="warning"
  message="Please review your input before submitting."
/>

// Info
<StatusBadge
  type="info"
  message="New features are available!"
/>

// Without Icon
<StatusBadge
  type="success"
  message="Simple success message"
  icon={false}
/>
```

### Loader

```typescript
import Loader from '@/components/Loader';

// Basic loader
<Loader />

// With text
<Loader text="Loading data..." />

// Small size
<Loader size="small" color="#7DD3FC" />
```

### Empty State

```typescript
import EmptyState from '@/components/EmptyState';

<EmptyState
  icon="folder-open-outline"
  title="No items found"
  description="Start by adding your first item"
  iconColor="#7DD3FC"
/>
```

## Layout

### Header

```typescript
import Header from '@/components/Header';

<Header
  title="Dashboard"
  subtitle="Welcome back!"
  icon="stats-chart"
/>

// Simple header
<Header title="Settings" />
```

### Info Card

```typescript
import InfoCard from '@/components/InfoCard';

<InfoCard
  icon="people"
  title="Total Users"
  value={1234}
  subtitle="Active this month"
  delay={0}
  gradientColors={["#7DD3FC", "#3B82F6"]}
/>

// Clickable Info Card
<InfoCard
  icon="wallet"
  title="Balance"
  value="$5,432"
  subtitle="Available"
  onPress={() => console.log('Pressed')}
  gradientColors={["#FBBF24", "#D97706"]}
/>
```

### Animated View

```typescript
import AnimatedView from '@/components/AnimatedView';

<AnimatedView animation="fadeInUp" delay={100}>
  <Card variant="glass">
    <Text className="text-white">Animated content</Text>
  </Card>
</AnimatedView>

// Available animations: fadeIn, fadeInUp, fadeInDown, slideInUp, etc.
```

## Data Display

### Quick Stats

```typescript
import QuickStats from '@/components/QuickStats';

<QuickStats
  totalStudents={150}
  totalCoins={4500}
  avgCoins={30}
  topCourse="React Advanced"
/>
```

### Leaderboard

```typescript
import Leaderboard from '@/components/Leaderboard';

<Leaderboard
  coins={coinsData}
  selectedCurso="Todos"
/>
```

### Stats Dashboard

```typescript
import StatsDashboard from '@/components/StatsDashboard';

<StatsDashboard
  coins={coinsData}
  selectedCurso="Todos"
/>
```

### Course Selector

```typescript
import CourseSelector from '@/components/CourseSelector';

const [selectedCourse, setSelectedCourse] = useState("Todos");

<CourseSelector
  courses={["Todos", "1E1", "1E2", "2E1", "2E2"]}
  selected={selectedCourse}
  onSelect={setSelectedCourse}
/>
```

## Advanced Examples

### Complex Card Layout

```typescript
import Card from '@/components/Card';
import { Ionicons } from '@expo/vector-icons';

<Card variant="glass" className="p-6">
  <View className="flex-row items-center justify-between mb-4">
    <View className="flex-row items-center">
      <View 
        className="rounded-full p-3 mr-3 border border-glass-border-light"
        style={{ backgroundColor: 'rgba(125, 211, 252, 0.2)' }}
      >
        <Ionicons name="analytics" size={24} color="#7DD3FC" />
      </View>
      <View>
        <Text className="text-white text-lg font-bold">Analytics</Text>
        <Text className="text-slate-400 text-sm">Last updated 5m ago</Text>
      </View>
    </View>
    <Ionicons name="chevron-forward" size={24} color="#7DD3FC" />
  </View>
  
  <View className="border-t border-glass-border-light pt-4">
    <View className="flex-row justify-between mb-2">
      <Text className="text-slate-400">Views</Text>
      <Text className="text-white font-bold">1,234</Text>
    </View>
    <View className="flex-row justify-between">
      <Text className="text-slate-400">Clicks</Text>
      <Text className="text-white font-bold">567</Text>
    </View>
  </View>
</Card>
```

### Form with Multiple Fields

```typescript
import Input from '@/components/Input';
import Button from '@/components/Button';
import Card from '@/components/Card';
import { Ionicons } from '@expo/vector-icons';

const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: '',
});

<Card variant="glass" className="p-6">
  <Text className="text-white text-2xl font-bold mb-6">Contact Us</Text>
  
  <Input
    label="Name"
    placeholder="Your name"
    value={formData.name}
    onChangeText={(text) => setFormData({...formData, name: text})}
    icon={<Ionicons name="person" size={20} color="#7DD3FC" />}
  />
  
  <Input
    label="Email"
    placeholder="your@email.com"
    value={formData.email}
    onChangeText={(text) => setFormData({...formData, email: text})}
    keyboardType="email-address"
    icon={<Ionicons name="mail" size={20} color="#7DD3FC" />}
  />
  
  <Input
    label="Message"
    placeholder="Your message"
    value={formData.message}
    onChangeText={(text) => setFormData({...formData, message: text})}
    multiline
    numberOfLines={4}
  />
  
  <Button
    title="Send Message"
    variant="primary"
    icon="send"
    onPress={handleSubmit}
  />
</Card>
```

### Dashboard Grid

```typescript
import InfoCard from '@/components/InfoCard';

<View className="flex-row space-x-4 mb-4">
  <View className="flex-1">
    <InfoCard
      icon="people"
      title="Users"
      value={1234}
      subtitle="Total active"
      gradientColors={["#7DD3FC", "#3B82F6"]}
    />
  </View>
  <View className="flex-1">
    <InfoCard
      icon="trending-up"
      title="Growth"
      value="+12%"
      subtitle="This month"
      gradientColors={["#34D399", "#059669"]}
    />
  </View>
</View>

<View className="flex-row space-x-4">
  <View className="flex-1">
    <InfoCard
      icon="cash"
      title="Revenue"
      value="$45.2k"
      subtitle="Last 30 days"
      gradientColors={["#FBBF24", "#D97706"]}
    />
  </View>
  <View className="flex-1">
    <InfoCard
      icon="star"
      title="Rating"
      value="4.8"
      subtitle="Average score"
      gradientColors={["#F472B6", "#EC4899"]}
    />
  </View>
</View>
```

## Tips & Best Practices

1. **Glass Effects**: Use glass variants for overlay components and cards that need to stand out
2. **Colors**: Stick to the theme colors for consistency
3. **Spacing**: Use Tailwind spacing classes (`p-4`, `mb-6`, etc.) for consistency
4. **Icons**: Always use colors from the theme palette with icons
5. **Animations**: Add delays to stagger animations for a more polished feel
6. **Borders**: Use `border-glass-border` or `border-glass-border-light` for subtle separation

## Common Patterns

### Modal/Overlay Content

```typescript
<View className="bg-background-primary/95 p-6 rounded-3xl">
  <Card variant="glass">
    {/* Modal content */}
  </Card>
</View>
```

### List Item

```typescript
<Card variant="glass" className="mb-3">
  <View className="flex-row items-center justify-between">
    <View className="flex-row items-center flex-1">
      <View 
        className="rounded-2xl p-3 mr-4 border border-glass-border-light"
        style={{ backgroundColor: 'rgba(125, 211, 252, 0.15)' }}
      >
        <Ionicons name="document-text" size={24} color="#7DD3FC" />
      </View>
      <View className="flex-1">
        <Text className="text-white font-semibold">Item Title</Text>
        <Text className="text-slate-400 text-sm">Description</Text>
      </View>
    </View>
    <Ionicons name="chevron-forward" size={20} color="#7DD3FC" />
  </View>
</Card>
```
