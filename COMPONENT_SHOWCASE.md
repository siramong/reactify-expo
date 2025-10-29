# Component Showcase

This document showcases all the improved and new components in the Reactify Expo application.

## Atomic Components

### Button Component
```tsx
// Primary Button (default)
<Button title="Primary Action" onPress={handlePress} />

// Secondary Button
<Button 
  title="Secondary Action" 
  onPress={handlePress}
  variant="secondary"
/>

// Outline Button
<Button 
  title="Outline Action" 
  onPress={handlePress}
  variant="outline"
/>

// Small Button
<Button 
  title="Small Button" 
  onPress={handlePress}
  size="sm"
/>

// Large Button with Loading
<Button 
  title="Processing..." 
  onPress={handlePress}
  size="lg"
  loading={true}
/>

// Disabled Button
<Button 
  title="Cannot Click" 
  onPress={handlePress}
  disabled={true}
/>
```

**Features:**
- 3 variants: primary (cyan), secondary (outlined cyan), outline (transparent with border)
- 3 sizes: sm, md, lg
- Loading state with spinner
- Haptic feedback on press
- Disabled state with reduced opacity

---

### Card Component
```tsx
// Default Card
<Card>
  <Text>Card content</Text>
</Card>

// Elevated Card (with shadow)
<Card variant="elevated">
  <Text>Elevated content</Text>
</Card>

// Outlined Card
<Card variant="outlined">
  <Text>Outlined content</Text>
</Card>

// Custom styling
<Card variant="elevated" className="mb-4">
  <Text>Custom styled card</Text>
</Card>
```

**Features:**
- 3 variants: default, elevated (shadow), outlined (border)
- Rounded corners (rounded-xl)
- Consistent padding (p-4)
- Dark theme background

---

### Input Component
```tsx
// Basic Input
<Input
  placeholder="Enter text"
  value={text}
  onChangeText={setText}
/>

// Input with Label
<Input
  label="Username"
  placeholder="Enter username"
  value={username}
  onChangeText={setUsername}
/>

// Input with Error
<Input
  label="Email"
  placeholder="Enter email"
  value={email}
  onChangeText={setEmail}
  error="Invalid email format"
/>

// Input with Icon
<Input
  label="Search"
  placeholder="Search..."
  value={search}
  onChangeText={setSearch}
  icon={<Ionicons name="search" size={20} color="#888" />}
/>

// Multiline Input
<Input
  label="Description"
  placeholder="Enter description"
  value={description}
  onChangeText={setDescription}
  multiline={true}
  numberOfLines={4}
/>

// Numeric Input
<Input
  label="Amount"
  placeholder="0"
  value={amount}
  onChangeText={setAmount}
  keyboardType="numeric"
/>
```

**Features:**
- Optional label
- Error state with red border and message
- Icon support
- Multiline support
- Keyboard type options
- Dark theme styling

---

### AnimatedView Component
```tsx
// Fade In Up (default)
<AnimatedView>
  <Text>Content fades in from bottom</Text>
</AnimatedView>

// Fade In Down
<AnimatedView animation="fadeInDown">
  <Text>Content fades in from top</Text>
</AnimatedView>

// Bounce In
<AnimatedView animation="bounceIn">
  <Text>Content bounces in</Text>
</AnimatedView>

// With Custom Duration and Delay
<AnimatedView 
  animation="fadeInLeft" 
  duration={800}
  delay={200}
>
  <Text>Delayed left slide</Text>
</AnimatedView>
```

**Available Animations:**
- fadeIn
- fadeInUp
- fadeInDown
- fadeInLeft
- fadeInRight
- bounceIn
- zoomIn
- slideInUp
- slideInDown

---

### Loader Component
```tsx
// Basic Loader
<Loader />

// Loader with Text
<Loader text="Loading data..." />

// Small Loader
<Loader size="small" />

// Custom Color
<Loader color="#FF0000" text="Processing..." />
```

**Features:**
- Animated spinner
- Optional text message
- Fade-in animation
- Customizable size and color

---

### StatusBadge Component (NEW)
```tsx
// Success Badge
<StatusBadge 
  type="success" 
  message="Operation completed successfully"
/>

// Error Badge
<StatusBadge 
  type="error" 
  message="Something went wrong"
/>

// Warning Badge
<StatusBadge 
  type="warning" 
  message="Please review this action"
/>

// Info Badge
<StatusBadge 
  type="info" 
  message="Additional information available"
/>

// Without Icon
<StatusBadge 
  type="success" 
  message="Success"
  icon={false}
/>
```

**Features:**
- 4 types: success (green), error (red), warning (yellow), info (blue)
- Matching icons
- Semi-transparent backgrounds
- Color-coded borders and text

---

## Molecular Components

### Header Component
```tsx
// Header with Title Only
<Header title="Dashboard" />

// Header with Title and Subtitle
<Header 
  title="Coins Dashboard" 
  subtitle="Real-time coin tracking"
/>
```

**Features:**
- Large bold title in React blue
- Optional subtitle in gray
- Fade-in-down animation
- Consistent spacing

---

### InfoCard Component (NEW)
```tsx
// Basic Info Card
<InfoCard
  icon="people"
  title="Users"
  value={42}
/>

// Info Card with Subtitle
<InfoCard
  icon="logo-usd"
  title="Total Coins"
  value={1250}
  subtitle="Last updated 5 min ago"
/>

// Interactive Info Card
<InfoCard
  icon="settings"
  title="Settings"
  value="Configure"
  onPress={() => navigate('/settings')}
/>

// With Animation Delay
<InfoCard
  icon="stats-chart"
  title="Analytics"
  value="View"
  delay={200}
/>
```

**Features:**
- Icon with colored background circle
- Title, value, and optional subtitle
- Optional onPress for interactivity
- Animated entrance with optional delay
- Elevated card variant
- Chevron indicator when interactive

---

### WebhookForm Component (NEW)
```tsx
// Basic Usage
<WebhookForm
  fields={fields}
  onFieldChange={handleFieldChange}
/>

// Custom Field Count
<WebhookForm
  fields={fields}
  onFieldChange={handleFieldChange}
  maxFields={5}
/>
```

**Features:**
- Reusable form component
- Staggered animation (50ms per field)
- Customizable field count
- Automatic field labeling

---

## Usage Examples by Page

### Dashboard (index.tsx)
```tsx
<ScrollView className="flex-1 bg-dark-bg p-4">
  <AnimatedView>
    <Header 
      title="Reactify Dashboard" 
      subtitle="Monitor your coins in real-time"
    />
    
    <View className="flex-row space-x-2 mb-4">
      <View className="flex-1">
        <InfoCard
          icon="people"
          title="Users"
          value={coins.length}
        />
      </View>
      <View className="flex-1">
        <InfoCard
          icon="logo-usd"
          title="Total Coins"
          value={totalCoins}
        />
      </View>
    </View>

    <CoinBoard />
  </AnimatedView>
</ScrollView>
```

### Webhooks (webhooks.tsx)
```tsx
<ScrollView className="flex-1 bg-dark-bg p-4">
  <AnimatedView>
    <Header 
      title="Webhook BotGhost" 
      subtitle="Send custom data to your Discord bot"
    />
    
    <Card variant="outlined" className="mb-4">
      <View className="flex-row items-center mb-2">
        <Ionicons name="information-circle" size={24} color="#61DAFB" />
        <Text className="text-white text-lg font-semibold ml-2">
          Information
        </Text>
      </View>
      <Text className="text-gray-400 text-sm">
        Fill in the fields you want to send to the BotGhost webhook.
      </Text>
    </Card>

    <WebhookPanel />
  </AnimatedView>
</ScrollView>
```

## Animation Patterns

### Staggered List Animation
```tsx
<FlatList
  data={items}
  renderItem={({ item, index }) => (
    <AnimatedView delay={index * 100}>
      <Card variant="elevated">
        {/* Item content */}
      </Card>
    </AnimatedView>
  )}
/>
```

### Page Entrance
```tsx
// Header comes from top
<AnimatedView animation="fadeInDown">
  <Header title="Page Title" />
</AnimatedView>

// Content comes from bottom
<AnimatedView animation="fadeInUp" delay={100}>
  {/* Page content */}
</AnimatedView>
```

### Status Feedback
```tsx
// Success message bounces in
{showSuccess && (
  <AnimatedView animation="bounceIn">
    <StatusBadge type="success" message="Saved!" />
  </AnimatedView>
)}
```

## Color Palette

```tsx
// Available Tailwind classes
className="bg-dark-bg"        // #0D1117 - Main background
className="bg-dark-card"      // #161B22 - Card background
className="border-dark-border" // #30363D - Borders
className="text-react-blue"   // #61DAFB - Accent color
```

## Best Practices

1. **Always use AnimatedView for new content:**
   ```tsx
   <AnimatedView animation="fadeInUp">
     <NewComponent />
   </AnimatedView>
   ```

2. **Use Cards for grouping related content:**
   ```tsx
   <Card variant="elevated">
     <Text>Related information</Text>
   </Card>
   ```

3. **Provide feedback for user actions:**
   ```tsx
   <Button title="Submit" onPress={handleSubmit} loading={isLoading} />
   {status && <StatusBadge type="success" message="Submitted!" />}
   ```

4. **Use InfoCards for displaying stats:**
   ```tsx
   <InfoCard
     icon="stats-chart"
     title="Metric"
     value={value}
     subtitle="Additional context"
   />
   ```

5. **Always add labels to inputs:**
   ```tsx
   <Input
     label="Username"
     placeholder="Enter username"
     value={username}
     onChangeText={setUsername}
   />
   ```
