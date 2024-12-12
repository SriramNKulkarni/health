import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import "./HomePage.css";
import logo from "../assets/image/svastha-logo.png";


const HomePage = () => {
  const [showProfile, setShowProfile] = useState(false);

  const toggleProfile = () => {
    setShowProfile((prev) => !prev);
  };

  return (
    <div className="home-page">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Svastha Logo" className="logo-img" /> {/* Logo Image */}
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/disease-prediction">Disease Prediction</Link>
          </li>
          <li>
              <Link to="Bmi">BMI </Link>
            </li>

          <li>
            <Link to="/medicine-description">Medicine Description</Link>
          </li>
        </ul>
        <div className="profile">
          <button onClick={toggleProfile} className="profile-btn">
            Profile
          </button>
          {showProfile && (
            <div className="profile-dropdown">
              <ul>
                <li>Account</li>
                <li>Settings</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Main Title */}
      <header className="main-title">
        <h1>Welcome to Svastha</h1>
        <p>Your Personal Healthcare Platform</p>
      </header>

      {/* About Svastha Section */}
      <section className="about-svastha">
        <div className="about-section">
          <h2>What is Svastha?</h2>
          <p>
            Svastha is your one-stop healthcare platform designed to assist with
            disease predictions, BMI calculations, and detailed medicine
            descriptions. Our AI-powered tools ensure you get the best guidance
            for your healthcare needs.
          </p>
        </div>
        <div className="about-section">
          <h2>Why It Started?</h2>
          <p>
            Svastha was founded with the mission of bridging the gap between
            patients and healthcare technology. Our goal is to make personalized
            healthcare accessible to everyone, anytime, anywhere.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
