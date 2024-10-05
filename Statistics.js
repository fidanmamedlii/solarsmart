import React, { useState, useEffect } from 'react';
import './Statistics.css'; // Add CSS styles here

const Statistics = () => {
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [kWh, setKWh] = useState(null);
  const [sensorData, setSensorData] = useState({
    temperature: 0,
    humidity: 0,
    energyUsage: 0,
    lightingConsumption: 0,
  });

  // Data for monthly kWh usage
  const monthlyData = {
    Jan: 600,
    Feb: 800,
    Mar: 1000,
    Apr: 500,
    May: 400,
    // Add more months and their kWh values here
  };

  const handleBarClick = (month, usage) => {
    setSelectedMonth(month);
    setKWh(usage);
  };

  // Function to generate random sensor data
  const generateRandomSensorData = () => {
    return {
      temperature: Math.floor(Math.random() * (35 - 20 + 1)) + 20, // Random temp between 20°C and 35°C
      humidity: Math.floor(Math.random() * 100), // Random humidity between 0% and 100%
      energyUsage: Math.floor(Math.random() * 500), // Random energy usage between 0 and 500 kWh
      lightingConsumption: Math.floor(Math.random() * 100), // Random lighting consumption between 0% and 100%
    };
  };

  // Update sensor data every time the component renders
  useEffect(() => {
    const interval = setInterval(() => {
      setSensorData(generateRandomSensorData());
    }, 3000); // Update data every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  return (
    <div className="statistics-container">
      <h1>Electric Usage Statistics</h1>

      {/* Display the clicked month and kWh usage */}
      {selectedMonth && (
        <div className="selected-month-info">
          <h3>{selectedMonth} Energy Usage</h3>
          <p>{kWh} kWh</p>
        </div>
      )}

      <div className="stats-grid">
        <div className="today-usage">
          <h3>Today</h3>
          <p>93 kWh</p>
        </div>
        <div className="monthly-usage">
          <h3>This Month</h3>
          <p>930.773 kWh</p>
        </div>
      </div>

      <div className="bar-chart-container">
        <h3>Monthly Energy Usage</h3>
        <div className="bar-chart">
          {Object.entries(monthlyData).map(([month, usage]) => (
            <div
              key={month}
              className="bar"
              style={{ height: `${usage / 10}%` }} // Adjust bar height dynamically based on usage
              onClick={() => handleBarClick(month, usage)} // Handle click to display usage info
            >
              {month}
            </div>
          ))}
        </div>
      </div>

      {/* Sensor Data Section */}
      <div className="energy-details">
        <div className="detail-box">
          <h4>Temperature</h4>
          <p>{sensorData.temperature}°C</p>
        </div>
        <div className="detail-box">
          <h4>Humidity</h4>
          <p>{sensorData.humidity}%</p>
        </div>
        <div className="detail-box">
          <h4>Energy Usage</h4>
          <p>{sensorData.energyUsage} kWh</p>
        </div>
        <div className="detail-box">
          <h4>Lighting Consumption</h4>
          <p>{sensorData.lightingConsumption}%</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
