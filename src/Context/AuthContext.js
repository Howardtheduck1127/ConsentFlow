//import AsyncStorage from "@react-native-async-storage/async-storage";
//import React, { createContext, useState, useEffect } from "react";

//export const AuthContext = createContext();

//export const AuthProvider = ({ children }) => {
//const [isLoading, setIsLoading] = useState(false);
//const [userToken, setUserToken] = useState(null);
//const [isFeatureEnabled, setIsFeatureEnabled] = useState(false);

//const login = () => {
//setIsLoading(true)
//setUserToken('howardtheduck');
//AsyncStorage.setItem('userToken', 'howardtheduck');
//setIsFeatureEnabled(true);
//AsyncStorage.setItem('isNewFeatureEnabled', 'true');
//setIsLoading(false);
//}

//const logout = () => {
//setIsLoading(true);
//setUserToken(null);
//AsyncStorage.removeItem('userToken');
//AsyncStorage.removeItem('isFeatureEnabled');
//setIsFeatureEnabled(false);
//setIsLoading(false);
//}

//const isLoggedIn = async () => {
//try {
//setIsLoading(true);
//let userToken = await AsyncStorage.getItem('userToken');
//let featureEnabled = await AsyncStorage.getItem('isNewFeatureEnabled') === 'true';
//setUserToken(userToken);
//setIsNewFeatureEnabled(featureEnabled);
//setIsLoading(false);
//} catch (e) {
//console.log('isLogged in error ${e}');
//}
//}

//useEffect(() => {
//isLoggedIn();
//}, []);

//return (
//<AuthContext.Provider value={{ login, logout, isLoading, userToken, isFeatureEnabled }}>
//{children}
//</AuthContext.Provider>
//)
//}

//import React, { createContext, useState } from 'react';

//export const AuthContext = createContext();

//export const AuthProvider = ({ children }) => {
//const [isAuthenticated, setIsAuthenticated] = useState(false);

//const login = () => {
//setIsAuthenticated(true);
//};

//const logout = () => {
//setIsAuthenticated(false);
//};

//return (
//<AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//{children}
//</AuthContext.Provider>
//);
//};


import React, { createContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userToken, setUserToken] = useState(null);

    const login = async (token) => {
        setUserToken(token);
        await AsyncStorage.setItem('userToken', token);
    };

    const logout = async () => {
        setUserToken(null);
        await AsyncStorage.removeItem('userToken');
    };

    const isLoggedIn = async () => {
        try {
            let token = await AsyncStorage.getItem('userToken');
            setUserToken(token);
        } catch (e) {
            console.log('isLogged in error', e);
        }
    };

    React.useEffect(() => {
        isLoggedIn();
    }, []);

    return (
        <AuthContext.Provider value={{ login, logout, userToken }}>
            {children}
        </AuthContext.Provider>
    );
};
