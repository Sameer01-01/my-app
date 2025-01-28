import React, { useContext } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { ThemeContext } from '../ThemeContext'; // Import theme context
import { LineChart } from 'react-native-chart-kit'; // Import chart library
import { PieChart } from 'react-native-chart-kit'; // Import pie chart library
import { Dimensions } from 'react-native';

// Helper function to sanitize data, ensuring no NaN values
const sanitizeData = (data) => {
  return data.map(item => (isNaN(item) ? 0 : item)); // Replace NaN with 0
};

const Home = () => {
  const { theme } = useContext(ThemeContext); // Access theme context

  // Random workout data for the month
  const workoutData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        data: sanitizeData([3, 5, 4, 6]), // Sanitize to avoid NaN values
        strokeWidth: 2,
        color: (opacity = 1) => `rgba(0, 255, 255, ${opacity})`, // Cyan color for the line
      },
    ],
  };

  // Pie chart data for workout categories
  const pieData = [
    {
      name: 'Cardio',
      population: 40, // Ensure valid numbers
      color: '#00FFFF',
      legendFontColor: '#800080', // Purple legend font color
      legendFontSize: 15,
    },
    {
      name: 'Strength',
      population: 30, // Ensure valid numbers
      color: '#FF6347',
      legendFontColor: '#800080', // Purple legend font color
      legendFontSize: 15,
    },
    {
      name: 'Yoga',
      population: 20, // Ensure valid numbers
      color: '#32CD32',
      legendFontColor: '#800080', // Purple legend font color
      legendFontSize: 15,
    },
    {
      name: 'Stretching',
      population: 10, // Ensure valid numbers
      color: '#FFD700',
      legendFontColor: '#800080', // Purple legend font color
      legendFontSize: 15,
    },
  ];

  // Random exercise data for the month
  const exerciseData = [
    { name: 'Push Up', count: 120 },
    { name: 'Squats', count: 90 },
    { name: 'Plank', count: 60 },
    { name: 'Burpees', count: 50 },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container} 
    style={{ backgroundColor: theme.backgroundColor }}>
      <Text style={[styles.text, { color: theme.textColor }]}>Runverve</Text>

      {/* Greeting Card */}
      <View style={[styles.card, { backgroundColor: theme.cardBackground }]}>
        <Text style={[styles.greetingText, { color: '#800080' }]}>
          Greetings, <Text style={styles.name}>Sameer</Text>
        </Text>
      </View>

      {/* Workout Data Card */}
      <View style={[styles.card, { backgroundColor: theme.cardBackground, marginTop: 20 }]}>
        <Text style={[styles.cardHeading, { color: theme.mode === 'dark' ? '#fff' : '#000' }]}>
          Workout Data for the Month
        </Text>
        <LineChart
          data={workoutData}
          width={Dimensions.get('window').width - 40} // 40 is for padding
          height={220}
          chartConfig={{
            backgroundColor: theme.mode === 'dark' ? '#333' : '#fff',
            backgroundGradientFrom: theme.mode === 'dark' ? '#333' : '#fff',
            backgroundGradientTo: theme.mode === 'dark' ? '#333' : '#fff',
            decimalPlaces: 0, // No decimal places for the data
            color: (opacity = 1) => `rgba(0, 255, 255, ${opacity})`, // Cyan line color
            labelColor: (opacity = 1) => `rgba(128, 0, 128, ${opacity})`, // Purple label color
            style: {
              borderRadius: 16,
            },
          }}
          bezier
        />
      </View>

      {/* Pie Chart Card */}
      <View style={[styles.card, { backgroundColor: theme.cardBackground, marginTop: 20 }]}>
        <Text style={[styles.cardHeading, { color: theme.mode === 'dark' ? '#fff' : '#000' }]}>
          Workout Breakdown
        </Text>
        <PieChart
          data={pieData}
          width={Dimensions.get('window').width - 40} // 40 is for padding
          height={220}
          chartConfig={{
            backgroundColor: theme.mode === 'dark' ? '#333' : '#fff',
            backgroundGradientFrom: theme.mode === 'dark' ? '#333' : '#fff',
            backgroundGradientTo: theme.mode === 'dark' ? '#333' : '#fff',
            color: (opacity = 1) => `rgba(0, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          accessor="population"
          backgroundColor="transparent"
        />
      </View>

      {/* Exercise Done Card */}
      <View style={[styles.card, { backgroundColor: theme.cardBackground, marginTop: 20 }]}>
  <Text style={[styles.cardHeading, { color: theme.textColor }]}>
    Exercises Done This Month
  </Text>
  {exerciseData.map((exercise, index) => (
    <Text key={index} style={[styles.exerciseText, { color: theme.textColor }]}>
      {exercise.name}: {exercise.count} reps
    </Text>
  ))}
</View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  card: {
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // Adding shadow effect for the card
  },
  greetingText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  cardHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  exerciseText: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default Home;
