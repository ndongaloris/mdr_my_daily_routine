import { StyleSheet} from 'react-native'
import { Tabs } from 'expo-router'

const DashboardLayout = () => {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "white",
            tabBarStyle:{
                backgroundColor: "#353F54",
            }
        }} />
    )
}

export default DashboardLayout

const styles = StyleSheet.create({})