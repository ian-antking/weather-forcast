import React from 'react';

const ForecastSummary = (forecast) => {
  return (
    <div className="forecast-summary">
      <div className="forecast-summary__date">
        <span>{forecast.date}</span>
      </div>
      <div className="forecast-summary__temperature">
        <span>{forecast.temperature}</span>
      </div>
      <div className="forecast-summary__description">
        <span>{forecast.description}</span>
      </div>
      <div className="forecast-summary__icon">
        <span>{forecast.icon}</span>
      </div>
    </div>
  );
};

export default ForecastSummary;
