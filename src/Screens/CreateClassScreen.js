import { View, Text, SafeAreaView, ScrollView, ImageBackground, Alert } from 'react-native';
import React, { Component } from 'react';
import { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CreateClassScreen = ({ navigation }) => {
    const [className, setClassName] = useState('');

    const generateClassCode = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let code = '';
        for (let i = 0; i < 6; i++) {
            code += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return code;
    }
    const handleCreateClass = async () => {
        if (!className.trim()) {
            Alert.alert('Class Name is required');
            return;
        }

        const classCode = generateClassCode();
        const newClass = { className, classCode };

        try {
            const token = await AsyncStorage.getItem('token');
            const response = await axios.post('http://192.168.184.63:9955/create-class', newClass, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.data.status === 'ok') {
                Alert.alert('Class Created Successfully');
                navigation.navigate('TeacherHomeScreen');
            } else {
                Alert.alert('Class Creation Failed', response.data.message);
            }
        } catch (error) {
            console.error(error);
            Alert.alert('Network Error', error.message);
        }
    };
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
                    <MaterialIcons name='arrow-back' size={40} color='#fff' onPress={() => navigation.goBack()} />
                    <ImageBackground style={{ flex: 1, justifyContent: 'flex-end' }} source={require('../Images/logo-no-background.png')} />
                </View>
                <View style={{ height: 300, marginTop: 46 }}>
                    <Text
                        style={{
                            marginTop: 10,
                            marginBottom: 10,
                            fontSize: 28,
                            fontWeight: '500',
                            color: '#fff',
                            marginBottom: 30,
                            alignSelf: 'center'
                        }}>
                        Create Class
                    </Text>
                    <ImageBackground style={{ width: 200, height: 200, alignSelf: 'center' }} source={require('../Images/718339.png')} />
                    <Text style={{ marginLeft: 10, fontSize: 20, color: '#fff', fontWeight: '500' }}>Class Name</Text>
                </View>
                <View style={{ paddingHorizontal: 10, marginTop: 20 }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            borderBottomColor: '#ccc',
                            borderBottomWidth: 1,
                            paddingBottom: 8,
                            marginBottom: 25,
                        }}>
                        <TextInput
                            placeholder="Class Name"
                            placeholderTextColor='#ccc'
                            keyboardType="default"
                            style={{ flex: 1, paddingVertical: 0 }}
                            color='#fff'
                            onChangeText={setClassName}
                        />
                    </View>
                </View>
                <CustomButton label={'Create Class'} onPress={handleCreateClass} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default CreateClassScreen;
