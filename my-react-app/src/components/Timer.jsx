// src/components/Timer.jsx
import React, { useState, useEffect } from 'react';
import './Timer.css'; // Import the CSS file

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSeconds(0);
  };

  return (
    <div className="timer-container">
      <div className="timer-display">{seconds}s</div>
      <button className="button" onClick={toggleTimer}>
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button className="button" onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Timer;
