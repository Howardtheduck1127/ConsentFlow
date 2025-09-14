import { View, Text, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react';

const OnBoardingScreen = ({ navigation }) => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#000",
            }}>
            <ImageBackground
                style={{
                    flex: 1,
                    justifyContent: "flex-end"
                }}
                source={require("../Images/logo-color.png")}
            >
                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                    style={{
                        backgroundColor: "#09D0EF",
                        padding: 18, width: '90%',
                        borderRadius: 10,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginBottom: 10,
                    }}>
                    <Text style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: "#000",
                    }}>Sign In</Text>
                    <MaterialIcons name='arrow-forward-ios' size={22} color='#000' />
                </TouchableOpacity>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default OnBoardingScreen;