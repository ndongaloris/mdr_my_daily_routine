import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ThemedView from '../../components/ThemedView';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';



const Home = () => {

  return (
    <ThemedView style={styles.container}>
      <View style={styles.placer}>
        <Ionicons style={{ textAlign: "center" }} name="sunny" size={100} color="#fff" />
        <Text style={styles.title}>Good Morning!</Text>
        <Text style={{textAlign: "center", color: "#fff"}}>Ready to start your day?</Text>
      </View>
      <View style={styles.quote}>
        <Text style={styles.title}>
          "The secret of getting ahead is getting started."
        </Text>
        <Text style={styles.title}>
          - Mark Twain
        </Text>
      </View>

      <View style={styles.report}>
        <View style={styles.reportCard}>
          <Ionicons style= {{textAlign: "center",}}name="calendar" size={40} color="#fff" />
          <Text style={styles.title}>Today's Task</Text>
          <Text style={styles.title}>5</Text>
        </View>
        <View style={styles.reportCard}>
          <Ionicons style= {{textAlign: "center",}}name="radio-button-on" size={40} color="#fff" />
          <Text style={styles.title}>Streak</Text>
          <Text style={styles.title}>12 Days</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.actionButton1} onPress={() => router.push("/planner")}>
        <Text style={styles.actionButtonText}>Start Your Day</Text>
      </TouchableOpacity>

      <View style={styles.action}>
        <TouchableOpacity style={styles.actionButton2} onPress={() => router.push('/add')}>
          <Text style={styles.actionButtonText}>Add Routine</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton2} onPress={() => router.push("/profile")}>
          <Text style={styles.actionButtonText}> View Profile</Text>
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  placer: {
    marginTop: 80,
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 10,
  },
  actionButton1: {
    alignItems: 'center',
    marginHorizontal: 16,
    borderRadius: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: "space-between",
    backgroundColor: '#4E4AF2',
    marginVertical: 10,
  },
  actionButton2: {
    alignItems: 'center',
    marginHorizontal: 16,
    borderRadius: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: "space-between",
    width: 160,
  },
  actionButtonText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    justifyContent: "space-between",
  },
  report: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    justifyContent: "space-around",
    margin: 5,
  },
  reportCard: {
    // borderWidth: 1,
    borderColor: '#ffffff70',
    borderRadius: 12,
    width: 160,
    padding: 15,
    
  },
  quote:{
    borderRadius: 12,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ffffff70',
    marginHorizontal: 15 ,
    marginVertical: 25,
  }

});
