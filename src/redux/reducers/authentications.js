import types from "../types"

export const authenticationReducer = (state = { loadding: false }, action) => {
    switch (action.type) {
        case types.loadding:
            return {
                ...state,
                loadding: action.payload
            }
        case types.signIn:
            return {
                ...state,
                user: action.payload.user
            }
        case types.logOut:
            return {}
        default:
            return state;
    }
}