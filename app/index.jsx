// Import core React Native components for layout, text, and images
import { StyleSheet, Text, View, Image } from 'react-native';

// Import a custom themed wrapper component (likely handles light/dark mode styling)
import ThemedView from '../components/ThemedView';

// Import Link from expo-router to enable navigation between screens
import { Link } from 'expo-router';

// Define the Home screen component
const Home = () => {
  return (
    // Wrap the screen in a themed view to apply consistent background and styling
    <ThemedView>
      {/* Main container for layout */}
      <View style={styles.container}>
        
        {/* Display an image from local assets */}
        <Image 
          source={require("../assets/SB My Daily Routine.png")} // Local image file
          style={styles.image} // Apply styling for size and border radius
        />

        {/* Welcome message displayed below the image */}
        <Text style={styles.title}>
          Welcome to My Daily Routine Planner
        </Text>

        {/* Navigation link styled as a button to go to the /home route */}
        <Link style={styles.link} href="/home">
          Start ➡
        </Link>
      </View>
    </ThemedView>
  );
};

// Export the Home component as the default export
export default Home;

// Define styles for the screen using React Native's StyleSheet API
const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up full screen height
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
  },
  text: {
    color: 'white', // Text color
    fontSize: 22, // Medium font size
    marginBottom: 10, // Space below the text
  },
  image: {
    width: 450, // Image width
    height: 300, // Image height
    borderRadius: 20, // Rounded corners
  },
  title: {
    color: '#fff', // White text
    fontSize: 25, // Large font size
    fontWeight: 'bold', // Bold text
    paddingBottom: 60, // Space below the title
    textAlign: "center", // Centered text
  },
  calendar: {
    // This style isn't used in this component, but may be used elsewhere
    marginBottom: 20,
    marginTop: 80,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
    marginHorizontal: 20,
  },
  filterBar: {
    // Also unused here, likely for a future feature like filtering tasks
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  link: {
    backgroundColor: '#ffffff22', // Semi-transparent white background
    borderRadius: 30, // Rounded button shape
    paddingHorizontal: 70, // Horizontal padding
    paddingVertical: 10, // Vertical padding
    borderWidth: 1, // Border thickness
    borderColor: '#fff', // White border
    color: "#fff", // Text color
    textAlign: "center", // Centered text
    fontSize: 25, // Large font size for button text
  }
});
