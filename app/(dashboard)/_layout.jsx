import { StyleSheet } from 'react-native'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';


const DashboardLayout = () => {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "white",
            tabBarStyle: {
                backgroundColor: "#353F54",
            }
        }}>
            <Tabs.Screen name='home' options={{
                title: "Home",
                tabBarIcon: () => (
                    <Ionicons name="home" size={30} color="white" />

                )
            }} />
            <Tabs.Screen name='planner' options={{
                title: "Planner",
                tabBarIcon: () => (
                    <Ionicons name="calendar" size={30} color="white" />

                )
            }} />
            <Tabs.Screen name='add' options={{ title: "Add",
                tabBarIcon: () => (
                    <Ionicons name="add-circle-sharp" size={30} color="white" />

                )
             }} />
            <Tabs.Screen name='profile' options={{ title: "Profile",
                tabBarIcon: () => (
                    <Ionicons name="person" size={30} color="white" />

                )
             }} />
        </Tabs>
    )
}

export default DashboardLayout

const styles = StyleSheet.create({})