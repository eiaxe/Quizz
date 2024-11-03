// LoginPage Component
import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import "./style.css";
import logo from './Untitled_design-removebg-preview.png';
import eyeOpen from './eye_open.svg';
import eyeClosed from './eye_closed.svg';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const pwInputRef = useRef(null);
    const showPwIconRef = useRef(null);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
        if (pwInputRef.current && showPwIconRef.current) {
            pwInputRef.current.type = passwordVisible ? 'password' : 'text';
            showPwIconRef.current.src = passwordVisible ? eyeOpen : eyeClosed;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Logged in with:', { username, password });
        // Add your login logic here
    };

    const handleGoogleSignIn = () => {
        navigate('/google-auth');
    };

    return (
        <>
            <div className="paint-splatter">
                <div className="splatter splatter1"></div>
                <div className="splatter splatter2"></div>
                <div className="circle circle1"></div>
                <div className="circle circle2"></div>
                <div className="circle circle3"></div>
                <div className="circle circle4"></div>
                <div className="circle circle5"></div>
            </div>

            <div className="stars">
                <img src={logo} alt="Quizzy Logo" style={{ width: '30px', height: '40px' }} />
                <a href="/home" className="quiz-name">Quizzy</a>
            </div>

            <h1 className="login-title">Quizzy</h1>
         
            <form onSubmit={handleSubmit}>
                <div className="login-container9">
                    <div className="form-group">
                        <input
                            type="email"
                            id="email"
                            required
                            placeholder=""
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="form-group">
                        <input
                            ref={pwInputRef}
                            type="password"
                            id="password"
                            required
                            minLength="8"
                            maxLength="24"
                            placeholder=""
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="password">Password</label>
                        <button
                            type="button"
                            id="show-passwd"
                            onClick={togglePasswordVisibility}
                        >
                            <img ref={showPwIconRef} src={eyeOpen} alt="Show Password" />
                        </button>
                    </div>
                    <button type="submit">Login</button>
                    <Link to="/verifyemail" className="forgot-password">Forgot your password?</Link>
                    <div className="line-container">
                        <div className="line"></div>
                        <span>or</span>
                        <div className="line"></div>
                    </div>
                    <Link to="/sign" className="signup-link">Sign up for free</Link>
                    <button type="button" className="gsi-material-button" onClick={handleGoogleSignIn}>
                        <div className="gsi-material-button-state"></div>
                        <div className="gsi-material-button-content-wrapper">
                            <div className="gsi-material-button-icon">
                                <svg
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 48 48"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    style={{ display: 'block' }}
                                >
                                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                                    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                                    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                                    <path fill="none" d="M0 0h48v48H0z"></path>
                                </svg>
                            </div>
                            <span className="gsi-material-button-contents">Continue with Google</span>
                            <span style={{ display: 'none' }}>Continue with Google</span>
                        </div>
                    </button>
                    <p className="terms-text">
                        By continuing, you agree to our  
                        <Link to="/home" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'underline' }}> Terms of Service</Link> and 
                        <Link to="/home" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'underline' }}> Privacy Policy</Link>
                    </p>
                </div>
            </form>
        </>
    );
};

// Export LoginPage for use in other files
export default LoginPage;
