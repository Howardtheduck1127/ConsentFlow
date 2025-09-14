import { View, Text, SafeAreaView, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function ParentHomeScreen({ navigation }) {

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
                    <MaterialIcons name='menu' size={40} color='#fff' onPress={() => navigation.openDrawer()} />
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
                        }}>
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


//<Image style={{ flex: 1, alignSelf: 'center' }} source={require('../Images/line-break.png')} />