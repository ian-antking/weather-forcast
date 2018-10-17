import React from 'react';

const ForecastSummary = (props) => {
  return (
    <div className="forecast-summary">
      <div className="forecast-summary__date">
        <span>{props.forecast.date}</span>
      </div>
    </div>
  );
};

export default ForecastSummary;
