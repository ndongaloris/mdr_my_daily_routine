import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ThemedView from '../../components/ThemedView';
import { Calendar } from 'react-native-calendars';
import CheckBox from 'expo-checkbox';
import React, { useState } from 'react';

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

const filters = ['All', 'Completed', 'Pending'];

const Planner = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredTasks =
    activeFilter === 'All'
      ? tasks
      : tasks.filter(task => task.status === activeFilter);

      const toggleCheck = (id) => {
        const updated = tasks.map(task =>
          task.id === id ? { ...task, checked: !task.checked } : task
        );
        setTasks(updated);
      };
      
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
    <ThemedView style={styles.container}>
      <Text style={styles.title}>Welcome to your dashboard</Text>
      <Calendar
        style={styles.calendar}
        theme={{
          backgroundColor: '#353F54',
          calendarBackground: '#353F54',
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
        flex: 1,
    },
    title: {
      paddingTop: 50, // adjust based on header height
      paddingLeft:40,
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
    marginHorizontal:20,
  },
  filterBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#eee',
  },
  activeButton: {
    backgroundColor: '#4E4AF2',
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
    marginVertical: 6,
    marginHorizontal: 16,
    backgroundColor: '#ffffff22',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: "space-between",
  },
  list: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
