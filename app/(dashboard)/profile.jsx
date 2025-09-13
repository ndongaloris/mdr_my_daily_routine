import { StyleSheet, Text, View } from 'react-native';
import ThemedView from '../../components/ThemedView';
import { Ionicons } from '@expo/vector-icons';
import { withLayoutContext } from 'expo-router';


const profile = () => {
  return (
    <ThemedView>
      <View style={styles.profileContainer}>
        <Ionicons name="person-circle" size={80} color="#fff" />
        <Text style={styles.profileName}>Loris J. Ndonga</Text>
      </View>

      <View style={styles.report}>
        <View style={styles.reportCard}>
          <Ionicons style={{ textAlign: "center", }} name="calendar" size={30} color="#fff" />
          <Text style={styles.title}>Today's Task</Text>
          <Text style={styles.title}>5</Text>
        </View>
        <View style={styles.reportCard}>
          <Ionicons style={{ textAlign: "center", }} name="radio-button-on" size={30} color="#fff" />
          <Text style={styles.title}>Streak</Text>
          <Text style={styles.title}>12 Days</Text>
        </View>
      </View>

      <View style={styles.appearance}>
        <Text style={styles.header}>Overall Progress</Text>
        <Text style={styles.subHeader}>Task Completted</Text>
        <View style={styles.appearanceSwtich}>
          <Text style={styles.content}>80% completion rate</Text>
          <Ionicons name="stats-chart" size={15} color="#fff" />
        </View>
      </View>

      <View style={styles.appearance}>
        <Text style={styles.header}>Appearance</Text>
        <Text style={styles.subHeader}>Dark Mode</Text>
        <View style={styles.appearanceSwtich}>
          <Text style={styles.content}>Switch to dark theme</Text>
          <Ionicons name="toggle" size={20} color="#fff" />
        </View>
      </View>

      <View style={styles.appearance}>
        <Text style={styles.header}>Preference</Text>
        <Text style={styles.subHeader}>Language</Text>
        <Text style={styles.content}>English</Text>
      </View>
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
  )
}

export default profile

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap:10,
    alignItems: "center",
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
    borderColor: "#ffffff70",
    borderRadius: 8,
    margin: 10,
    padding: 8,
  },
  appearanceSwtich: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  report: {
    flexDirection: 'row',
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
})