import * as types from "./actionType"
import axios from "axios"

const getUsers = (users) =>({
    type: types.getUser,
    payload: users,
})

const deleteU = () => ({
    type: types.deleteUser,
})

export const loadUsers = () => {
    return function (dispatch) {
        axios.get(`http://localhost:5000/users`)
        .then((res) => {
            dispatch(getUsers(res.data))
        })
        .catch(err => console.log("err" + err))
    }
}

export const deleteUser = (id) => {
    return function (dispatch) {
        axios.delete(`http://localhost:5000/users/${id}`)
        .then((res) => {
            // console.log(res.data)
            dispatch(deleteU())
            dispatch(loadUsers())
        })
        .catch(err => console.log("err" + err))
    }
}