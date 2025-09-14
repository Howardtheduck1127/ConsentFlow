
import { View, Text, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const JoinClassScreen = ({ navigation }) => {
    const [classCode, setClassCode] = useState('');

    const handleJoinClass = async () => {
        if (!classCode.trim()) {
            Alert.alert('Class Code is required');
            return;
        }

        try {
            const token = await AsyncStorage.getItem('token');
            const response = await axios.post('http://192.168.184.63:9955/join-class', { classCode }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.data.status === 'ok') {
                Alert.alert('Class Joined Successfully');
                navigation.navigate('TeacherHomeScreen');
            } else {
                Alert.alert('Join Class Failed', response.data.message);
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
                        Join Class
                    </Text>
                    <ImageBackground style={{ width: 200, height: 200, alignSelf: 'center' }} source={require('../Images/7183392.png')} />
                    <Text style={{ marginLeft: 10, fontSize: 20, color: '#fff', fontWeight: '500' }}>Class Code</Text>
                </View>
                <View style={{ paddingHorizontal: 10, marginTop: 20 }}>
                    <InputField
                        label={'Class Code'}
                        keyboardType='default'
                    />
                </View>
                <CustomButton label={'Join Class'} onPress={handleJoinClass} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default JoinClassScreen