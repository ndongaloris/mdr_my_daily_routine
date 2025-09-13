// Import core React Native components for layout and interaction
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// Import a custom wrapper that applies consistent theming (e.g., dark/light mode backgrounds)
import ThemedView from '../../components/ThemedView';

// Import router from Expo Router to enable screen navigation
import { router } from 'expo-router';

// Import Ionicons for vector icons used throughout the UI
import { Ionicons } from '@expo/vector-icons';

// Define the Home screen component
const Home = () => {
  return (
    // ThemedView wraps the entire screen and applies background styling based on theme
    <ThemedView style={styles.container}>
      
      {/* Greeting section with icon and welcome message */}
      <View style={styles.placer}>
        {/* Moon icon to reflect time of day (evening theme) */}
        <Ionicons style={{ textAlign: "center" }} name="moon-sharp" size={80} color="#fff" />
        
        {/* Bold greeting text */}
        <Text style={styles.title}>Good Evening!</Text>

        {/* Subtext prompting the user to begin their day */}
        <Text style={{ textAlign: "center", color: "#fff" }}>
          Ready to start your day?
        </Text>
      </View>

      {/* Motivational quote section */}
      <View style={styles.quote}>
        <Text style={styles.title}>
          "The secret of getting ahead is getting started."
        </Text>
        <Text style={styles.title}>
          - Mark Twain
        </Text>
      </View>

      {/* Report section showing task count and streak */}
      <View style={styles.report}>
        {/* Card showing today's task count */}
        <View style={styles.reportCard}>
          <Ionicons style={{ textAlign: "center" }} name="calendar" size={40} color="#fff" />
          <Text style={styles.title}>Today's Task</Text>
          <Text style={styles.title}>5</Text> {/* Static value; could be dynamic later */}
        </View>

        {/* Card showing user's streak */}
        <View style={styles.reportCard}>
          <Ionicons style={{ textAlign: "center" }} name="radio-button-on" size={40} color="#fff" />
          <Text style={styles.title}>Streak</Text>
          <Text style={styles.title}>12 Days</Text> {/* Static value; could be dynamic later */}
        </View>
      </View>

      {/* Primary action button to start the day */}
      <TouchableOpacity 
        style={styles.actionButton1} 
        onPress={() => router.push("/planner")} // Navigates to planner screen
      >
        <Text style={styles.actionButtonText}>Start Your Day</Text>
      </TouchableOpacity>

      {/* Secondary action buttons for adding routines and viewing profile */}
      <View style={styles.action}>
        <TouchableOpacity 
          style={styles.actionButton2} 
          onPress={() => router.push('/add')} // Navigates to add routine screen
        >
          <Text style={styles.actionButtonText}>Add Routine</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.actionButton2} 
          onPress={() => router.push("/profile")} // Navigates to profile screen
        >
          <Text style={styles.actionButtonText}>View Profile</Text>
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Full height of the screen
  },
  placer: {
    marginTop: 80, // Push greeting section down from top
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
    backgroundColor: '#34C8E8', // Bright blue for emphasis
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
    width: 160, // Fixed width for side-by-side layout
  },
  actionButtonText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row', // Horizontal layout for buttons
    alignItems: 'center',
    marginVertical: 20,
    justifyContent: "space-between", // Space between buttons
  },
  report: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    justifyContent: "space-around", // Even spacing between cards
    margin: 5,
  },
  reportCard: {
    borderColor: '#ffffff70', // Semi-transparent white border
    borderRadius: 12,
    width: 160,
    padding: 15,
  },
  quote: {
    borderRadius: 12,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ffffff70',
    marginHorizontal: 15,
    marginVertical: 25,
  },
});
