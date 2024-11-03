import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './sstyle.css';
import logo from './Untitled_design-removebg-preview.png';
import eyeOpen from './eye_open.svg';
import eyeClosed from './eye_closed.svg';

function Sign() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        isTeacher: true,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handlePasswordToggle = () => {
        setPasswordVisible((prev) => !prev);
    };

    const handleConfirmPasswordToggle = () => {
        setConfirmPasswordVisible((prev) => !prev);
    };

    const handleToggleSwitch = () => {
        setFormData((prev) => ({ ...prev, isTeacher: !prev.isTeacher }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match. Please try again.");
        } else {
            console.log("Form submitted:", formData);
            navigate('/verifyaccount'); // Navigate to VerifyAccount after successful submission
        }
    };
    const handleGoogleSignIn = () => {
        // Replace '/google-auth' with the path you want to navigate to
        navigate('/google-auth');
    };

    return (
        <div className="signup-page">
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
            <form action="/verifyaccount" method="POST" onSubmit={handleSubmit}>
                <div className="login-container4">
                    {/* Existing form fields */}
                    <div className="form-group">
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                            required
                            placeholder=""
                        />
                        <label htmlFor="username">Username</label>
                    </div>

                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder=""
                        />
                        <label htmlFor="email">Email</label>
                    </div>

                    <div className="form-group">
                        <input
                            type={passwordVisible ? 'text' : 'password'}
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                            minLength="8"
                            maxLength="24"
                            placeholder=""
                        />
                        <label htmlFor="password">Password</label>
                        <button type="button" id="show-passwd" onClick={handlePasswordToggle}>
                            <img src={passwordVisible ? eyeClosed : eyeOpen} alt="Toggle Password Visibility" />
                        </button>
                    </div>

                    <div className="form-group">
                        <input
                            type={confirmPasswordVisible ? 'text' : 'password'}
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            required
                            minLength="8"
                            maxLength="24"
                            placeholder=""
                        />
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <button type="button" id="show-passwd" onClick={handleConfirmPasswordToggle}>
                            <img src={confirmPasswordVisible ? eyeClosed : eyeOpen} alt="Toggle Password Visibility" />
                        </button>
                    </div>

                    <section>
                        <div className="toggleContainer">
                            <label className="toggleSwitch nolabel">
                                <input
                                    type="checkbox"
                                    checked={formData.isTeacher}
                                    onChange={handleToggleSwitch}
                                />
                                <a></a>
                                <span>
                                    <span className="left-span">Teacher</span>
                                    <span className="right-span">Student</span>
                                </span>
                            </label>
                        </div>
                    </section>
                    
                    <button type="submit">Sign up</button>
                    
                    <div className="line-container">
                        <div className="line"></div>
                        <span>or</span>
                        <div className="line"></div>
                    </div>

                    <div className="footer-container">
                        <Link to="/index" className="login">I Have an Account!</Link>
                    </div>

                    {/* Google Sign-In Button */}
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

                    {/* Terms and Conditions */}
                    <p className="terms-text">
                        By continuing, you agree to our 
                        <Link to="/home"style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'underline' }}> Terms of Service</Link> and                         
                        <Link to="/home"style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'underline' }}> Privacy Policy</Link>
                    </p>
                </div>
            </form>
        </div>
    );
}

export default Sign;
