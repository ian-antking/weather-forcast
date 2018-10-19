import React from 'react';
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';

const ForecastSummary = (forecast) => {
  return (
    <div className="forecast-summary">
      <div className="forecast-summary__date">
        <span>{
            moment(forecast.date).format('ddd Do MMM')
          }</span>
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
