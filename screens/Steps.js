import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { ThemeContext } from '../ThemeContext'; // Import your ThemeContext
import stepsData from '../Sample Data/stepsData'; // Import the steps data

const Steps = () => {
  const { darkMode } = useContext(ThemeContext); // Access dark mode from the context

  return (
    <ScrollView style={[styles.container, { backgroundColor: darkMode ? '#333' : '#fff' }]}>
      <Text style={[styles.heading, { color: darkMode ? '#fff' : '#000' }]}>Steps Data</Text>
      {stepsData.map((data) => (
        <View key={data.id} style={[styles.card, { backgroundColor: darkMode ? '#444' : '#f4f4f4' }]}>
          <Text style={[styles.cardTitle, { color: darkMode ? '#fff' : '#000' }]}>Total Steps: {data.totalSteps}</Text>
          <Text style={[styles.cardText, { color: darkMode ? '#fff' : '#000' }]}>Calories Burnt: {data.caloriesBurnt} kcal</Text>
          <Text style={[styles.cardText, { color: darkMode ? '#fff' : '#000' }]}>Distance Traveled: {data.distanceTraveled}</Text>
          <Text style={[styles.cardText, { color: darkMode ? '#fff' : '#000' }]}>Time Taken: {data.timeTaken}</Text>
          <Text style={[styles.cardText, { color: darkMode ? '#fff' : '#000' }]}>Oxygen Percentage: {data.oxygenPercentage}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  card: {
    borderRadius: 12,
    marginBottom: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f8f8f8',
    overflow: 'hidden',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  cardText: {
    fontSize: 16,
    marginBottom: 6,
    color: '#555',
  },
});

export default Steps;
