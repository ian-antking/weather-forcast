import React from 'react';
import moment from 'moment';

const ForecastDetails = (props) => {
  console.log(props);
  return (
    <div className="forecast-details">
      <div className="forecast-details__date">
        <span><b>{
          moment(props.forecasts.date).format('ddd Do MMM')
        }</b>
        </span>
      </div>
      <div className="forecast-summary__temperature-min">
        <span>
          Low: {props.forecasts.temperature.min}℃
        </span>
      </div>
      <div className="forecast-summary__temperature-max">
        <span>
          High: {props.forecasts.temperature.max}℃
        </span>
      </div>
      <div className="forecast-summary__humidity">
        <span>
          Humidity: {props.forecasts.humidity}%
        </span>
      </div>
      <div className="forecast-summary__windspeed">
        <span>
          Wind Speed: {props.forecasts.wind.speed}mph
        </span>
      </div>
      <div className="forecast-summary__wind-direction">
        Direction: {props.forecasts.wind.direction}
      </div>
    </div>
  );
};

export default ForecastDetails;
