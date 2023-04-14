import * as types from "./actionType"

const initialState = {
    users: [],
    user: {},
    loading: false
}

const usersReducer = (state = initialState, action) => {
    switch (action.type){
        case types.getUser:
        return{
            ...state,
            users: action.payload,
            loading: false,
        }
        case types.deleteUser:
        case types.addUser:
            return{
                ...state,
                loading: false,
            }
        default:
            return state;
    }
}

export default usersReducer;