import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Assuming you'll create a CSS file for this page
import logo from '../assets/logo.png.png'; // Update the path to where your logo is stored

function Login() {
    const navigate = useNavigate();

    const handleLogin = () => {
      // Add authentication logic here (for now, we'll simulate it)
      navigate('/home');  // Redirect to home page on login
    };
  
    return (
        <div className="login-container">
            <div className="login-box">
                <img src={logo} alt="SolarSmart Logo" className="logo" /> {/* Add the logo image here */}
                <form className="login-form">
                    <h2>Login</h2>
                    <input
                        type="text"
                        placeholder="Username, email & phone number"
                        className="login-input"
                    />
                    <input type="password" placeholder="Password" className="login-input" />
                    <a href="/" className="forgot-password">Forgot Password ?</a>
                    <button type="button" className="login-button" onClick={handleLogin}>Login</button>
                    <p>Or Sign up With</p>
                    <div className="social-login">
                        <button className="social-btn google">Google</button>
                        <button className="social-btn facebook">Facebook</button>
                        <button className="social-btn apple">Apple</button>
                    </div>
                    <p className="signup">Qeydiyyat</p>
                </form>
            </div>
        </div>
    );
}

export default Login;
