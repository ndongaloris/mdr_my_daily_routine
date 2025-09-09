import { StyleSheet, useColorScheme } from 'react-native'
import { Stack } from 'expo-router'
import { Colors } from '../constants/colors';

const RouteLayout = () => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;
    
  return (
    <Stack>
        <Stack.Screen name='index' options={{title:"My Daily Routine"}} />
    </Stack>
  )
}

export default RouteLayout

const styles = StyleSheet.create({})