import React from "react"
import { Link } from "react-router-dom"
import logo from "../../img/argentBankLogo.png"
import { useSelector, useDispatch } from 'react-redux'


  



export default function Head() {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.token)
  const firstName = useSelector((state) => state.firstName)
  const logOut = (event) => {
    localStorage.clear();
	  dispatch({type: "logOut"})
 }
  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div className="flex-head">
      {token && (
				<Link to="/profile" className="main-nav-item nav-userName">
					<i className="fa-solid fa-circle-user"></i>
					<span>{firstName}</span>
				</Link>
			)}
				{token ? (
					<Link to="/"	className="main-nav-item nav-sign-btn" onClick={(event) => logOut(event)}>
						<i className="fa-solid fa-right-from-bracket"></i>
						<span>Sign out</span>
					</Link>
				) : (
					<Link to="/login" className="main-nav-item nav-sign-btn">
					  <i className="fa-solid fa-circle-user"></i>
						<span>Sign In</span>
					</Link>
				)}  
      </div>
    </nav>
  )
}