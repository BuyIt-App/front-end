import React, { useState } from "react";
import axios from "axios"; // Import axios
import "../../Styles/Login.css";
import BUYIT from "../../Components/Assets/buyit_logo.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [popupStyle, showPopup] = useState("hide");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const popup = () => {
    showPopup("login-popup");
    setTimeout(() => showPopup("hide"), 3000);
  };

  const handleLogin = () => {
    // Prepare the data to be sent in the request
    const data = {
      emailId: username,
      password: password,
    };

    // Send a POST request to the server
    axios
    .post("http://localhost:8081/customer/auth/sign_in", data)
    .then((response) => {
      console.log("Login success:", response.data);
      // Save the JWT token in the localStorage
      const is = true;
      localStorage.setItem("isAuthenticated", is);
      localStorage.setItem("role", response.data.role);
      console.log(localStorage.getItem("isAuthenticated"));
      console.log(response.data.role);
      navigate("/");
    
    })
    .catch((error) => {
      console.error("Login failed:", error);
      if (error.response) {
        localStorage.setItem("isAuthenticated", false);
        console.error("Response data:", error.response.data);
      }
    });
  
  };

  return (
    <div className="cover">
      <div className="login-header">
        <img src={BUYIT} alt="Login" />
      </div>

      <div className="input-container">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="input-container">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="buttons-container">
        <div className="login-btn" onClick={handleLogin}>
          Login
        </div>
        <div className="login-btn">Sign up</div>
      </div>

      <div className={popupStyle}>
        <h3>Login Failed</h3>
        <p>Username or password incorrect</p>
      </div>
    </div>
  );
};

export default Login;
