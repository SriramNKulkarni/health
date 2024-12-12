import React, { useState } from "react";
import "./Bmi.css";

const BMI = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [waist, setWaist] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");
  const [healthRisk, setHealthRisk] = useState("");

  const calculateBMI = () => {
    // Validate inputs
    if (!weight || !height || weight <= 0 || height <= 0 || !age || !waist) {
      alert("Please enter valid positive values for all inputs.");
      return;
    }

    // Convert height to meters and calculate BMI
    const heightInMeters = height / 100;
    const calculatedBMI = (weight / (heightInMeters ** 2)).toFixed(2);
    setBmi(calculatedBMI);

    // Determine BMI category
    let bmiCategory = "";
    if (calculatedBMI < 18.5) {
      bmiCategory = "Underweight";
    } else if (calculatedBMI >= 18.5 && calculatedBMI < 25) {
      bmiCategory = "Normal weight";
    } else if (calculatedBMI >= 25 && calculatedBMI < 30) {
      bmiCategory = "Overweight";
    } else {
      bmiCategory = "Obesity";
    }
    setStatus(bmiCategory);

    // Determine health risk based on waist circumference, age, and gender
    let risk = "";
    if (gender === "male") {
      if (waist > 94) risk = "Increased risk of health problems";
      if (waist > 102) risk = "High risk of health problems";
    } else if (gender === "female") {
      if (waist > 80) risk = "Increased risk of health problems";
      if (waist > 88) risk = "High risk of health problems";
    }

    // Age-based considerations
    if (age >= 45) risk += " (Higher risk due to age)";
    setHealthRisk(risk);
  };

  const resetInputs = () => {
    setWeight("");
    setHeight("");
    setWaist("");
    setAge("");
    setGender("male");
    setBmi(null);
    setStatus("");
    setHealthRisk("");
  };

  return (
    <div className="bmi-container">
      <h1 className="bmi-title">Enhanced BMI Calculator</h1>
      <div className="bmi-form">
        {/* Weight Input */}
        <div className="bmi-input">
          <label htmlFor="weight">Weight (kg):</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter weight"
          />
        </div>

        {/* Height Input */}
        <div className="bmi-input">
          <label htmlFor="height">Height (cm):</label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter height"
          />
        </div>

        {/* Waist Circumference Input */}
        <div className="bmi-input">
          <label htmlFor="waist">Waist Circumference (cm):</label>
          <input
            type="number"
            id="waist"
            value={waist}
            onChange={(e) => setWaist(e.target.value)}
            placeholder="Enter waist circumference"
          />
        </div>

        {/* Age Input */}
        <div className="bmi-input">
          <label htmlFor="age">Age (years):</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter age"
          />
        </div>

        {/* Gender Selection */}
        <div className="bmi-input">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        {/* Buttons */}
        <button className="bmi-button" onClick={calculateBMI}>
          Calculate BMI
        </button>
        <button className="bmi-reset" onClick={resetInputs}>
          Reset
        </button>
      </div>

      {/* Results Section */}
      {bmi && (
        <div className="bmi-result">
          <h2>Your BMI: {bmi}</h2>
          <p>Status: {status}</p>
          {healthRisk && <p>Health Risk: {healthRisk}</p>}
        </div>
      )}
    </div>
  );
};

export default BMI;
