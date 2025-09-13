// Import necessary modules from React Native and Expo Router
import { StyleSheet, useColorScheme } from 'react-native'; // useColorScheme detects light/dark mode
import { Stack } from 'expo-router'; // Stack is used to define screen navigation
import { Colors } from '../constants/colors'; // Custom color themes defined in your project

// Define the layout component that controls routing and screen appearance
const RouteLayout = () => {
    // Detect the current system color scheme (light or dark)
    const colorScheme = useColorScheme();

    // Select the appropriate theme based on the detected color scheme
    // If no match is found, default to the light theme
    const theme = Colors[colorScheme] ?? Colors.light;

    return (
        // Define a stack navigator to manage screen transitions
        <Stack>
            {/* Screen 1: The 'index' screen, likely your landing or welcome page */}
            <Stack.Screen 
                name='index' 
                options={{
                    title: "My Daily Routine 📅", // Title shown in the header bar
                    headerStyle: {
                        backgroundColor: 'transparent', // Makes the header background see-through
                        elevation: 0, // Removes shadow on Android for a flat look
                        shadowOpacity: 0, // Removes shadow on iOS
                    },
                    headerTitleStyle: {
                        color: 'white', // Sets the title text color
                        fontWeight: 'bold', // Makes the title bold
                        fontSize: 30, // Enlarges the title font
                    },
                    headerTransparent: true, // Allows content to appear behind the header
                }} 
            />

            {/* Screen 2: The '(dashboard)' screen, likely your main app interface */}
            <Stack.Screen 
                name='(dashboard)' 
                options={{
                    title: "Home", // Title (not shown since header is hidden)
                    headerShown: false, // Completely hides the header for a full-screen experience
                }} 
            />
        </Stack>
    );
}

// Export the layout component so it can be used by Expo Router
export default RouteLayout;

// Define a StyleSheet object for future styling needs (currently empty)
const styles = StyleSheet.create({});
