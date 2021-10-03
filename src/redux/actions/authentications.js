import { login } from '../../gateway/endpoints';
import types from "../types"

export const _signIn = ({ user, password }) => {
    return async (dispatch, getState) => {
        dispatch({ type: types.loadding, payload: true })
        let response = await login({ user, password })
        if (!response) {
            dispatch({ type: types.loadding, payload: false })
            alert("Usuario o contraseña incorrecta")
        } else {
            dispatch({ type: types.loadding, payload: false })
            dispatch({ type: types.signIn, payload: { user: response } })
            alert("Inicio de sesion correcto")
        }
    }
}

export const _logOut = () => ({
    type: types.logOut,
    payload: {}
});