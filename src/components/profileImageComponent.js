import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { Height, Width } from "../utils/sizes"
import Colors from "../constants/colors"

export default function ProfileImageComponent({ profile }) {

    const validateImage = () => {
        if (!profile) return require("../assets/profile.png");
        else return { uri: `data:image/png;base64,${profile}` }
    }

    return (
        <View style={styles.contain} >
            <Image resizeMode="contain" style={styles.image} source={validateImage()} />
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
        height: Height(150),
        width: '100%',
    }
})