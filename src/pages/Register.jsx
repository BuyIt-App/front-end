import React, { useState } from "react"
import '../Styles/Register.css'
import BUYIT from '../Components/Assets/buyit_logo .png'



const Register = () => {
  const [popupStyle, showPopup] = useState("hide")

  const popup = () => {
    showPopup("login-popup")
    setTimeout(() => showPopup("hide"), 3000)
  }
  return (
    <div className="cover">
      <div className="login-headers">
      <img src={BUYIT} alt="Register" /> 

</div>
<div className="input-containers">
  <label htmlFor="username">FirstName</label>
  <input type="text" id="username" placeholder="Enter your firstname" />
</div>
      <div className="input-containers">
  <label htmlFor="username">Username</label>
  <input type="text" id="username" placeholder="Enter your username" />
</div>

<div className="input-containers">
  <label htmlFor="password">Password</label>
  <input type="password" id="password" placeholder="Enter your password" />
</div>
<div className="input-containers">
  <label htmlFor="username">Confirm Password</label>
  <input type="text" id="username" placeholder="Enter your confirm password" />
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

export default Register