// src/App.jsx
import React from 'react';
import Timer from './components/Timer';
import './App.css'; // Ensure you import your CSS file

const App = () => {
  return (
    <div className="app-container">
       <div className="background-image" />
      <h1>Timer</h1>
      <Timer />
    </div>
  );
};

export default App;
