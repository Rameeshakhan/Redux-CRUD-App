import * as types from "./actionType"
import axios from "axios"

const getUsers = (users) =>({
    type: types.getUser,
    payload: users,
})

const deleteU = () => ({
    type: types.deleteUser,
})

const userAdded = () => ({
    type: types.addUser,
})

const getUser = (user) => ({
    type: types.getSingleUser,
    payload: user,
})

const userUpdated = () => ({
    type: types.updateUser,
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

export const addUser = (user) => {
    return function (dispatch) {
        axios.post(`http://localhost:5000/users/` , user)
        .then((res) => {
            // console.log(res.data)
            dispatch(userAdded())
            // dispatch(loadUsers())
        })
        .catch(err => console.log("err" + err))
    }
}

export const getSingleUser = (id) => {
    return function (dispatch) {
        axios.get(`http://localhost:5000/users/${id}`)
        .then((res) => {
            console.log("respobne",res.data)
            dispatch(getUser(res.data))
            // dispatch(loadUsers())
        })
        .catch(err => console.log("errorrrsddcv" + err))
    }
}

export const updateUser = (user , id) => {
    return function (dispatch) {
        axios.put(`http://localhost:5000/users/${id}`, user)
        .then((res) => {
            console.log("respobne",res.data)
            dispatch(userUpdated())
            // dispatch(loadUsers())
        })
        .catch(err => console.log("errorrrsddcv" + err))
    }
}