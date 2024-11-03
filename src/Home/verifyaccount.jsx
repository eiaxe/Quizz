import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './verifyaccount.css'; // Import your CSS file for styles
import logo from './Untitled_design-removebg-preview.png'; // Your logo image

const VerifyAccount = () => {
    const [inputs, setInputs] = useState(Array(6).fill('')); // Use an array of strings
    const buttonRef = useRef(null);
    const navigate = useNavigate(); // Get the navigate function

    useEffect(() => {
        const firstInput = document.querySelector('.otp-field2 > input');
        if (firstInput) firstInput.focus();
    }, []);

    const handlePaste = (event) => {
        event.preventDefault();
        const pastedValue = (event.clipboardData || window.clipboardData).getData('text');

        if (pastedValue.length > 6) {
            return; // Ignore if more than 6 characters
        }

        const newInputs = [...inputs];
        for (let i = 0; i < pastedValue.length; i++) {
            newInputs[i] = pastedValue[i];
        }
        setInputs(newInputs);
        // Focus next input if the paste filled the inputs
        const lastInputIndex = Math.min(pastedValue.length - 1, 5);
        const nextInput = document.querySelector(`.otp-field2 > input:nth-child(${lastInputIndex + 1})`);
        if (nextInput) nextInput.focus();
    };

    const handleChange = (index, e) => {
        const value = e.target.value;

        if (value.length > 1) return; // Ignore input longer than 1 character
        const newInputs = [...inputs];

        if (value === '') {
            newInputs[index] = ''; // Clear the input
            if (index > 0) {
                newInputs[index - 1] = ''; // Clear previous if backspacing
            }
            setInputs(newInputs);
            buttonRef.current.disabled = newInputs.some(input => input === ''); // Disable button if any input is empty
            return;
        } else {
            newInputs[index] = value; // Set current input
        }

        setInputs(newInputs);

        // Focus next input if current is filled
        if (value) {
            if (index < inputs.length - 1) {
                const nextInput = document.querySelector(`.otp-field2 > input:nth-child(${index + 2})`);
                if (nextInput) nextInput.focus();
            }
        }

        // Enable or disable button based on inputs
        buttonRef.current.disabled = newInputs.some(input => input === ''); // Disable button if any input is empty
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        const verificationCode = inputs.join(''); // Combine the inputs into a single verification code
        console.log("Verification code submitted:", verificationCode);
        navigate('/index'); // Navigate to VerifyPass
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
            <form onSubmit={handleSubmit}>
                <div className="login-container2">
                    <div className="otp-field2" onPaste={handlePaste}>
                        {inputs.map((input, index) => (
                            <input
                                key={index}
                                type="number"
                                maxLength="1"
                                value={input}
                                onChange={(e) => handleChange(index, e)}
                            />
                        ))}
                    </div>
                    <button type="submit" ref={buttonRef} disabled={inputs.some(input => input === '')}>
                        Verify
                    </button>
                </div>
            </form>
        </div>
    );
};

export default VerifyAccount;
