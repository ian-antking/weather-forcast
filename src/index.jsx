import 'raf/polyfill';
import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import { location, forecasts } from './data/forecast.json';
import LocationDetails from './components/location-details';
import ForecastSummaries from './components/forecast-summaries';
import ForecastDetails from './components/forecast-details';

import '../src/styles/app.scss';
import '../src/styles/forecast-summaries.scss';
import '../src/styles/forecast-details.scss';

const App = (props) => {
  return (
    <div className="forecast">
      <LocationDetails location={props.location} />
      <ForecastSummaries forecasts={props.forecasts} />
      <ForecastDetails forecasts={props.forecasts[0]} />
    </div>
  );
};

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  forecasts: PropTypes.array.isRequired,
};

render(<App location={location} forecasts={forecasts} />, document.getElementById('root'));
