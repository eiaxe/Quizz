import React, { useState, useEffect } from 'react';
import './App.css'; // Optional: for custom styling

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false); // State for Remember Me checkbox

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (email === '' || password === '') {
      setError('Please fill in all fields.');
    } else {
      setError('');
      // Handle login logic here (e.g., API call)
      console.log('Logging in with:', { email, password, rememberMe });
      // Reset fields after login attempt
      setEmail('');
      setPassword('');
      setRememberMe(false); // Reset Remember Me checkbox
    }
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      const shadow = document.querySelector('.mouse-shadow');
      shadow.style.left = `${event.clientX}px`;
      shadow.style.top = `${event.clientY}px`;

      // Move background based on mouse position
      const x = (event.clientX / window.innerWidth) * 100; // percentage of the window width
      const y = (event.clientY / window.innerHeight) * 100; // percentage of the window height
      document.body.style.backgroundPosition = `${x}% ${y}%`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
        </div>
        
        {/* Flex container for checkbox and forgot password in the same line */}
        <div className="remember-forgot">
          <div className="remember-me">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>
          <div className="forgot-password">
            <a href="/forgot-password">Forgot Password?</a>
          </div>
        </div>

        <button type="submit">Login</button>
      </form>

      {/* Buttons for Professeur and Étudiant at the end */}
      <div className="role-buttons">
        <button onClick={() => console.log('Professeur selected')}>Professeur</button>
        <button onClick={() => console.log('Étudiant selected')}>Étudiant</button>
      </div>

      {/* Mouse shadow div */}
      <div className="mouse-shadow"></div>
    </div>
  );
}

export default App;