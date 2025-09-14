import { StyleSheet, View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../components/CustomButton';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RadioButton } from 'react-native-paper';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('');

    //function handleRole(e) {
    //const roleVar = e.nativeEvent.text;
    //setRole(roleVar);
    //setRoleVerify(false);
    //if (roleVar == 'Teacher' || roleVar == 'Parent') {
    //setRoleVerify(true);
    //}
    //}

    //const handleSubmit = async () => {
    //if (!email || !password || !userType) {
    //Alert.alert('Please fill all fields');
    //return;
    //}

    //try {
    //const userData = { email, password, userType };
    //const res = await axios.post('http://192.168.62.63:9955/login-user', userData);

    //if (res.data.status === 'ok') {
    //Alert.alert('Login Successful');
    //AsyncStorage.setItem('token', res.data.data);
    //AsyncStorage.setItem('isLoggedIn', JSON.stringify(true));
    //AsyncStorage.setItem('userType', res.data.userType);

    //if (res.data.userType === 'Teacher') {
    //navigation.navigate('TeacherHomeScreen');
    //} else {
    //navigation.navigate('ParentHomeScreen');
    //}
    //} else {
    //Alert.alert('Login Failed', res.data.data);
    //}
    //} catch (error) {
    //console.error(error);
    //Alert.alert('An error occurred', 'Please try again later.');
    //}
    //};


    function handleSubmit() {
        const userData = {
            email: email,
            password,
            userType
        };

        axios
            .post('http://192.168.184.63:9955/login-user', userData)
            .then(res => {
                console.log(res.data)
                if (res.data.status == 'ok') {
                    Alert.alert('Login Successfull');
                    AsyncStorage.setItem('token', res.data.data);
                    AsyncStorage.setItem('isLoggedIn', JSON.stringify(true));
                    AsyncStorage.setItem('userType', res.data.userType)
                    if (res.data.userType == 'Teacher') {
                        navigation.navigate('TeacherHomeScreen');
                    } else {
                        navigation.navigate('ParentHomeScreen');
                    }
                }
            })
    }
    //const { login } = useContext(AuthContext);
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor: '#000' }}>
            <ScrollView style={{ paddingHorizontal: 25 }} keyboardShouldPersistTaps='always'>
                <View style={{ alignItems: 'center' }}>
                    <Image style={{ flex: 1, height: 150, width: 300, justifyContent: 'center', marginTop: 25 }}
                        source={require("../Images/logo-color.png")}
                    />
                </View>
                <Text style={{ fontSize: 28, fontWeight: '500', color: '#fff', }}>
                    Login
                </Text>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                    <Text style={{ fontSize: 18, color: '#fff' }}> Login as </Text>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 13, color: 'white', }}>Teacher</Text>
                        <RadioButton
                            value="Teacher"
                            status={userType == 'Teacher' ? 'checked' : 'unchecked'}
                            uncheckedColor='#fff'
                            color='#09D0EF'
                            onPress={() => setUserType('Teacher')}
                        />
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 13, color: 'white' }}>Parent</Text>
                        <RadioButton
                            value="Parent"
                            status={userType == 'Parent' ? 'checked' : 'unchecked'}
                            uncheckedColor='#fff'
                            color='#09D0EF'
                            onPress={() => setUserType('Parent')}
                        />
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        borderBottomColor: '#ccc',
                        borderBottomWidth: 1,
                        paddingBottom: 8,
                        marginTop: 25,
                    }}>
                    <MaterialIcons
                        name='alternate-email'
                        size={20}
                        color='#fff'
                        style={{ marginRight: 5 }}
                    />
                    <TextInput
                        placeholder='Email Address'
                        placeholderTextColor='#ccc'
                        style={{ flex: 1, paddingVertical: 0 }}
                        color='#fff'
                        keyboardType='email-address'
                        onChange={e => setEmail(e.nativeEvent.text)}
                    />
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        borderBottomColor: '#ccc',
                        borderBottomWidth: 1,
                        paddingBottom: 8,
                        marginTop: 25,
                        marginBottom: 25,
                    }}>
                    <Ionicons
                        name='lock-closed-outline'
                        size={20}
                        color='#fff'
                        style={{ marginRight: 5 }}
                    />
                    <TextInput
                        placeholder='Password'
                        placeholderTextColor='#ccc'
                        style={{ flex: 1, paddingVertical: 0 }}
                        color='#fff'
                        keyboardType='password'
                        onChange={e => setPassword(e.nativeEvent.text)}
                        secureTextEntry={true}
                    />
                </View>

                <CustomButton label={'Login'} onPress={() => handleSubmit()} />

                <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 30, }}>
                    <Text style={{ color: '#fff' }}>Don't have an account?  </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={{ color: '#09D0EF', fontWeight: '700' }}>Register</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    dropdown: {
        //margin: 16,
        //marginLeft: 0,
        marginBottom: 25,
        height: 50,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
    },
    icon: {
        marginRight: 5,
    },
    placeholderStyle: {
        fontSize: 14,
        color: '#ccc'
    },
    selectedTextStyle: {
        fontSize: 16,
        color: '#fff'
    },
    iconStyle: {
        width: 20,
        height: 20,
        color: '#fff'
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
        backgroundColor: '#fff'
    },
});

//navigation.navigate('MainStack', { screen: 'TeacherHome'