import { ADD_USER } from "./constants.js"

const initialState = {
    user: []
}

export default function userReducer(state = initialState, action) {
    if (action.type === ADD_USER) {
        return {
            ...state,
            user: [
                ...state.user,
                action.payload
            ]
        }
    } else {
        return state
    }
}