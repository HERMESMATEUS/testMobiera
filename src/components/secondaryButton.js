import React from 'react'
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { Height, Width, FontSize } from "../utils/sizes"
import Colors from "../constants/colors"

export default function SecondaryButton({ name, onPress, disabled, style, loadding }) {
    return <TouchableOpacity
        style={[styles.button, style]}
        onPress={onPress}
        disabled={disabled}>
        {loadding ? <ActivityIndicator color={Colors.orange} /> : <Text style={styles.text}>{name}</Text>}
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        height: Height(40),
        backgroundColor: Colors.back,
        paddingHorizontal: Width(10),
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: FontSize(16),
        fontWeight: "bold",
        color: Colors.orange
    }
})