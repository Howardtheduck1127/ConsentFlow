import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoardingScreen from '../Screens/OnBoardingScreen.js';
import LoginScreen from '../Screens/LoginScreen.js';
import RegisterScreen from '../Screens/RegisterScreen.js';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='OnBoarding' component={OnBoardingScreen} />
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Register' component={RegisterScreen} />
        </Stack.Navigator>
    );
}

export default AuthStack;