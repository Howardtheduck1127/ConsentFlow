import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons.js';

import ParentHomeScreen from '../Screens/ParentHomeScreen.js';
import TeacherHomeScreen from '../Screens/TeacherHomeScreen.js';
import ProfileScreen from '../Screens/ProfileScreen.js';
import MessageScreen from '../Screens/MessageScreen.js';
import SettingsScreen from '../Screens/SettingsScreen.js';

import CustomDrawer from '../components/CustomDrawer.js';

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor: '#15A3C7',
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#15A3C7',
                drawerLabelStyle: {
                    marginLeft: -20,
                    fontSize: 15
                },
            }}>
            <Drawer.Screen name='Home' component={TeacherHomeScreen} options={{
                drawerIcon: ({ color }) => (
                    <Ionicons name='home-outline' size={22} color={color} />
                )
            }} />
            <Drawer.Screen name='Profile' component={ProfileScreen} options={{
                drawerIcon: ({ color }) => (
                    <Ionicons name='person-outline' size={22} color={color} />
                )
            }} />
            <Drawer.Screen name='Message' component={MessageScreen} options={{
                drawerIcon: ({ color }) => (
                    <Ionicons name='chatbox-ellipses-outline' size={22} color={color} />
                )
            }} />
            <Drawer.Screen name='Settings' component={SettingsScreen} options={{
                drawerIcon: ({ color }) => (
                    <Ionicons name='settings-outline' size={22} color={color} />
                )
            }} />
        </Drawer.Navigator>
    )
}

export default DrawerStack;