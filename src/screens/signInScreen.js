import React from 'react';
import { View, StyleSheet } from 'react-native';
import BaseComponent from '../components/baseComponent';
import LogoComponent from '../components/logoComponent';
import MainButton from '../components/mainButton';
import SecondaryButton from '../components/secondaryButton';
import InputComponent from '../components/inputComponent';
import { Height } from '../utils/sizes';
import { useDispatch, useSelector } from 'react-redux';
import { _signIn } from '../redux/actions/authentications';

export default function SignInScreen({ navigation }) {

    const dispatch = useDispatch()
    const { loadding } = useSelector(state => state.authentication)
    const [signInData, setsignInData] = React.useState({});
    const { user, password } = signInData;

    const onChangeText = ({ identifier, text }) => setsignInData({ ...signInData, [identifier]: text })

    const validateData = () => {
        let diasble = false;
        if (!user) diasble = true;
        if (!password) diasble = true;
        return diasble
    }

    return (
        <BaseComponent>
            <LogoComponent />
            <View style={{ flex: 1, alignItems: 'center' }}>
                <InputComponent onChangeText={onChangeText} identifier="user" style={styles.inputUser} placeholder="Usuario" />
                <InputComponent onChangeText={onChangeText} identifier="password" style={styles.inputPassword} placeholder="Contraseña" />
                <MainButton loadding={loadding} disabled={validateData() || loadding} onPress={() => dispatch(_signIn({ user, password }))} name={"Iniciar sesion"} style={styles.signIn} />
                <SecondaryButton loadding={loadding} disabled={loadding} onPress={() => navigation.navigate("SignUp")} name={"Registrarse"} style={styles.signUp} />
            </View>
        </BaseComponent>
    )
}

const styles = StyleSheet.create({
    inputUser: { marginTop: Height(20) },
    inputPassword: { marginTop: Height(10) },
    signIn: { marginTop: Height(20) },
    signUp: { marginTop: Height(10) },
})