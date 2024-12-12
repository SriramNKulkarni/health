import React, { useState } from "react";
import "./BMIPage.css";

const BMIPage = () => {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmiResult, setBmiResult] = useState("");
    const [message, setMessage] = useState("");

    const calculateBMI = () => {
        if (weight && height) {
            const heightInMeters = height / 100;
            const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
            setBmiResult(`Your BMI is: ${bmi}`);

            if (bmi < 18.5) {
                setMessage("You are underweight.");
            } else if (bmi >= 18.5 && bmi <= 24.9) {
                setMessage("You have a normal weight.");
            } else if (bmi >= 25 && bmi <= 29.9) {
                setMessage("You are overweight.");
            } else {
                setMessage("You are obese.");
            }
        } else {
            setBmiResult("Please enter valid inputs.");
            setMessage("");
        }
    };

    return (
        <div className="bmi-container">
            <header className="navbar">
                <h1>BMI Checker</h1>
            </header>
            <section>
                <h2>Calculate Your BMI</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor="weight">Weight (kg):</label>
                    <input
                        type="number"
                        id="weight"
                        placeholder="Enter your weight"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                    />
                    <label htmlFor="height">Height (cm):</label>
                    <input
                        type="number"
                        id="height"
                        placeholder="Enter your height"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                    />
                    <button type="button" onClick={calculateBMI}>
                        Calculate BMI
                    </button>
                </form>
                <div className="result">
                    <p>{bmiResult}</p>
                    <p>{message}</p>
                </div>
            </section>
        </div>
    );
};

export default BMIPage;
