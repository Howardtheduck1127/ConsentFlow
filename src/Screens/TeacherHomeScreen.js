import { View, Text, SafeAreaView, ScrollView, Image, ImageBackground, TouchableOpacity, BackHandler, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';

const TeacherHomeScreen = ({ navigation }) => {
    console.log('navigation', navigation);
    const [userData, setUserData] = useState("")
    async function getData() {
        const token = await AsyncStorage.getItem('token');
        console.log(token);
        axios
            .post('http://192.168.62.63:9955/userdata', { token: token })
            .then(res => {
                console.log(res.data);
                setUserData(res.data.data);
            });
    }

    const handleBackPress = () => {
        Alert.alert('Exit App', 'Are you sure you want to exit?', [
            {
                text: 'Cancel',
                onPress: () => null,
                style: 'cancel',
            },
            {
                text: 'Exit',
                onPress: () => BackHandler.exitApp(),
            },
        ]);
        return true;
    }

    useFocusEffect(
        React.useCallback(() => {
            BackHandler.addEventListener('hardwareBackPress', handleBackPress);

            return () => {
                BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
            };
        }, []),
    );

    useEffect(() => {
        getData();
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
            <ScrollView style={{ padding: 20 }}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        marginTop: 20,
                        marginBottom: 15,
                    }}>
                    <MaterialIcons name='menu' size={40} color='#fff' onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
                    <ImageBackground style={{ flex: 1, justifyContent: 'flex-end' }} source={require('../Images/logo-no-background.png')} />
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginBottom: 10,
                    }}
                >
                    <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 15 }}> ——— • ——— • ——— • ——— • ——— • ——— • ——— </Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: "#09D0EF",
                            padding: 18, width: '90%',
                            borderRadius: 10,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            marginBottom: 10,
                        }} onPress={() => navigation.navigate('CreateClass')}>
                        <MaterialIcons name='add' size={20} color='#000' />
                        <Text style={{ fontWeight: 'bold' }}>  Create New Group</Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginBottom: 10,
                    }}
                >
                    <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 15 }}> ——— • ——— • ——— • ——— • ——— • ——— • ——— </Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: "#09D0EF",
                            padding: 18, width: '90%',
                            borderRadius: 10,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            marginBottom: 10,
                        }} onPress={() => navigation.navigate('JoinClass')}>
                        <MaterialIcons name='add' size={20} color='#000' />
                        <Text style={{ fontWeight: 'bold' }}>  Join Group</Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginBottom: 10,
                    }}
                >
                    <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 15 }}> ——— • ——— • ——— • ——— • ——— • ——— • ——— </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default TeacherHomeScreen;