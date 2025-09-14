import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';

import Ionicons from 'react-native-vector-icons/Ionicons.js';
import ParentHomeScreen from './src/Screens/ParentHomeScreen.js';
import TeacherHomeScreen from './src/Screens/TeacherHomeScreen.js';
import ProfileScreen from './src/Screens/ProfileScreen.js';
import MessageScreen from './src/Screens/MessageScreen.js';
import SettingsScreen from './src/Screens/SettingsScreen.js';
import CustomDrawer from './src/components/CustomDrawer.js';
import OnBoardingScreen from './src/Screens/OnBoardingScreen.js';
import LoginScreen from './src/Screens/LoginScreen.js';
import RegisterScreen from './src/Screens/RegisterScreen.js';
import CreateClassScreen from './src/Screens/CreateClassScreen.js';
import JoinClassScreen from './src/Screens/JoinClassScreen.js';

//const HomeNav = () => {
//const Stack = createNativeStackNavigator();
//return (
//<Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="TeacherHome">
//<Stack.Screen name='TeacherHome' component={TeacherHomeScreen} />
//<Stack.Screen name='CreateClass' component={CreateClassScreen} />
//<Stack.Screen name='JoinClass' component={JoinClassScreen} />
//<Stack.Screen name="LoginUser" component={AuthNav} />
//</Stack.Navigator>
//);
//}

const TeacherHomeNav = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='TeacherHome' component={TeacherHomeScreen} />
      <Stack.Screen name='CreateClass' component={CreateClassScreen} />
      <Stack.Screen name='JoinClass' component={JoinClassScreen} />
      <Stack.Screen name="LoginUser" component={AuthNav} />
    </Stack.Navigator>
  );
}

const ParentHomeNav = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='ParentHome' component={ParentHomeScreen} />
    </Stack.Navigator>
  );
}

const ParentDrawerNav = () => {
  const Drawer = createDrawerNavigator();
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
      <Drawer.Screen name='Home' component={ParentHomeNav} options={{
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

const TeacherDrawerNav = () => {
  const Drawer = createDrawerNavigator();
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
      <Drawer.Screen name='Home' component={TeacherHomeNav} options={{
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

const AuthNav = () => {
  const Auth = createNativeStackNavigator();
  return (
    <Auth.Navigator screenOptions={{ headerShown: false }}>
      <Auth.Screen name='OnBoarding' component={OnBoardingScreen} />
      <Auth.Screen name='Login' component={LoginScreen} />
      <Auth.Screen name='Register' component={RegisterScreen} />
      <Auth.Screen name="TeacherHomeScreen" component={TeacherDrawerNav} />
      <Auth.Screen name="ParentHomeScreen" component={ParentDrawerNav} />
    </Auth.Navigator>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setuserType] = useState(false);
  async function getData() {
    const data = await AsyncStorage.getItem('isLoggedIn');
    const userType1 = await AsyncStorage.getItem('userType');
    console.log(data, 'at app.jsx');
    setIsLoggedIn(data);
    setuserType(userType1);
  }

  useEffect(() => {
    getData();
  })
  return (
    <NavigationContainer>
      {isLoggedIn && userType == 'Teacher' ? (
        <TeacherDrawerNav />
      ) : isLoggedIn && userType == 'Parent' ? (
        <ParentDrawerNav />
      ) : (
        <AuthNav />
      )}
    </NavigationContainer>
  );
}


export default App;
