import React from 'react'
import { View, StyleSheet } from 'react-native'
import BaseComponent from '../components/baseComponent'
import LogoComponent from '../components/logoComponent'
import MainButton from '../components/mainButton'
import SecondaryButton from '../components/secondaryButton'
import InputComponent from '../components/inputComponent'
import { Height } from '../utils/sizes'
import { signUp } from '../gateway/endpoints'

export default function SignUpScreen({ navigation }) {

    const [signUpData, setsignUpData] = React.useState({})
    const { documentId, user, name, lastName, password, confirmPassword } = signUpData;
    const [loadding, setloadding] = React.useState(false)

    const onChangeText = ({ identifier, text }) => setsignUpData({ ...signUpData, [identifier]: text })

    const doSignUp = async () => {
        setloadding(true);
        if (password === confirmPassword) {
            let data = { documentId, user, name, lastName, password, profile: "" }
            let response = await signUp(data)
            if (!response) {
                setloadding(false)
                alert("Usuario no registrado")
            } else {
                navigation.goBack(null)
                alert("Usuario registrado")
            }
        }
        else {
            alert("Las contraseñas no coinciden")
            setloadding(false);
        }
    }

    const validateData = () => {
        let disable = false;
        if (!documentId) disable = true
        if (!user) disable = true
        if (!name) disable = true
        if (!lastName) disable = true
        if (!password) disable = true
        if (!confirmPassword) disable = true
        return disable;
    }

    return (
        <BaseComponent>
            <LogoComponent />
            <View style={{ flex: 1, alignItems: 'center' }}>
                <InputComponent onChangeText={onChangeText} identifier="documentId" style={styles.documentId} placeholder="Numero de documento" />
                <InputComponent onChangeText={onChangeText} identifier="user" style={styles.userInput} placeholder="Usuario" />
                <InputComponent onChangeText={onChangeText} identifier="name" style={styles.nameInput} placeholder="Nombre" />
                <InputComponent onChangeText={onChangeText} identifier="lastName" style={styles.lastNameInput} placeholder="Apellido" />
                <InputComponent onChangeText={onChangeText} identifier="password" style={styles.passwordInput} placeholder="Contraseña" />
                <InputComponent onChangeText={onChangeText} identifier="confirmPassword" style={styles.confirmPasswordInput} placeholder="Confirmar contraseña" />
                <MainButton loadding={loadding} disabled={validateData() || loadding} onPress={doSignUp} name={"Registrarse"} style={styles.signIn} />
                <SecondaryButton loadding={loadding} onPress={() => navigation.goBack(null)} name={"Volver"} style={styles.signUp} />
            </View>
        </BaseComponent>
    )
}

const styles = StyleSheet.create({
    documentId: { marginTop: Height(20) },
    userInput: { marginTop: Height(10) },
    nameInput: { marginTop: Height(10) },
    lastNameInput: { marginTop: Height(10) },
    passwordInput: { marginTop: Height(10) },
    confirmPasswordInput: { marginTop: Height(10) },
    signIn: { marginTop: Height(20) },
    signUp: { marginTop: Height(10) },
})