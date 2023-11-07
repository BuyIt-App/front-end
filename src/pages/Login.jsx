import React, { useState } from "react"
import "../Styles/Login.css"
import BUYIT from '../Components/Assets/buyit_logo .png'

const Login = () => {
  const [popupStyle, showPopup] = useState("hide")

  const popup = () => {
    showPopup("login-popup")
    setTimeout(() => showPopup("hide"), 3000)
  }
  return (
    <div className="cover">
      <div className="login-header">
       <img src={BUYIT} alt="Login" /> 

</div>

      <div className="input-container">
  <label htmlFor="username">Username</label>
  <input type="text" id="username" placeholder="Enter your username" />
</div>

<div className="input-container">
  <label htmlFor="password">Password</label>
  <input type="password" id="password" placeholder="Enter your password" />
</div>

      
      

      <div className="buttons-container">
  <div className="login-btn" onClick={popup}>Login</div>
  <div className="login-btn" onClick={popup}>Sign up</div>
</div>


      <div className= {popupStyle}>
        <h3>Login Failed</h3>
        <p>Username or passord incorrect</p>

      </div>

    </div>
  )
}

export default Login