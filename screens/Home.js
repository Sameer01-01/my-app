import React, { useContext } from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import { ThemeContext } from '../ThemeContext'; 
import { LineChart } from 'react-native-chart-kit'; 
import { PieChart } from 'react-native-chart-kit'; 
import { Dimensions } from 'react-native';


const sanitizeData = (data) => {
  return data.map(item => (isNaN(item) ? 0 : item)); 
};

const Home = () => {
  const { theme } = useContext(ThemeContext); 


  const workoutData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        data: sanitizeData([3, 5, 4, 6]), 
        strokeWidth: 2,
        color: (opacity = 1) => `rgba(0, 255, 255, ${opacity})`, 
      },
    ],
  };

  
  const pieData = [
    {
      name: 'Cardio',
      population: 40, 
      color: '#00FFFF',
      legendFontColor: '#800080', 
      legendFontSize: 15,
    },
    {
      name: 'Strength',
      population: 30, 
      color: '#FF6347',
      legendFontColor: '#800080', 
      legendFontSize: 15,
    },
    {
      name: 'Yoga',
      population: 20, 
      color: '#32CD32',
      legendFontColor: '#800080', 
      legendFontSize: 15,
    },
    {
      name: 'Stretching',
      population: 10, 
      color: '#FFD700',
      legendFontColor: '#800080', 
      legendFontSize: 15,
    },
  ];


  const exerciseData = [
    { name: 'Push Up', count: 1271 },
    { name: 'Squats', count: 1513 },
    { name: 'Plank', count: 102 },
    { name: 'Burpees', count: 1504 },
  ];
  const exerciseData2 = [
    { name: 'Push Up', count: 15 },
    { name: 'Squats', count: 50 },
    { name: 'Plank', count: 3 },
    { name: 'Burpees', count: 50 },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}
      style={{ backgroundColor: theme.backgroundColor }}>

      <View style={[styles.card, { backgroundColor: theme.cardBackground }]}>
        <Image
          source={require('../assets/img11.png')} 
          style={styles.image} 
        />

        <Text style={[styles.text, { color: '#f20c55' }]}>Runverve</Text>
        <Text style={[styles.textsm, { color: '#f20c55' }]}>A Step towards Fitness</Text>

       
        <Text style={[styles.greetingText, { color: '#ee05f2' }]}>
          Greetings, <Text style={styles.name}>Sameer</Text>
        </Text>
      </View>


      <View style={[styles.card, { backgroundColor: theme.cardBackground, marginTop: 20 }]}>
        <Text style={[styles.cardHeading, { color: '#44c9c3' }]}>
          Exercises For Today
        </Text>
        {exerciseData2.map((exercise, index) => (
          <Text key={index} style={[styles.exerciseText, { color: theme.textColor }]}>
            {exercise.name}: {exercise.count} reps
          </Text>
        ))}
      </View>

      
      <View style={[styles.card, { backgroundColor: theme.cardBackground, marginTop: 20 }]}>
        <Text style={[styles.cardHeading, { color: '#44c9c3' }]}>
          Workout Data for the Month
        </Text>
        <LineChart
          data={workoutData}
          width={Dimensions.get('window').width - 40} 
          height={220}
          chartConfig={{
            backgroundColor: theme.mode === 'dark' ? '#333' : '#fff',
            backgroundGradientFrom: theme.mode === 'dark' ? '#333' : '#fff',
            backgroundGradientTo: theme.mode === 'dark' ? '#333' : '#fff',
            decimalPlaces: 0, 
            color: (opacity = 1) => `rgba(0, 255, 255, ${opacity})`, 
            labelColor: (opacity = 1) => `rgba(128, 0, 128, ${opacity})`, 
            style: {
              borderRadius: 16,
            },
          }}
          bezier
        />
      </View>


      <View style={[styles.card, { backgroundColor: theme.cardBackground, marginTop: 20 }]}>
        <Text style={[styles.cardHeading, { color: '#44c9c3' }]}>
          Workout Breakdown
        </Text>
        <PieChart
          data={pieData}
          width={Dimensions.get('window').width - 40} 
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

   
      <View style={[styles.card, { backgroundColor: theme.cardBackground, marginTop: 20 }]}>
        <Text style={[styles.cardHeading, { color: '#44c9c3' }]}>
          Exercises For Today
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
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
    borderRadius: 25
  },
  text: {
    fontSize: 60,
    fontWeight: 'bold',
  },
  textsm: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  card: {
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
  },
  greetingText: {
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop:30,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  cardHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
   
  },
  exerciseText: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default Home;
