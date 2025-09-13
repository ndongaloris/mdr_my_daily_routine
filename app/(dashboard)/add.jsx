// Import core React Native components for layout, input, and interactivity
import { StyleSheet, Text, TextInput, FlatList, View, TouchableOpacity } from 'react-native';

// Import a custom wrapper that applies consistent theming (e.g., dark/light mode backgrounds)
import ThemedView from '../../components/ThemedView';

// Import React and useState hook for managing local component state
import React, { useState } from 'react';

// Import dropdown component for selecting time of day (morning, afternoon, evening)
import { Dropdown } from 'react-native-element-dropdown';

// Import checkbox component to allow users to mark tasks as completed
import CheckBox from 'expo-checkbox';

// Define dropdown options for time-of-day categorization
const data = [
  { label: 'Morning', value: '1' },
  { label: 'Afternoon', value: '2' },
  { label: 'Evening', value: '3' },
];

// Define a static list of tasks with emojis, titles, and status labels
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

// Main component for the "Add" screen
const add = () => {
  // State to hold the user's input for a new task
  const [text, setText] = useState('');

  // State to hold the selected time-of-day value from the dropdown
  const [value, setValue] = useState(null);

  // Define filter options for displaying tasks based on time of day
  const filters = ['🌅 Morning', '☀ Afternoon', '🌙 Evening'];

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
    <ThemedView>
      {/* Page title */}
      <Text style={styles.title}>Manage Your Daily Routine</Text>

      {/* Input section for adding a new task */}
      <View>
        {/* Text input for entering task description */}
        <TextInput
          style={styles.input}
          placeholder="Enter a new task..."
          onChangeText={newText => setText(newText)}
        />

        {/* Dropdown for selecting time of day */}
        <Dropdown
          data={data}
          labelField="label"
          valueField="value"
          placeholder="Select time of day"
          value={value} // ✅ Corrected from `data.values` to `value`
          onChange={item => setValue(item.value)}
          style={styles.dropdown}
        />

        {/* Button to add the task — currently non-functional */}
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+ Add Task</Text>
        </TouchableOpacity>
      </View>

      {/* Filter bar to switch between time-of-day views */}
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

      {/* Static label — likely leftover from testing */}
      <Text style={styles.addButtonText}>🌅 Morning</Text>

      {/* Render the filtered list of tasks */}
      <FlatList
        data={filteredTasks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </ThemedView>
  );
};

export default add;

// Style definitions for layout, input fields, buttons, and task items
const styles = StyleSheet.create({
  title: {
    paddingTop: 50,
    textAlign: "center",
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 10,
  },
  input: {
    color: 'white',
    fontSize: 17,
    height: 50,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    backgroundColor: '#ffffff22',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: "space-between",
  },
  dropdown: {
    color: 'white',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
    marginHorizontal: 16,
    backgroundColor: '#ffffff22',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: "space-between",
  },
  filterBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  addButton: {
    alignItems: 'center',
    marginHorizontal: 16,
    backgroundColor: '#4d4af20e',
    borderRadius: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: "space-between"
  },
  addButtonText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#eee',
  },
  buttonText: {
    color: '#333',
    fontWeight: 'bold',
  },
  activeText: {
    color: '#fff',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 3,
    marginHorizontal: 16,
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    justifyContent: "space-between",
  },
  list: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
