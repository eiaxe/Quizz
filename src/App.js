import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/home';
import LoginPage from './Home/index'; // Ensure this path is correct
import Sign from './Home/sign';
import VerifyEmail from './Home/verifyemail';
import VerifyCode from './Home/verifycode';
import VerifyPass from './Home/verifypass';
import VerifyAccount from './Home/verifyaccount';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} /> {/* Add this line */}
                <Route path="/verifyaccount" element={<VerifyAccount />} />
                <Route path="/index" element={<LoginPage />} /> 
                <Route path="/sign" element={<Sign />} />
                <Route path="/verifyemail" element={<VerifyEmail />} />
                <Route path="/verifycode" element={<VerifyCode />} />
                <Route path="/verifypass" element={<VerifyPass />} />
            </Routes>
        </Router>
    );
};

export default App;
