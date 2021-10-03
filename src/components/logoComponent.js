import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { Height, Width } from "../utils/sizes"
import Colors from "../constants/colors"

export default function LogoComponent() {
    return (
        <View style={styles.contain} >
            <Image resizeMode="contain" style={styles.image} source={require("../assets/logo.png")} />
        </View>
    )
}

const styles = StyleSheet.create({
    contain: {
        width: Width(360),
        height: Height(200),
        backgroundColor: Colors.orange,
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        width: Width(300),
    }
})