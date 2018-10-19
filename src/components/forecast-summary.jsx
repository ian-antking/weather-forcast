import React from 'react';
import WeatherIcon from 'react-icons-weather';

const ForecastSummary = (forecast) => {
  return (
    <div className="forecast-summary">
      <div className="forecast-summary__date">
        <span>{forecast.date}</span>
      </div>
      <div className="forecast-summary__temperature">
        <span>{forecast.temperature}</span>
      </div>
      <div className="forecast-summary__icon">
        <WeatherIcon
          name="owm"
          iconId={forecast.icon}
        />
      </div>
      <div className="forecast-summary__description">
        <span>{forecast.description}</span>
      </div>
    </div>
  );
};

export default ForecastSummary;
