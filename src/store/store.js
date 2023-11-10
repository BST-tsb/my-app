import produce from "immer"
import { configureStore } from "@reduxjs/toolkit"
import axios from 'axios'


export const postLogin = (user) => {
  return axios.post('http://localhost:3001/api/v1/user/login', (user))
}

export const signUp = (user) => {
  return axios.post('http://localhost:3001/api/v1/user/signup', (user))
}

export const postProfil = (token) => {
  return axios.post('http://localhost:3001/api/v1/user/profile', {}, {headers : token})
}

export const putProfil = (body,token) => {
  return axios.put('http://localhost:3001/api/v1/user/profile', body, {headers : token})
}

//state
const initialState = {
  email: '',
  password: '',
  token: '',
  remember: false,
  firstName: '',
  lastName: '',
}

// action
export const logUser = (token) => ({
  type: "logUser",
  payload: token
})



export const logOut = () => ({
  type: "logOut"
})

export const editProfil = (user) => ({
  type: "editProfile",
  payload: user
})

// reducer
function reducer(state = initialState, action) {
  if (action.type === "logUser") {
    return produce(state, (d) => {
      d.email = action.payload.email
      d.password = action.payload.password
      d.token = action.payload.token
      d.remember = action.payload.remember
      d.firstName = action.payload.firstName
      d.lastName = action.payload.lastName
    })
  }

  if (action.type === "editProfile") {
    return produce(state, (d) => {
      d.firstName = action.payload.firstName
      d.lastName = action.payload.lastName
    })
  }

  


  if (action.type === "logOut") {
    return produce(state, (d) => {
      d.email = ''
      d.password = ''
      d.token = ''
      d.remember = false
      d.firstName = ''
      d.lastName = ''
    })
  }
    return state
}


const store = configureStore({ reducer })
export {store}