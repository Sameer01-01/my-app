import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { ThemeContext } from '../ThemeContext'; // Import your ThemeContext
import stepsData from '../Sample Data/stepsData'; // Import the steps data
import { LineChart } from 'react-native-chart-kit'; // Import the LineChart component
import { Dimensions } from 'react-native'; // Import Dimensions for screen width

const { width } = Dimensions.get('window'); // Get screen width to set chart width

const Steps = () => {
  const { darkMode } = useContext(ThemeContext); // Access dark mode from the context

  // Prepare the data for the graph
  const stepCounts = stepsData.map((data) => data.totalSteps);
  const caloriesBurnt = stepsData.map((data) => data.caloriesBurnt);

  // Graph data and configuration
  const data = {
    labels: stepsData.map((data) => `Day ${data.id}`), // Day labels for the graph
    datasets: [
      {
        data: stepCounts, // Total steps as the data for the graph
        strokeWidth: 2, // Line thickness
        color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`, // Line color
      },
    ],
  };

  const graphConfig = {
    backgroundColor: darkMode ? '#333' : '#fff',
    backgroundGradientFrom: darkMode ? '#333' : '#fff',
    backgroundGradientTo: darkMode ? '#444' : '#f4f4f4',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`, // Line color
    labelColor: (opacity = 1) => `rgba(${darkMode ? '255, 255, 255' : '0, 0, 0'}, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: darkMode ? '#333' : '#fff' }]}>
      <Text style={[styles.heading, { color: darkMode ? '#fff' : '#000' }]}>Steps Data</Text>

      {/* Display the Graph */}
      <LineChart
        data={data}
        width={width - 32} // Set chart width based on screen size
        height={220} // Set chart height
        chartConfig={graphConfig}
        verticalLabelRotation={30} // Rotate the labels for better visibility
        style={{ marginVertical: 8, borderRadius: 16 }}
      />

      {/* Display the data below the graph */}
      {stepsData.map((data) => (
        <View key={data.id} style={[styles.card, { backgroundColor: darkMode ? '#444' : '#f9f9f9' }]}>
          <Text style={[styles.cardTitle, { color: darkMode ? '#fff' : '#333' }]}>Total Steps: {data.totalSteps}</Text>
          <Text style={[styles.cardText, { color: darkMode ? '#fff' : '#555' }]}>Calories Burnt: {data.caloriesBurnt} kcal</Text>
          <Text style={[styles.cardText, { color: darkMode ? '#fff' : '#555' }]}>Distance Traveled: {data.distanceTraveled}</Text>
          <Text style={[styles.cardText, { color: darkMode ? '#fff' : '#555' }]}>Time Taken: {data.timeTaken}</Text>
          <Text style={[styles.cardText, { color: darkMode ? '#fff' : '#555' }]}>Oxygen Percentage: {data.oxygenPercentage}</Text>
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
    fontSize: 26,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  card: {
    borderRadius: 15,
    marginBottom: 18,
    padding: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 7,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f9f9f9',
    overflow: 'hidden',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  cardText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#555',
  },
});

export default Steps;
