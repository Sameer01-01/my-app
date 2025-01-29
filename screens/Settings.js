import React, { useContext } from 'react';
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
    <View style={[styles.container, { backgroundColor: darkMode ? '#000' : '#fff' }]}>
      <Text style={[styles.headerText, { color: '#f20c55'}]}>
        Settings
      </Text>

    
      <View style={[styles.card, { backgroundColor: darkMode ? '#444' : '#f5f5f5' }]}>
        <Text style={[styles.cardHeading, { color: darkMode ? '#fff' : '#333' }]}>
          Dark Mode
        </Text>
        <View style={styles.optionContainer}>
          <Text style={[styles.text, { color: darkMode ? '#fff' : '#333' }]}>Enable Dark Mode:</Text>
          <Switch
            value={darkMode}
            onValueChange={(value) => setDarkMode(value)}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={darkMode ? '#f5dd4b' : '#f4f3f4'}
          />
        </View>
      </View>

      <View style={[styles.card, { backgroundColor: darkMode ? '#444' : '#f5f5f5', marginTop: 20 }]}>
        <Text style={[styles.cardHeading, { color: darkMode ? '#fff' : '#333' }]}>
          Push Notifications
        </Text>
        <Button
          title={pushNotification ? 'Disable Push Notifications' : 'Enable Push Notifications'}
          onPress={toggleNotifications} 
          color={darkMode ? '#f5dd4b' : '#81b0ff'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'start',
    alignItems: 'center',
    padding: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  card: {
    width: '100%',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  cardHeading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 18,
  },
});
