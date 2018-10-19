import React from 'react';

const ForecastSummary = (props) => {
  return (
    <div className="forecast-summary">
      <div className="forecast-summary__date">
        <span>{props.forecast.date}</span>
      </div>
      <div className="forecast-summary__temperature">
        <span>{props.forecast.temperature}</span>
      </div>
      <div className="forecast-summary__description">
        <span>{props.forecast.description}</span>
      </div>
      <div className="forecast-summary__icon">
        <span>{props.forecast.icon}</span>
      </div>
    </div>
  );
};

export default ForecastSummary;
