import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeContext } from './ThemeContext'; // Import your ThemeContext provider
import Home from './screens/Home';
import Exercise from './screens/Exercise';
import Steps from './screens/Steps';
import Settings from './screens/Settings';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function Navigations() {
  const { darkMode, theme } = useContext(ThemeContext); // Access dark mode and theme

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Exercise') {
              iconName = focused ? 'barbell' : 'barbell-outline';
            } else if (route.name === 'Steps') {
              iconName = focused ? 'walk' : 'walk-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: darkMode ? '#f39c12' : '#007aff',
          tabBarInactiveTintColor: darkMode ? '#bdc3c7' : '#8e8e93',
          tabBarStyle: {
            backgroundColor: theme.backgroundColor, // Change bottom tab bar color based on theme
          },
          headerStyle: {
            backgroundColor: theme.backgroundColor, // Change header background color based on theme
          },
          headerTintColor: theme.textColor, // Change header text color based on theme
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Exercise" component={Exercise} />
        <Tab.Screen name="Steps" component={Steps} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
