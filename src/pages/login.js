import React from "react"
import { useState } from 'react'
import { postLogin, postProfil } from '../store/store'
import { useDispatch } from 'react-redux'
import { logUser } from "../store/store"
import { useNavigate } from 'react-router-dom'
import Head from "../components/head/index"
import Foot from "../components/footer/index"


function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = {}
  const [password, setPassword] = useState('')
  const [userName, setUserName] = useState('')
  const [remember, setRemember] = useState(false)
  const request = (token) => {
	return {Authorization: `Bearer ${token}`}
 }
 
  const login = (event) => {
    event.preventDefault()
	user.email = userName
	user.password = password
	user.remember = remember
    postLogin(user)
    .then((response) => {
      if(response.status) {
		user.token = response.data.body.token
    window.localStorage.token = user.token
    
		postProfil(request(user.token)).then((res) => {
		  user.firstName = res.data.body.firstName
		  user.lastName = res.data.body.lastName
		  dispatch(logUser(user))
		  navigate("/profile")
      

		})
	  }
	})
	.catch((response) => {
      console.error(response)
	})
	}

    
    return (
      <>
        <Head />
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={(event) => login(event)}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="emal" id="username" onChange={(event) => setUserName(event.target.value)}/>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={(event) => setPassword(event.target.value)} />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" onChange={(event) => setRemember(event.target.value)} />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className="sign-in-button">Sign In</button>
                    
			    </form>
            </section>
        </main>
  
        <Foot />
      </>
    )
  }

  export default Login