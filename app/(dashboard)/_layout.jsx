// Import StyleSheet for styling (currently unused but ready for future styles)
import { StyleSheet } from 'react-native';

// Import Tabs from expo-router to define bottom tab navigation
import { Tabs } from 'expo-router';

// Import Ionicons for tab bar icons (from the Expo vector icons library)
import { Ionicons } from '@expo/vector-icons';

// Define the layout component for the dashboard section
const DashboardLayout = () => {
    return (
        // Set up tab navigation using Expo Router's <Tabs> component
        <Tabs 
            screenOptions={{
                headerShown: false, // Hide the header bar across all tabs
                tabBarActiveTintColor: "white", // Active tab icon/text color
                tabBarStyle: {
                    backgroundColor: "#353F54", // Dark background for the tab bar
                }
            }}
        >
            {/* Tab 1: Home screen */}
            <Tabs.Screen 
                name='home' 
                options={{
                    title: "Home", // Label shown under the icon
                    tabBarIcon: () => (
                        <Ionicons name="home-outline" size={30} color="white" />
                    )
                }} 
            />

            {/* Tab 2: Planner screen */}
            <Tabs.Screen 
                name="planner" 
                options={{
                    title: "Planner", // Label for planner tab
                    tabBarIcon: () => (
                        <Ionicons name="calendar-outline" size={30} color="white" />
                    )
                }} 
            />

            {/* Tab 3: Add screen (for adding tasks or routines) */}
            <Tabs.Screen 
                name='add' 
                options={{ 
                    title: "Add", // Label for add tab
                    tabBarIcon: () => (
                        <Ionicons name="add-circle-outline" size={30} color="white" />
                    )
                }} 
            />

            {/* Tab 4: Profile screen */}
            <Tabs.Screen 
                name='profile' 
                options={{ 
                    title: "Profile", // Label for profile tab
                    tabBarIcon: () => (
                        <Ionicons name="person-outline" size={30} color="white" />
                    )
                }} 
            />
        </Tabs>
    );
};

// Export the layout component so Expo Router can use it for routing
export default DashboardLayout;

// Define a StyleSheet object (currently empty, but can be used for custom styles later)
const styles = StyleSheet.create({});
