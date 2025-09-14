import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

export default function InputField({ label, icon, inputType, keyboardType, fieldButtonLabel, fieldButtonFunction, onchange }) {
    return (
        <View
            style={{
                flexDirection: 'row',
                borderBottomColor: '#ccc',
                borderBottomWidth: 1,
                paddingBottom: 8,
                marginBottom: 25,
            }}>
            {icon}
            {inputType == 'password' ? (
                <TextInput
                    placeholder={label}
                    placeholderTextColor='#ccc'
                    keyboardType={keyboardType}
                    style={{ flex: 1, paddingVertical: 0 }}
                    secureTextEntry={true}
                    color='#fff'
                />
            ) : (
                <TextInput
                    placeholder={label}
                    placeholderTextColor='#ccc'
                    keyboardType={keyboardType}
                    style={{ flex: 1, paddingVertical: 0 }}
                    color='#fff'
                />
            )}
            <TouchableOpacity onPress={fieldButtonFunction}>
                <Text style={{ color: '#09D0EF', fontWeight: '700' }}>{fieldButtonLabel}</Text>
            </TouchableOpacity>
            {onchange}
        </View>
    )
}