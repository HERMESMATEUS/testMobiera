import React from 'react'
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { Height, Width, FontSize } from "../utils/sizes"
import Colors from "../constants/colors"

export default function MainButton({ name, onPress, disabled, style, loadding }) {
    return <TouchableOpacity
        style={[styles.button, style]}
        onPress={onPress}
        disabled={disabled}>
        {loadding ? <ActivityIndicator color={Colors.white} /> : <Text style={styles.text}>{name}</Text>}
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        height: Height(40),
        backgroundColor: Colors.orange,
        paddingHorizontal: Width(10),
        borderRadius: Height(10),
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: FontSize(16),
        fontWeight: "bold",
        color: Colors.white
    }
})