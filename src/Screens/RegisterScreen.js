import { StyleSheet, View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, ImageBackground, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import { Dropdown } from 'react-native-element-dropdown';
//import AntDesign from '@expo/vector-icons/AntDesign';
//import InputField from '../components/InputField';
//import CustomButton from '../components/CustomButton';
import axios from 'axios';

const RegisterScreen = ({ navigation }) => {
    //const [role, setRole] = useState('');
    //const [roleVerify, setRoleVerify] = useState(false);
    const [name, setName] = useState('');
    const [nameVerify, setNameVerify] = useState(false);
    const [email, setEmail] = useState('');
    const [emailVerify, setEmailVerify] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordVerify, setPasswordVerify] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [userType, setUserType] = useState('');

    function handleSubmit() {
        const userData = {
            name: name,
            email,
            password,
            userType
        }
        if (nameVerify && emailVerify && passwordVerify) {
            axios
                .post("http://192.168.184.63:9955/register", userData)
                .then((res) => {
                    console.log(res.data);
                    if (res.data.status == 'ok') {
                        Alert.alert('Registered Successful!');
                        navigation.navigate('Login')
                    } else {
                        Alert.alert(JSON.stringify(res.data));
                    }
                })
                .catch(e => console.log(e));
        }
        else {
            Alert.alert("Fill mandatory details")
        }
    }

    //function handleRole(e) {
    //const roleVar = e.nativeEvent.text;
    //setRole(roleVar);
    //setRoleVerify(false);
    //if (roleVar == 'Teacher' || roleVar == 'Parent') {
    //setRoleVerify(true);
    //}
    //}

    function handleName(e) {
        const nameVar = e.nativeEvent.text;
        setName(nameVar);
        setNameVerify(false);

        if (nameVar.length > 1) {
            setNameVerify(true);
        }
    }

    function handleEmail(e) {
        const emailVar = e.nativeEvent.text;
        setEmail(emailVar);
        setEmailVerify(false);
        if (/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(emailVar)) {
            setEmail(emailVar)
            setEmailVerify(true);
        }
    }

    function handlePassword(e) {
        const passwordVar = e.nativeEvent.text;
        setPassword(passwordVar);
        setPasswordVerify(false);
        if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(passwordVar)) {
            setPassword(passwordVar);
            setPasswordVerify(true);
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor: '#000' }}>
            <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 25 }} keyboardShouldPersistTaps="always">
                <View style={{ alignItems: 'center' }}>
                    <Image
                        style={{
                            flex: 1,
                            height: 150,
                            width: 300,
                            justifyContent: 'center',
                            marginTop: 25
                        }}
                        source={require("../Images/logo-color.png")}
                    />
                </View>
                <Text
                    style={{
                        fontSize: 28,
                        fontWeight: '500',
                        color: '#fff',
                    }}>
                    Register
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
                        marginTop: 20,
                    }}>
                    <Ionicons
                        name='person-outline'
                        size={20}
                        color='#fff'
                        style={{ marginRight: 5 }}
                    />
                    <TextInput
                        placeholder='Full Name'
                        placeholderTextColor='#ccc'
                        style={{ flex: 1, paddingVertical: 0 }}
                        color='#fff'
                        onChange={e => handleName(e)}
                    />
                    {name.length < 1 ? null : nameVerify ? (
                        <MaterialIcons name='check-circle' color='#00ff00' size={20} />
                    ) : (
                        <MaterialIcons name='error' color='#ff0000' size={20} />
                    )}
                </View>
                {
                    name.length < 1 ? null : nameVerify ? null : (
                        <Text
                            style={{
                                marginLeft: 20,
                                marginTop: 2,
                                color: '#ff0000',
                            }}>
                            Name should be more than 1 character.
                        </Text>
                    )
                }
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
                        onChange={e => handleEmail(e)}
                    />
                    {email.length < 1 ? null : emailVerify ? (
                        <MaterialIcons name='check-circle' color='#00ff00' size={20} />
                    ) : (
                        <MaterialIcons name='error' color='#ff0000' size={20} />
                    )}
                </View>
                {
                    email.length < 1 ? null : emailVerify ? null : (
                        <Text
                            style={{
                                marginLeft: 20,
                                marginTop: 2,
                                color: '#ff0000',
                            }}>
                            Enter Proper Email Address.
                        </Text>
                    )
                }
                <View
                    style={{
                        flexDirection: 'row',
                        borderBottomColor: '#ccc',
                        borderBottomWidth: 1,
                        paddingBottom: 8,
                        marginTop: 25,
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
                        onChange={e => handlePassword(e)}
                        secureTextEntry={showPassword}
                    />
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        {password.length < 1 ? null : !showPassword ? (
                            <Ionicons
                                name='eye'
                                size={20}
                                color={passwordVerify ? '#00ff00' : '#ff0000'}
                            />
                        ) : (
                            <Ionicons
                                name='eye-off'
                                size={20}
                                color={passwordVerify ? '#00ff00' : '#ff0000'}
                            />
                        )}
                    </TouchableOpacity>
                </View>
                {
                    password.length < 1 ? null : passwordVerify ? null : (
                        <Text
                            style={{
                                marginTop: 2,
                                marginLeft: 20,
                                color: '#ff0000',
                            }}>
                            Uppercase, Lowercase, Number and 6 or more characters.
                        </Text>
                    )
                }
                <TouchableOpacity
                    onPress={() => handleSubmit()}
                    style={{
                        backgroundColor: '#09D0EF',
                        padding: 20,
                        borderRadius: 10,
                        marginBottom: 30,
                        marginTop: 25,
                    }}>
                    <Text
                        style={{
                            textAlign: 'center',
                            fontWeight: '700',
                            fontSize: 16,
                            color: '#000'
                        }}>
                        Register
                    </Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 30, marginTop: 0 }}>
                    <Text style={{ color: '#fff' }}>Already Registered?  </Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={{ color: '#09D0EF', fontWeight: '700' }}>Login</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView >
        </SafeAreaView >
    )
}

export default RegisterScreen;