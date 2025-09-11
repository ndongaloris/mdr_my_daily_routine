import { StyleSheet, Text, View, Image } from 'react-native';
import ThemedView from '../components/ThemedView';
import { Link } from 'expo-router';

const Home = () => {
  return (
    <ThemedView>
      <View style={styles.container}>
        <Image source={require("../assets/SB My Daily Routine.png")}
          style={styles.image}
        />
        <Text style={styles.title}>Welcome to My Daily Routine Planner </Text>
        <Link style={styles.link} href="/home">Start ➡</Link>
      </View>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

  },
  text: {
    color: 'white',
    fontSize: 22,
    marginBottom: 10,
  },
  image: {
    width: 450,
    height: 300,
    borderRadius: 20,
  },
  title: {
    color: '#fff',
    fontSize: 25,
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
    backgroundColor: '#ffffff22',
    borderRadius: 30,
    paddingHorizontal: 70,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#fff',
    color: "#fff",
    textAlign: "center",
    fontSize: 25,
  }

});
