//import React, { useContext } from 'react';
//import { ReactElement } from 'react';
//import { View, ActivityIndicator } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import AuthStack from './AuthStack.js';
//import DrawerStack from './DrawerStack.js';
//import TeacherHomeScreen from '../Screens/TeacherHomeScreen.js';
//import CreateClassScreen from '../Screens/CreateClassScreen.js';
//import JoinClassScreen from '../Screens/JoinClassScreen.js';

//const MainStack = createNativeStackNavigator();

//export const AppNav = () => {
//return (
//<MainStack.Navigator screenOptions={{ headerShown: false }}>
//<MainStack.Screen name='Auth' component={AuthStack} />
//<MainStack.Screen name='Drawer' component={DrawerStack} />
//<MainStack.Screen name='TeacherHome' component={TeacherHomeScreen} />
//<MainStack.Screen name='CreateClass' component={CreateClassScreen} />
//<MainStack.Screen name='JoinClass' component={JoinClassScreen} />
//</MainStack.Navigator>
//)
//}

//const AppNav = () => {
//const { isLoading, userToken } = useContext(AuthContext);

//if (isLoading) {
//return (
//<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//<ActivityIndicator size={'large'} />
//</View>
//)
//}
//return (
//<NavigationContainer>
//{userToken !== null ? <AuthStack /> : <DrawerStack />}
//</NavigationContainer>
//)
//}

//export default AppNav;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import DrawerStack from './DrawerStack';
import MainStack from './MainStack';

const Stack = createNativeStackNavigator();

const AppNav = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Auth' component={AuthStack} />
                <Stack.Screen name='Drawer' component={DrawerStack} />
                <Stack.Screen name='MainStack' component={MainStack} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNav;
