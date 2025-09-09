import { StyleSheet, useColorScheme } from 'react-native'
import { Stack, Tabs } from 'expo-router'
import { Colors } from '../constants/colors';

const RouteLayout = () => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;

    return (
        <Stack>
            <Stack.Screen name='index' options={{
                title: "My Daily Routine 📅",
                headerStyle: {
                    backgroundColor: 'transparent', // or match your theme
                    elevation: 0, // Android
                    shadowOpacity: 0, // iOS
                },
                headerTitleStyle: {
                    color: 'white', // match your text color
                    fontWeight: 'bold',
                },
                headerTransparent: true, // overlays the body
            }} />

            <Stack.Screen name='(dashboard)' options={{
                title: "Home", 
                headerShown: false,
                }
            } />

        </Stack>
    )
}

export default RouteLayout

const styles = StyleSheet.create({})