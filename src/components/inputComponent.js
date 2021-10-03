import React from 'react'
import { TextInput, Text, StyleSheet } from 'react-native'
import { Height, Width, FontSize } from "../utils/sizes"
import Colors from "../constants/colors"

export default function InputComponent({ placeholder, onChangeText, style, identifier, value, editable = true }) {
    return <TextInput
        editable={editable}
        value={value}
        style={[styles.button, style]}
        placeholder={placeholder}
        onChangeText={(text) => onChangeText({ identifier, text })}
    />
}

const styles = StyleSheet.create({
    button: {
        height: Height(40),
        width: Width(250),
        borderRadius: Height(10),
        borderWidth: Height(1),
        borderColor: Colors.orange,
        backgroundColor: Colors.white,
        paddingHorizontal: Width(5),
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: FontSize(16),
        fontWeight: "bold",
        color: Colors.orange
    }
})