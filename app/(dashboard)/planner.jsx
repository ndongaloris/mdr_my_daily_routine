// Import core React Native components for layout, lists, and interaction
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// Import a custom wrapper that applies consistent theming (e.g., dark/light mode backgrounds)
import ThemedView from '../../components/ThemedView';

// Import calendar component for date selection and display
import { Calendar } from 'react-native-calendars';

// Import checkbox component to allow users to mark tasks as completed
import CheckBox from 'expo-checkbox';

// Import React and useState hook for managing local component state
import React, { useState } from 'react';

// Static list of tasks with emojis, titles, and status labels
// ⚠️ These tasks are hardcoded and not connected to state, so they won't update dynamically
const tasks = [
  { id: '1', title: '☀️ Morning stretch', status: 'Completed' },
  { id: '2', title: '📧 Check emails', status: 'Pending' },
  { id: '3', title: '🛒 Buy groceries', status: 'Pending' },
  { id: '4', title: '📚 Read 10 pages of a book', status: 'Completed' },
  { id: '5', title: '💻 Work on React Native project', status: 'Pending' },
  { id: '6', title: '📞 Call Mom', status: 'Completed' },
  { id: '7', title: '🍽️ Cook dinner', status: 'Pending' },
  { id: '8', title: '📝 Journal reflections', status: 'Completed' },
  { id: '9', title: '🧹 Clean the kitchen', status: 'Pending' },
  { id: '10', title: '🌙 Plan tomorrow’s top 3 tasks', status: 'Completed' },
];

// Filter options for task status
const filters = ['All', 'Completed', 'Pending'];

// Main component for the Planner screen
const Planner = () => {
  // State to track which filter is currently active
  const [activeFilter, setActiveFilter] = useState('All');

  // Filter the task list based on the active filter
  // If "All" is selected, show all tasks; otherwise, filter by status
  const filteredTasks =
    activeFilter === 'All'
      ? tasks
      : tasks.filter(task => task.status === activeFilter);

  // Function to toggle checkbox state for a task
  // ⚠️ This won't work properly because `tasks` is not a state variable
  const toggleCheck = (id) => {
    const updated = tasks.map(task =>
      task.id === id ? { ...task, checked: !task.checked } : task
    );
    setTasks(updated); // ❌ This will throw an error — `setTasks` is undefined
  };

  // Function to render each task item in the FlatList
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.list}>{item.title}</Text>
      <CheckBox
        value={item.checked}
        onValueChange={() => toggleCheck(item.id)}
        color={item.checked ? '#00008b' : undefined}
      />
    </View>
  );

  return (
    // ThemedView wraps the entire screen and applies background styling based on theme
    <ThemedView style={styles.container}>
      
      {/* Page title */}
      <Text style={styles.title}>Welcome to your dashboard</Text>

      {/* Calendar component for selecting and viewing dates */}
      <Calendar
        style={styles.calendar}
        theme={{
          backgroundColor: '#353f5404',
          calendarBackground: '#353f5404',
          textSectionTitleColor: '#34C8E8',
          selectedDayBackgroundColor: '#fff',
          selectedDayTextColor: '#fff',
          todayTextColor: '#34C8E8',
          dayTextColor: '#fff',
          arrowColor: '#fff',
          monthTextColor: "#fff",
          todayBackgroundColor: "#fff",
        }}
      />

      {/* Filter bar to switch between task status views */}
      <View style={styles.filterBar}>
        {filters.map(filter => (
          <TouchableOpacity
            key={filter}
            style={[
              styles.button,
              activeFilter === filter && styles.activeButton,
            ]}
            onPress={() => setActiveFilter(filter)}
          >
            <Text
              style={[
                styles.buttonText,
                activeFilter === filter && styles.activeText,
              ]}
            >
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Render the filtered list of tasks */}
      <FlatList
        data={filteredTasks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </ThemedView>
  );
};

export default Planner;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Full height of the screen
  },
  title: {
    paddingTop: 50, // Push title down from top (adjust for header height)
    paddingLeft: 40, // Indent title from left
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  text: {
    color: 'white',
    fontSize: 22,
    marginBottom: 10,
  },
  calendar: {
    marginBottom: 20,
    marginTop: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
    marginHorizontal: 20,
  },
  filterBar: {
    flexDirection: 'row', // Horizontal layout for filter buttons
    justifyContent: 'space-around', // Even spacing between buttons
    marginVertical: 10,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#eee', // Default background
  },
  activeButton: {
    backgroundColor: '#34C8E8', // Highlight active filter
  },
  buttonText: {
    color: '#333',
    fontWeight: 'bold',
  },
  activeText: {
    color: '#fff', // White text for active filter
  },
  item: {
    flexDirection: 'row', // Horizontal layout for task and checkbox
    alignItems: 'center',
    marginVertical: 6,
    marginHorizontal: 16,
    backgroundColor: '#ffffff22', // Semi-transparent background
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: "space-between", // Space between task text and checkbox
  },
  list: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

