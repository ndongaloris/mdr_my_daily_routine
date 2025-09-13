// Import core React Native components for layout and text
import { StyleSheet, Text, View } from 'react-native';

// Import a custom wrapper that applies consistent theming (e.g., dark/light mode backgrounds)
import ThemedView from '../../components/ThemedView';

// Import Ionicons for vector icons used throughout the UI
import { Ionicons } from '@expo/vector-icons';

// Define the Profile screen component
const profile = () => {
  return (
    // ThemedView wraps the screen and applies theme-based background styling
    <ThemedView>
      
      {/* Profile header section with avatar icon and user name */}
      <View style={styles.profileContainer}>
        <Ionicons name="person-circle" size={80} color="#fff" /> {/* User avatar icon */}
        <Text style={styles.profileName}>Loris J. Ndonga</Text> {/* Displayed user name */}
      </View>

      {/* Report section showing today's task count and streak */}
      <View style={styles.report}>
        {/* Card showing number of tasks for today */}
        <View style={styles.reportCard}>
          <Ionicons style={{ textAlign: "center" }} name="calendar" size={30} color="#fff" />
          <Text style={styles.title}>Today's Task</Text>
          <Text style={styles.title}>5</Text> {/* Static value; could be dynamic later */}
        </View>

        {/* Card showing user's streak */}
        <View style={styles.reportCard}>
          <Ionicons style={{ textAlign: "center" }} name="radio-button-on" size={30} color="#fff" />
          <Text style={styles.title}>Streak</Text>
          <Text style={styles.title}>12 Days</Text> {/* Static value; could be dynamic later */}
        </View>
      </View>

      {/* Section showing overall progress */}
      <View style={styles.appearance}>
        <Text style={styles.header}>Overall Progress</Text>
        <Text style={styles.subHeader}>Task Completted</Text> {/* Typo: should be "Completed" */}
        <View style={styles.appearanceSwtich}>
          <Text style={styles.content}>80% completion rate</Text> {/* Static progress metric */}
          <Ionicons name="stats-chart" size={15} color="#fff" /> {/* Icon representing progress */}
        </View>
      </View>

      {/* Section for appearance settings */}
      <View style={styles.appearance}>
        <Text style={styles.header}>Appearance</Text>
        <Text style={styles.subHeader}>Dark Mode</Text>
        <View style={styles.appearanceSwtich}>
          <Text style={styles.content}>Switch to dark theme</Text> {/* Placeholder text */}
          <Ionicons name="toggle" size={20} color="#fff" /> {/* Toggle icon (non-functional) */}
        </View>
      </View>

      {/* Section for user preferences */}
      <View style={styles.appearance}>
        <Text style={styles.header}>Preference</Text>
        <Text style={styles.subHeader}>Language</Text>
        <Text style={styles.content}>English</Text> {/* Static language setting */}
      </View>

      {/* Additional settings sections */}
      <View style={styles.appearance}>
        <Text style={styles.subHeader}>Privacy & Security</Text>
      </View>
      <View style={styles.appearance}>
        <Text style={styles.subHeader}>Help & Support</Text>
      </View>
      <View style={styles.appearance}>
        <Text style={styles.subHeader}>Send Feedback</Text>
      </View>
    </ThemedView>
  );
};

export default profile;

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row', // Horizontal layout for icon and name
    alignItems: 'center',
    padding: 16,
    gap: 10, // Space between icon and name (React Native 0.71+)
    marginTop: 30,
  },
  profileName: {
    fontSize: 30,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  content: {
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
  },
  appearance: {
    borderWidth: 1,
    borderColor: "#ffffff70", // Semi-transparent white border
    borderRadius: 8,
    margin: 10,
    padding: 8,
  },
  appearanceSwtich: {
    flexDirection: "row", // Horizontal layout for label and icon
    justifyContent: "space-between",
  },
  report: {
    flexDirection: 'row', // Horizontal layout for cards
    alignItems: 'center',
    justifyContent: "space-around",
    margin: 5,
  },
  reportCard: {
    borderWidth: 1,
    borderColor: '#ffffff70',
    borderRadius: 12,
    width: 180,
    padding: 15,
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: 'bold',
    color: 'white',
  },
});
