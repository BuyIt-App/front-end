import React, { useState } from "react";
import axios from "axios"; // Import axios for making HTTP requests
import '../../Styles/Register.css';
import BUYIT from '../../Components/Assets/buyit_logo.png';
import { useDispatch } from "react-redux";
import { signupAction } from "../../Store/Actions/AuthAction"
import { connect } from "react-redux";

const Register = (props) => {
  const [popupStyle, showPopup] = useState("hide");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    password: "",
    phoneNumber: "",
  });

  const dispatch = useDispatch();

  const popup = () => {
    showPopup("login-popup");
    setTimeout(() => showPopup("hide"), 3000);
  };

  const handleSignUp = () => {

    let error = false;
     dispatch(signupAction(formData.firstName,formData.lastName,formData.emailId,formData.password,formData.phoneNumber))
     
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  return (
    <div className="cover">
      <div className="login-headers">
        <img src={BUYIT} alt="Register" />
      </div>
      <div className="input-containers">
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" name="firstName" placeholder="Enter your firstname" onChange={handleChange} />
      </div>
      <div className="input-containers">
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" name="lastName" placeholder="Enter your lastName" onChange={handleChange} />
      </div>
      <div className="input-containers">
        <label htmlFor="emailId">Username</label>
        <input type="mail" id="emailId" name="emailId" placeholder="Enter your username" onChange={handleChange} />
      </div>
      <div className="input-containers">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input type="number" id="phoneNumber" name="phoneNumber" placeholder="Enter your phoneNumber" onChange={handleChange} />
      </div>
      <div className="input-containers">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" onChange={handleChange} />
      </div>
      {/* <div className="input-containers">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Enter your confirm password" onChange={handleChange} />
      </div> */}
      <div className="buttons-container">
        <div className="login-btn" onClick={handleSignUp}>Sign up</div>
        {
        props.errorMessage && <p className="error-message">{props.errorMessage}</p>
         }
        <div className="login-btn" onClick={handleSignUp}>Sign in</div>
      </div>

     
      

    </div>
  );
};

const mapStateToProps = (state) => {
  return {
   errorMessage : state.errorMsg,
  };
};

export default connect(mapStateToProps)(Register);
