import { View, Text, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ProfileScreen = ({ navigation }) => {
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
                
            </ScrollView>
        </SafeAreaView>
    )
}

export default ProfileScreen;