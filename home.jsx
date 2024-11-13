import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Home/Untitled_design-removebg-preview.png'; // Adjust the path
import privacyIcon from '../Home/Privacy_e_Cookie_Policy_registerit_iubenda_Features_Icon.png'; // Adjust the path
import termsIcon from '../Home/terms_and_conditions-b2ecac04071503f53269125183052405bee78d8199cd799047bf382eaf79e6c3.png'; // Adjust the path

const HomePage = () => {
  const [darkMode, setDarkMode] = useState(false);


  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };


  const handleScrollTo = (id) => {
      const element = document.getElementById(id);
      if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
      }
  };

  return (  
      <>
          <style>
              {`
                * {
              * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: 'Comic Sans MS', 'Arial', sans-serif; /* Fun font */
                overflow-y: auto;
              }
    
              html {
                scroll-behavior: smooth;
                height: auto; /* Allow scrolling */
              }
    
              body {
                background-color: #1b1b33;
                color: #fff;
                overflow-x: hidden;
                scroll-behavior: smooth; /* Smooth scroll for buttons */
                min-height: auto; /* Ensure body can grow */
              }
    
              /* For Webkit browsers (Chrome, Safari) */
              ::-webkit-scrollbar {
                width: 12px; /* Width of the scrollbar */
              }
    
              ::-webkit-scrollbar-track {
                background: rgba(255, 255, 255, 0.1); /* Background of the scrollbar track */
                border-radius: 6px; /* Rounded corners */
              }
    
              ::-webkit-scrollbar-thumb {
                background: #fff; /* Color of the scrollbar thumb */
                border-radius: 6px; /* Rounded corners */
                transition: background 0.3s; /* Transition for hover effect */
              }
    
              ::-webkit-scrollbar-thumb:hover {
                background: rgba(255, 255, 255, 0.6); /* Color of the thumb on hover */
              }
    
              /* For Firefox */
              * {
                scrollbar-width: thin; /* Make the scrollbar thin */
                scrollbar-color: #fff rgba(255, 255, 255, 0.1); /* Thumb color and track color */
              }
    
              /* Navbar */
              nav {
                display: flex;
                justify-content: space-between;
                padding: 1rem 2rem;
                background: rgba(255, 255, 255, 0.05);
                align-items: center;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                position: sticky;
                top: 0;
                z-index: 1000;
              }
    
              nav .logo {
                font-size: 1.8rem;
                font-weight: bold;
                color: white;
                display: flex;
                align-items: center;
                gap: 8px;
              }
    
              nav .menu a {
                color: #fff;
                margin: 0 1rem;
                font-weight: bold;
                cursor: pointer;
                transition: color 0.3s;
              }
    
              nav .menu a:hover {
                color: rgba(255, 255, 255, 0.6);
              }
    
              /* Hero Section */
              .hero {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                text-align: center;
                padding: 6rem 2rem;
                background: linear-gradient(to bottom right, #1b1b33, rgba(255, 255, 255, 0.05));
                color: white;
                min-height: 100vh; /* Allow for content to dictate height */
              }
    
              .hero h1 {
                font-size: 3.5rem;
                font-weight: bold;
                margin-bottom: 1rem;
                color: white;
              }
    
              .hero p {
                font-size: 1.2rem;
                max-width: 600px;
                margin-bottom: 2rem;
              }
    
              .cta-btn {
                background-color: rgba(255, 255, 255, 0.6);
                color: white;
                padding: 1rem 2rem;
                font-size: 1.2rem;
                font-weight: bold;
                border-radius: 50px;
                transition: background 0.3s, transform 0.2s;
                text-transform: uppercase;
                cursor: pointer;
              }
    
              .cta-btn:hover {
                background-color: rgba(255, 255, 255, 0.05);
                color: #fff;
                transform: scale(1.1);
              }
    
              /* Features Section */
              .features {
                padding: 3rem 2rem;
                display: flex;
                flex-wrap: wrap;
                gap: 2rem;
                justify-content: center;
                background-color: #121212;
              }
    
              .feature-box {
                background-color: rgba(255, 255, 255, 0.05);
                color: rgba(255, 255, 255, 0.6);
                padding: 2rem;
                width: 250px;
                text-align: center;
                border-radius: 12px;
                transition: transform 0.3s;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
              }
    
              .feature-box:hover {
                transform: scale(1.05);
                box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
              }
    
              /* About Section */
              .about {
                padding: 4rem 2rem;
                background-color: rgba(255, 255, 255, 0.05);
                color: rgba(255, 255, 255, 0.6);
                text-align: center;
              }
    
              .about h2 {
                font-size: 2.5rem;
                margin-bottom: 1rem;
              }
    
              .about p {
                max-width: 700px;
                margin: auto;
                font-size: 1.2rem;
              }
    
              .fun-facts {
                margin-top: 2rem;
                font-size: 1rem;
              }
    
              /* Policy Section */
              .policy-section {
                padding: 4rem 2rem;
                background-color: #121212;
                color: rgba(255, 255, 255, 0.6);
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                gap: 2rem;
              }
    
              .policy-box {
                flex: 1;
                text-align: center;
                padding: 2rem;
              }
    
              .policy-box img {
                width: 80px; /* Larger image */
                margin-bottom: 1rem;
              }
    
              .policy-box h4 {
                font-size: 2.5rem; /* Larger title */
                margin-bottom: 1rem;
              }
    
              .policy-box p {
                font-size: 1.2rem; /* Larger text */
              }
    
              .divider {
                height: 100%;
                width: 4px; /* Line thickness */
                background-color: rgba(255, 255, 255, 0.6);
              }
    
              /* Contact Section */
              .contact {
                background-color: #121212;
                padding: 4rem 2rem;
                text-align: center;
              }
    
              .contact h2 {
                font-size: 2.5rem;
                margin-bottom: 1rem;
                color: rgba(255, 255, 255, 0.6);
              }
    
              .contact form {
                max-width: 500px;
                margin: auto;
              }
    
              .contact input, .contact textarea {
                width: 100%;
                padding: 1rem;
                margin: 1rem 0;
                border: none;
                border-radius: 5px;
                font-size: 1rem;
              }
    
              .contact button {
                padding: 1rem 2rem;
                border: none;
                background-color: rgba(255, 255, 255, 0.6);
                color: #333;
                font-size: 1.2rem;
                cursor: pointer;
                transition: background-color 0.3s;
              }
    
              .contact button:hover {
                background-color: rgba(255, 255, 255, 0.05);
                color: #fff;
              }
    
              /* Footer */
              footer {
                background-color: rgba(255, 255, 255, 0.05);
                color: rgba(255, 255, 255, 0.6);
                padding: 2rem;
                text-align: center;
                display: flex;
                flex-direction: column;
                gap: 1rem;
              }
    
              footer a {
                color: rgba(255, 255, 255, 0.6);
                margin: 0 1rem;
              }
    
              .paint-splatter {
                position: absolute;
                width: 100%;
                height: 100%;
                overflow: hidden;
              }
    
              .splatter {
                position: absolute;
                background-color: rgba(255, 255, 255, 0.05);
                border-radius: 50%;
              }
    
              .splatter1 {
                width: 400px;
                height: 200px;
                top: 20%;
                left: -10%;
                clip-path: polygon(0 0, 60% 10%, 100% 30%, 90% 70%, 30% 100%, 0 80%);
              }
    
              .splatter2 {
                width: 500px;
                height: 300px;
                bottom: 10%;
                right: -5%;
                clip-path: polygon(0 20%, 40% 0, 80% 20%, 100% 60%, 70% 100%, 20% 80%);
              }
    
              .circle1 { width: 150px; height: 150px; top: 10%; left: 20%; }
              .circle2 { width: 200px; height: 200px; top: 60%; left: 70%; }
              .circle3 { width: 80px; height: 80px; top: 30%; left: 80%; }
              .circle4 { width: 120px; height: 120px; top: 70%; left: 10%; }
              .circle5 { width: 50px; height: 50px; top: 20%; left: 50%; }
              .login-btn {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.8rem 1.5rem;
  background-color: rgba(255, 255, 255, 0.6);
  color: #333;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
}

.login-btn:hover {
  background-color: rgba(255, 255, 255, 0.05);
  color: #fff;
  transform: scale(1.05);
}


            `}
              
                  </style>
            <div>
              {/* Navbar */}
              <nav>
                <div className="logo">
                <img src={logo} alt="Quizzy Logo" style={{ width: '30px', height: '40px' }} />
                  Quizzy

                </div>
                <div className="menu">
                  <a href="#home" onClick={() => handleScrollTo('home')}>Home</a>
                  <a href="#features" onClick={() => handleScrollTo('features')}>Features</a>
                  <a href="#about" onClick={() => handleScrollTo('about')}>About</a>
                  <a href="#policies" onClick={() => handleScrollTo('policies')}>Policies</a>
                  <a href="#contact" onClick={() => handleScrollTo('contact')}>Contact</a>
                  <a href="/index">Login</a>
                  <a href="/sign">Sign Up</a>
                </div>
              </nav>
        
              {/* Hero Section */}
              <section className="hero" id="home">
                <h1>Quizzy - Fun Learning for Students!</h1>
                <p>Challenge yourself and your friends with interactive quizzes on all your favorite topics!</p>
                <a href="#features" className="cta-btn">Get Started</a>
              </section>
        
              {/* Features Section */}
              <section className="features" id="features">
                <h2>Why Choose Quizzy?</h2>
                <div className="feature-box">Fun Quizzes for All Topics</div>
                <div className="feature-box">Challenge Your Friends</div>
                <div className="feature-box">Earn Badges & Rewards</div>
                <div className="feature-box">Track Your Progress</div>
              </section>
        
              {/* About Section */}
              <section className="about" id="about">
                <div className="paint-splatter">
                  <div className="splatter splatter1"></div>
                  <div className="splatter splatter2"></div>
                  <div className="circle circle1"></div>
                  <div className="circle circle2"></div>
                  <div className="circle circle3"></div>
                  <div className="circle circle4"></div>
                  <div className="circle circle5"></div>
                </div>
                <h2>About Quizzy</h2>
                <p>Quizzy is designed to make learning enjoyable and interactive for students of all ages. Compete, learn, and grow!</p>
                <div className="fun-facts">
                  <h4>Did You Know?</h4>
                  <ul>
                    <li>More than 80% of students prefer quizzes over regular tests—because who doesn’t love a little pressure?</li>
                    <li>Quizzing can improve retention rates by up to 90%. That’s better than a cup of coffee for keeping you awake!</li>
                    <li>Learning is like a quiz: sometimes you get the answer wrong, but you just laugh it off and try again!</li>
                  </ul>
                  <Link to="/index" className="login-btn">Go to Login</Link>
                </div>
              </section>
        
              {/* Policy Section */}
              <section className="policy-section" id="policies">
                <div className="policy-box">
                <img src={termsIcon} alt="term" style={{  width: '80px' }} />
                  <h4>Privacy and Cookie Policy</h4>
                  <p>Privacy policies are legally required almost everywhere in the world, and cookie policies are a central requirement under the ePrivacy Directive (Cookie Law). Our generator allows you to create beautiful, precise policies and seamlessly integrate them with your website or app. Getting started is easy, simply click below to begin.</p>
                </div>
                <div className="divider"></div>
                <div className="policy-box">
                <img src={termsIcon} alt="term" style={{  width: '80px' }} />
                  <h4>Terms and Conditions</h4>
                  <p>Terms and Conditions are used to govern the relationship with your users, such as specifying any "limitations of liability", and are mandatory for e-commerce. Our generator allows you to create beautiful, precise documents and seamlessly integrate them with your website or app. Getting started is easy, simply click below to begin.</p>
                </div>
              </section>
        
              {/* Contact Section */}
              <section className="contact" id="contact">
                <h2>Contact Us</h2>
                <form action="#">
                  <input type="text" placeholder="Your Name" required />
                  <input type="email" placeholder="Your Email" required />
                  <textarea placeholder="Your Message" required></textarea>
                  <button type="submit">Send Message</button>
                </form>
              </section>
        
              {/* Footer */}
              <footer>
                <p>&copy; 2024 Quizzy. All rights reserved.</p>
                <div>
                  <a href="#home" onClick={() => handleScrollTo('home')}>Home</a> | 
                  <a href="#features" onClick={() => handleScrollTo('features')}>Features</a> | 
                  <a href="#about" onClick={() => handleScrollTo('about')}>About</a> | 
                  <a href="#policies" onClick={() => handleScrollTo('policies')}>Policies</a> | 
                  <a href="#contact" onClick={() => handleScrollTo('contact')}>Contact</a>
                </div>
                <div>
                  <a href="#policies">Privacy Policy</a> | <a href="#policies">Terms of Service</a>
                </div>
              </footer>
            </div>
            </>
    );
};

export default HomePage;
