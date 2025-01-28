import React, { useContext, useState } from 'react';
import { View, Text, Switch, StyleSheet, Button, Alert } from 'react-native';
import { ThemeContext } from '../ThemeContext';

export default function Settings() {
  const { darkMode, setDarkMode, setPushNotification, pushNotification } = useContext(ThemeContext);

  // Function to handle notifications toggling
  const toggleNotifications = () => {
    const newNotificationState = !pushNotification;
    setPushNotification(newNotificationState); // Update context state

    // Show alert based on the new state
    Alert.alert(
      newNotificationState ? 'Push Notifications Enabled' : 'Push Notifications Disabled',
      newNotificationState
        ? 'You will now receive notifications.'
        : 'You will no longer receive notifications.'
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: darkMode ? '#333' : '#fff' }]}>
      <Text style={{ color: darkMode ? '#fff' : '#333', fontSize: 20 }}>
        Dark Mode:
      </Text>
      <Switch
        value={darkMode}
        onValueChange={(value) => setDarkMode(value)}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={darkMode ? '#f5dd4b' : '#f4f3f4'}
      />

      {/* Push Notification Button */}
      <Button
        title={pushNotification ? 'Disable Push Notifications' : 'Enable Push Notifications'}
        onPress={toggleNotifications} // Call toggle function when pressed
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
