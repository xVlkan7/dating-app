import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Tabs } from 'expo-router';
import type { ComponentProps } from 'react';

type IconName = ComponentProps<typeof FontAwesome6>['name'];

function TabIcon({ color, name }: { color: ComponentProps<typeof FontAwesome6>['color']; name: IconName }) {
  return <FontAwesome6 color={color} name={name} size={20} />;
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#B95543',
        tabBarInactiveTintColor: '#857C70',
        tabBarLabelStyle: { fontSize: 10, fontWeight: '600' },
        tabBarStyle: {
          backgroundColor: '#FFFDF8',
          borderTopColor: '#E5D7C3',
          height: 68,
          paddingTop: 7,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ title: 'Home', tabBarIcon: ({ color }) => <TabIcon color={color} name="house" /> }}
      />
      <Tabs.Screen
        name="discover"
        options={{ title: 'Discover', tabBarIcon: ({ color }) => <TabIcon color={color} name="compass" /> }}
      />
      <Tabs.Screen
        name="connections"
        options={{ title: 'Connections', tabBarIcon: ({ color }) => <TabIcon color={color} name="heart" /> }}
      />
      <Tabs.Screen
        name="messages"
        options={{ title: 'Messages', tabBarIcon: ({ color }) => <TabIcon color={color} name="comment-dots" /> }}
      />
      <Tabs.Screen
        name="profile"
        options={{ title: 'Profile', tabBarIcon: ({ color }) => <TabIcon color={color} name="user" /> }}
      />
    </Tabs>
  );
}
