import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { ThemeContext } from '../ThemeContext'; 
import stepsData from '../Sample Data/stepsData'; 
import { LineChart } from 'react-native-chart-kit'; 
import { Dimensions } from 'react-native'; 

const { width } = Dimensions.get('window'); 

const Steps = () => {

    
  const { darkMode } = useContext(ThemeContext); 

 
  const stepCounts = stepsData.map((data) => data.totalSteps);
  const caloriesBurnt = stepsData.map((data) => data.caloriesBurnt);

  
  const data = {
    labels: stepsData.map((data) => `Day ${data.id}`), 
    datasets: [
      {
        data: stepCounts, 
        strokeWidth: 3, 
        color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`, 
      },
    ],
  };

  const graphConfig = {
    backgroundColor: darkMode ? '#333' : '#fff',
    backgroundGradientFrom: darkMode ? '#333' : '#fff',
    backgroundGradientTo: darkMode ? '#444' : '#f4f4f4',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(${darkMode ? '255, 255, 255' : '0, 0, 0'}, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '3',
      stroke: '#ffa726',
    },
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: darkMode ? '#000' : '#fff' }]}>
      <Text style={[styles.heading, { color: '#f20c55' }]}>Workout Data</Text>

      
      <LineChart
        data={data}
        width={width - 32} 
        height={220}
        chartConfig={graphConfig}
        verticalLabelRotation={30} 
        style={[styles.chart, { borderRadius: 16 }]}
      />

      
      {stepsData.map((data) => (
        <View key={data.id} style={[styles.card, { backgroundColor: darkMode ? '#444' : '#f9f9f9' }]}>
          <Text style={[styles.cardTitle, { color: darkMode ? '#d6f205' : '#ee05f2' }]}>
            Total Steps: {data.totalSteps}
          </Text>
          <Text style={[styles.cardText, { color: darkMode ? '#fff' : '#555' }]}>
            Calories Burnt: {data.caloriesBurnt} kcal
          </Text>
          <Text style={[styles.cardText, { color: darkMode ? '#fff' : '#555' }]}>
            Distance Traveled: {data.distanceTraveled}
          </Text>
          <Text style={[styles.cardText, { color: darkMode ? '#fff' : '#555' }]}>
            Time Taken: {data.timeTaken}
          </Text>
          <Text style={[styles.cardText, { color: darkMode ? '#fff' : '#555' }]}>
            Oxygen Percentage: {data.oxygenPercentage}
          </Text>
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
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  chart: {
    marginVertical: 16,
    borderRadius: 16,
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
    flexDirection: 'column',
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textTransform: 'capitalize',
  },
  cardText: {
    fontSize: 16,
    marginBottom: 6,
    color: '#555',
  },
});

export default Steps;
