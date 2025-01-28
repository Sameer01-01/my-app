import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { ThemeContext } from '../ThemeContext'; // Import your ThemeContext
import exerciseData from '../Sample Data/exerciseData'; // Import the exercise data from the new file

const Exercise = () => {
  const { darkMode } = useContext(ThemeContext); // Access dark mode from the context
  const [selectedExercise, setSelectedExercise] = useState(null); // Track selected exercise

  const handleCardPress = (exercise) => {
    if (selectedExercise?.id === exercise.id) {
      // If the same exercise is clicked, toggle off
      setSelectedExercise(null);
    } else {
      // Otherwise, show the clicked exercise's details
      setSelectedExercise(exercise);
    }
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: darkMode ? '#333' : '#fff' }]}>
      <Text style={[styles.heading, { color: darkMode ? '#fff' : '#000' }]}>Exercises</Text>

      {exerciseData.map((exercise) => (
        <TouchableOpacity key={exercise.id} onPress={() => handleCardPress(exercise)}>
          <View style={[styles.card, { backgroundColor: darkMode ? '#444' : '#f4f4f4' }]}>
            <View style={styles.cardContent}>
              <Text style={[styles.exerciseName, { color: darkMode ? '#fff' : '#000' }]}>{exercise.name}</Text>

              {selectedExercise?.id === exercise.id ? (
                <View style={styles.details}>
                  <Text style={[styles.description, { color: darkMode ? '#ccc' : '#555' }]}>{exercise.description}</Text>
                  <Text style={[styles.instructions, { color: darkMode ? '#ccc' : '#555' }]}>{exercise.instructions}</Text>

                  <TouchableOpacity
                    onPress={() => setSelectedExercise(null)} // Close details when clicked
                    style={[styles.button, { backgroundColor: darkMode ? '#555' : '#ddd' }]}>
                    <Text style={[styles.buttonText, { color: darkMode ? '#fff' : '#000' }]}>Close</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <TouchableOpacity
                  onPress={() => setSelectedExercise(exercise)} // Show details when clicked
                  style={[styles.button, { backgroundColor: darkMode ? '#555' : '#ddd' }]}>
                  <Text style={[styles.buttonText, { color: darkMode ? '#fff' : '#000' }]}>View More</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </TouchableOpacity>
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
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    borderRadius: 10,
    marginBottom: 20,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6,
    borderWidth: 1,
    borderColor: '#ddd',
    overflow: 'hidden',
  },
  cardContent: {
    alignItems: 'center',
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  details: {
    alignItems: 'center',
  },
  description: {
    fontSize: 14,
    marginBottom: 8,
  },
  instructions: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 8,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Exercise;
