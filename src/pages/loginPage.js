import './loginPage.css';
import React from 'react';
import logo from '../img/logo.png';
import cpu from '../img/cpu-logo.png';
import { Link } from 'react-router-dom';


function LoginPage() {
  return (
    <div className="container">
      
    <div className="form-container">
    <div class="Vector"></div>
    <div class="Vector2"></div>



      <form >
        <img src={logo} alt="logo" id="img1"></img>
        <img src={logo} alt="logo" id="img2"></img>
        <img src={cpu} alt="cpu" id="img3"></img>

        <h1 className="form-title">Login</h1>
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

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="&ensp; Password" 
         
        />
        <p><a href="" className="register-link" id="forget">
              forget Password?
        </a>
        </p>

        <label htmlFor="id" id="aidi">ID:</label>
        <input
          type="text"
          id="id"

        />

        <div className="button-container">
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
          <p className="register-text">
            Don't have an account yet?{' '} <br></br>
            <a href="/registre" className="register-link">
              Register for free
            </a>
          </p>
        </div>
      </form>
    </div>
  </div>
  );
}

export default LoginPage;