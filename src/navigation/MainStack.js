// MainStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TeacherHomeScreen from '../Screens/TeacherHomeScreen.js';
import CreateClassScreen from '../Screens/CreateClassScreen.js';
import JoinClassScreen from '../Screens/JoinClassScreen.js';

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='TeacherHome' component={TeacherHomeScreen} />
            <Stack.Screen name='CreateClass' component={CreateClassScreen} />
            <Stack.Screen name='JoinClass' component={JoinClassScreen} />
        </Stack.Navigator>
    );
}

export default MainStack;