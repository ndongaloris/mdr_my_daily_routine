import { StyleSheet, Text, View } from 'react-native';
import ThemedView from '../../components/ThemedView';
import { Ionicons } from '@expo/vector-icons';


const profile = () => {
  return (
    <ThemedView>
      <Text>profile</Text>
      <View style={styles.profileContainer}>
        <Ionicons name="person-circle" size={80} color="#fff" />
        <Text style={styles.profileName}>Loris J. Ndonga</Text>
      </View>

      <View>
        <Text style={styles.profileName}>Appearance</Text>
        <Text style={styles.profileName}>Dark Mode
        </Text>
        <Text style={styles.profileName}>Switch to dark theme</Text>
      </View>
      <Text style={styles.profileName}>Preference</Text>
      <Text style={styles.profileName}>Language</Text>
      <Text style={styles.profileName}>Language List</Text>
      <Text style={styles.profileName}>Privacy & Security</Text>
      <Text style={styles.profileName}>Help & Support</Text>
      <Text style={styles.profileName}>Send Feedback</Text>
    </ThemedView>
  )
}

export default profile

const styles = StyleSheet.create({
    profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  profileName: {
    marginLeft: 12,
    fontSize: 40,
    fontWeight: '600',
    color: '#fff',
  },
})