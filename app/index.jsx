import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ThemedView from '../components/ThemedView';
import { Calendar } from 'react-native-calendars';
import CheckBox from 'expo-checkbox';
import { Link } from 'expo-router';

const Home = () => {
  return (
    <ThemedView>
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
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to My Daily Routine Planner </Text>
        <Link style={styles.link} href="/home">Start</Link>
      </View>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  text: {
    color: 'white',
    fontSize: 22,
    marginBottom: 10,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 60,
    textAlign: "center",
  },
  calendar: {
    marginBottom: 20,
    marginTop: 80,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
    marginHorizontal: 20,
  },
  filterBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  link: {
    marginVertical: 6,
    marginHorizontal: 80,
    backgroundColor: '#ffffff22',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#fff',
    color: "#fff",
    textAlign: "center"
  }

});
