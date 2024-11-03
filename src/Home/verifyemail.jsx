import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './verifyemail.css'; // Import the CSS file
import logo from './Untitled_design-removebg-preview.png'; // Your logo image


function VerifyEmail() {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        const email = e.target.email.value; // Get the email from the input
        navigate('/verifycode', { state: { email } }); // Navigate to VerifyCode
    };

    return (
        <div className="verify-email-page">
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

            <h1 className="login-title1">Quizzy</h1>
            <form onSubmit={handleSubmit}> {/* Use onSubmit handler */}
                <div className="login-container1">
                    <div className="form-group1">
                        <input type="email" id="email" required placeholder="" />
                        <label htmlFor="email">Verify Your Email</label>
                    </div>
                    <button type="submit">Verify</button>
                </div>
            </form>
        </div>
    );
}

export default VerifyEmail; // Only export the VerifyEmail component
