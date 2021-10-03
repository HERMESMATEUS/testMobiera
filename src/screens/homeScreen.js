import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import BaseComponent from '../components/baseComponent'
import ProfileImageComponent from '../components/profileImageComponent'
import MainButton from '../components/mainButton'
import SecondaryButton from '../components/secondaryButton'
import InputComponent from '../components/inputComponent'
import { Height } from '../utils/sizes'
import { _logOut, _signIn } from '../redux/actions/authentications'
import { useDispatch, useSelector } from 'react-redux'
import CameraComponent from '../components/cameraComponent'
import { updateUser } from '../gateway/endpoints'

export default function HomeScreen({ navigation }) {

    const dispatch = useDispatch();

    const { user } = useSelector(state => state.authentication)
    const [upProfileData, setupProfileData] = React.useState(user)
    const [takePicture, settakePicture] = React.useState(false)
    const { name, lastName, profile } = upProfileData

    const onChangeText = ({ identifier, text }) => setupProfileData({ ...upProfileData, [identifier]: text })

    const doUpdate = async () => {
        let response = await updateUser(upProfileData, upProfileData.id)
        if (response) {
            dispatch(_signIn(upProfileData))
            alert("Actualizado correctamente")
        }
        else alert("Error en la actualizacion")
    }

    const validateData = () => {
        let disable = false;
        if (!upProfileData.name) disable = true
        if (!upProfileData.lastName) disable = true
        return disable;
    }

    const changeImage = (base64) => {
        settakePicture(false)
        setupProfileData({ ...upProfileData, profile: base64 })
    }

    if (takePicture) return <CameraComponent changeImage={changeImage} />

    return (
        <BaseComponent>
            <TouchableOpacity onPress={() => settakePicture(true)}>
                <ProfileImageComponent profile={profile} />
            </TouchableOpacity>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <InputComponent onChangeText={onChangeText} value={name} identifier="name" style={styles.nameInput} placeholder="Nombre" />
                <InputComponent onChangeText={onChangeText} value={lastName} identifier="lastName" style={styles.lastNameInput} placeholder="Apellido" />
                <MainButton disabled={validateData()} onPress={doUpdate} name={"Actualizar"} style={styles.update} />
                <SecondaryButton onPress={() => dispatch(_logOut())} name={"Cerrar sesion"} style={styles.closeSession} />
            </View>
        </BaseComponent>
    )
}

const styles = StyleSheet.create({
    userInput: { marginTop: Height(20) },
    nameInput: { marginTop: Height(10) },
    lastNameInput: { marginTop: Height(10) },
    update: { marginTop: Height(20) },
    closeSession: { marginTop: Height(10) },
})