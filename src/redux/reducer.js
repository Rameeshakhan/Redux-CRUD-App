import * as types from "./actionType"

const initialState = {
    users: [],
    user: {},
    loading: true
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
        case types.updateUser:
            return{
                ...state,
                loading: false,
            }
            break
        case types.getSingleUser:
            return{
                ...state,
                user: action.payload,
                loading: false
            }
            break
        default:
            return state;
    }
}

export default usersReducer;