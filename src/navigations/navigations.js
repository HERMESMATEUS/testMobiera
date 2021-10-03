import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/homeScreen'
import SignInScreen from '../screens/signInScreen'
import SignUpScreen from '../screens/signUpScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

export default function Navigations() {

    const { user } = useSelector(state => state.authentication)

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {
                    user ? (
                        <>
                            <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
                        </>
                    ) : (
                        <>
                            <Stack.Screen options={{ headerShown: false }} name="SignIn" component={SignInScreen} />
                            <Stack.Screen options={{ headerShown: false }} name="SignUp" component={SignUpScreen} />
                        </>
                    )}

            </Stack.Navigator>
        </NavigationContainer>
    )
}
