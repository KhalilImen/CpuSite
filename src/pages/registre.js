import './registre.css';
import React from 'react';
import logo from '../img/logo.png';
import cpu from '../img/cpu-logo.png';

function Register() {
  return (
    <div className="container">
    <div className="form-container">
    <div class="Vector"></div>
    <div class="Vector2"></div>


      <form >
        <img src={logo} alt="logo" id="img1"></img>
        <img src={cpu} alt="cpu" id="img3"></img>

        <h1 className="form-title">Create new account</h1>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
         
        />

        <label htmlFor="email">Adresse Email:</label>
        <input
          type="text"
          id="email"
          placeholder="&ensp; @gmail.com" 
         
        />


        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="&ensp; Password" 
         
        />

        <label htmlFor="password">Confirm password:</label>
        <input
          type="password"
          id="password2"
          placeholder="&ensp; Password" 
         
        />

        

        <div className="button-container">
          <button type="submit" className="Confirm-button">
            Confirm
          </button>
        </div>
      </form>
    </div>
  </div>
  );
}

export default Register;