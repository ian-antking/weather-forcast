import React from 'react';

const ForecastSummary = (props) => {
  return (
    <div className="forecast-summary">
      <div className="forecast-summary__date">
        {props.forecast.date}
      </div>
    </div>
  );
};

export default ForecastSummary;
