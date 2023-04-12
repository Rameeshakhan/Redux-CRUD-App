import * as types from "./actionType"
import axios from "axios"

const getUsers = (users) =>({
    type: types.getUser,
    payload: users,
})

export const loadUsers = () => {
    return function (dispatch) {
        axios.get(`http://localhost:5000/users`)
        .then((res) => {
            console.log(res.data)
            dispatch(getUsers(res.data))
        })
        .catch(err => console.log("err" + err))
    }
}