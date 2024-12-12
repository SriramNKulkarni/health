import React from "react";
import "./HomePage.css";

const HomePage = () => {
    return (
        <>
            <header className="navbar">
                <div className="logo">
                    <img src="logo.png" alt="Svastha Logo" />
                </div>
                <nav>
                    <a href="#bmi">BMI Checker</a>
                    <a href="#calories">Calorie Counter</a>
                    <a href="#medicine">Medicine Description</a>
                    <a href="#prediction">Disease Prediction</a>
                    <a href="#chatbot">Chatbot</a>
                </nav>
                <div className="profile">
                    <i className="fa-solid fa-user"></i>
                    <ul className="dropdown">
                        <li>Account</li>
                        <li>Settings</li>
                        <li>About</li>
                        <li>Contact Us</li>
                        <li>Log Out</li>
                    </ul>
                </div>
            </header>

            <section className="hero">
                <h1>Welcome to Svastha</h1>
                <p>Your Personalized Healthcare Platform</p>
                <button>Start Your Health Journey</button>
            </section>

            <section id="features" className="features">
                <div className="feature-card">
                    <h3>Disease Prediction</h3>
                    <p>Accurately predict potential diseases based on symptoms.</p>
                </div>
                <div className="feature-card">
                    <h3>Calorie Counter</h3>
                    <p>Monitor your calorie intake for a healthy lifestyle.</p>
                </div>
                <div className="feature-card">
                    <h3>Medicine Description</h3>
                    <p>Get detailed information about medicines.</p>
                </div>
                <div className="feature-card">
                    <h3>BMI Checker</h3>
                    <p>Calculate your BMI easily and track your health goals.</p>
                </div>
                <div className="feature-card">
                    <h3>Chatbot</h3>
                    <p>Chat with our virtual assistant for healthcare advice.</p>
                </div>
            </section>

            <footer>
                <p>&copy; 2024 Svastha. All Rights Reserved.</p>
            </footer>
        </>
    );
};

export default HomePage;
