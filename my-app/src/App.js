import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"
import HomePage from "./components/HomePage"
import BMI from "./components/BMI"// Import the BMI component

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element = {<HomePage />} />
        <Route path="/home" element={<HomePage />} /> {/* Home page */}
        <Route path="/bmi" element={<BMI />} /> {/* BMI Calculator page */}
        {/* Add other feature routes here */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
