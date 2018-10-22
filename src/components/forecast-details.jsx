import React from 'react';
import moment from 'moment';

const ForecastDetails = (props) => {
  console.log(props);
  return (
    <div className="forecast-details">
      <div className="forecast-details__date">
        <span>{
          moment(props.forecasts.date).format('ddd Do MMM')
        }
        </span>
      </div>
      <div className="forecast-summary__temperature-min">
        <span>
          {props.forecasts.temperature.min}
        </span>
      </div>
      <div className="forecast-summary__temperature-max">
        <span>
          {props.forecasts.temperature.max}
        </span>
      </div>
    </div>
  );
};

export default ForecastDetails;
