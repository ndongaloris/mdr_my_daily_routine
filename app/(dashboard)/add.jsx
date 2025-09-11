import { StyleSheet, Text, TextInput, FlatList, View, TouchableOpacity } from 'react-native';
import ThemedView from '../../components/ThemedView';
import React, { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import CheckBox from 'expo-checkbox';

const data = [
  { label: 'Morning', value: '1' },
  { label: 'Afternoon', value: '2' },
  { label: 'Evening', value: '3' },
];

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
const add = () => {

  const [text, setText] = useState('');
  const [value, setValue] = useState(null);

  const filters = ['🌅 Morning', '☀ Afternoon', '🌙 Evening'];
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
          </View>)

  return (
    <ThemedView>
      <Text style={styles.title}>Manage Your Daily Routine</Text>
      
      <View>
        <TextInput
          style={styles.input}
          placeholder="Enter a new task..."
          onChangeText={newText => setText(newText)}
        />
        <Dropdown
          data={data}
          labelField="label"
          valueField="value"
          placeholder="Select time of day"
          value={data.values}
          onChange={item => setValue(item.value)}
          style={styles.dropdown}
        />
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+ Add Task</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.filterBar}>
        {filters.map(filter => (
          <TouchableOpacity
            key={filter}
            style={[
              styles.button,
              activeFilter === filter && styles.activeButton,
            ]}
            onPress={() => setActiveFilter(filter)}>
            <Text
              style={[
                styles.buttonText,
                activeFilter === filter && styles.activeText,
              ]}>
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
        <Text style={styles.addButtonText}>🌅 Morning</Text>

      <FlatList
        data={filteredTasks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </ThemedView>
  )
}

export default add

const styles = StyleSheet.create({
  title: {
    paddingTop: 50, // adjust based on header height
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
    backgroundColor: '#4E4AF2',
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