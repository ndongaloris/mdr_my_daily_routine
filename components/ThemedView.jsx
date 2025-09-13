// Import hook to detect the current system color scheme (light or dark)
import { useColorScheme } from 'react-native';

// Import LinearGradient component to create a gradient background
import { LinearGradient } from 'expo-linear-gradient';

// Import custom color definitions from your constants file
import { Colors } from '../constants/colors';

// Define a reusable wrapper component that applies a themed gradient background
const ThemedView = ({ style, children, ...props }) => {
  // Get the current color scheme from the device (either 'light' or 'dark')
  const colorScheme = useColorScheme();

  // Select the appropriate theme colors based on the color scheme
  // If the scheme is undefined or unsupported, default to the light theme
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    // Apply a linear gradient as the background of the view
    <LinearGradient
      // Define the gradient colors manually (can be replaced with theme-based values)
      colors={['#353F54', '#34C8E8']} // Dark blue to bright cyan gradient
      locations={[0.1, 0.9]} // Gradient stops: start at 10%, end at 90%
      start={{ x: 0, y: 0 }} // Gradient starts from top-left
      end={{ x: 2, y: 0.5 }} // Gradient ends beyond the right edge for a stretched effect
      style={{ flex: 1 }} // Ensure the gradient fills the entire screen
      {...props} // Pass any additional props to the LinearGradient component
    >
      {/* Render any child components inside the gradient background */}
      {children}
    </LinearGradient>
  );
};

// Export the component so it can be used throughout the app
export default ThemedView;
