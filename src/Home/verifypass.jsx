import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './verifypass.css'; // Make sure to import your CSS file
import logo from './Untitled_design-removebg-preview.png'; // Your logo image
import eyeOpen from './eye_open.svg'; // Eye open icon for password visibility
import eyeClosed from './eye_closed.svg'; // Eye closed icon for password visibility
import LoginPage from './index';

const VerifyPass = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate(); // Get the navigate function

    const handlePasswordToggle = () => {
        setShowPassword(prev => !prev);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match. Please try again.");
        } else {
            // Proceed with the form submission (e.g., send to API)
            console.log("Form submitted!");
            navigate('/index'); // Navigate back to index.jsx
        }
    };

    return (
        <div>
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
            <form onSubmit={handleSubmit} className="login-container">
                <div className="form-group">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        id="password"
                        required
                        minLength="8"
                        maxLength="24"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder=""
                    />
                    <label htmlFor="password">Password</label>
                    <button type="button" id="show-passwd" className="show-passwd" onClick={handlePasswordToggle}>
                        <img src={showPassword ? eyeClosed : eyeOpen} alt="Toggle Password Visibility" />
                    </button>
                </div>

                <div className="form-group">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        name="confirm-password"
                        id="confirm-password"
                        required
                        minLength="8"
                        maxLength="24"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        placeholder=""
                    />
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <button type="button" id="show-passwd" className="show-passwd" onClick={handlePasswordToggle}>
                        <img src={showPassword ? eyeClosed : eyeOpen} alt="Toggle Password Visibility" />
                    </button>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default VerifyPass;
