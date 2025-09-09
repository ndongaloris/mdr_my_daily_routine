import {FlatList, StyleSheet, Text, View } from 'react-native'
import ThemedView from '../components/ThemedView'

const tasks = [
  { id: '1', title: '☀️ Morning stretch' },
  { id: '2', title: '📧 Check emails' },
  { id: '3', title: '🛒 Buy groceries' },
  { id: '4', title: '📚 Read 10 pages of a book' },
  { id: '5', title: '💻 Work on React Native project' },
  { id: '6', title: '📞 Call Mom' },
  { id: '7', title: '🍽️ Cook dinner' },
  { id: '8', title: '📝 Journal reflections' },
  { id: '9', title: '🧹 Clean the kitchen' },
  { id: '10', title: '🌙 Plan tomorrow’s top 3 tasks' },
];


const Home = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.list}>{item.title}</Text>
    </View>
  );
  return (
    <ThemedView style={styles.container}>
      <Text style={styles.text}>My Daily Routine</Text>
    <FlatList
      data={tasks}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
  container :{
    flex: 1,
  },
  text:{
    color: "white",
  },
  list:{
    color: "white",
    borderColor: "#ccc",
    margin: 10,
    border:5,
    borderRadius: 50,
    padding: 20,
    textAlign: 'center',
    borderWidth: 2,
    elevation:4,
  }
})