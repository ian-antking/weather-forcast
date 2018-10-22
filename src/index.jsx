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

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: this.props.forecasts[0].date,
    };
  }

  render() {
    const selectedDate = this.state.selectedDate;
    const selectedForecast = this.props.forecasts.find(forecast => forecast.date === selectedDate);
    return (
      <div className="forecast">
        <LocationDetails location={this.props.location} />
        <ForecastSummaries forecasts={this.props.forecasts} />
        <ForecastDetails forecasts={selectedForecast} />
      </div>
    );
  }
}

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  forecasts: PropTypes.array.isRequired,
};

render(<App location={location} forecasts={forecasts} />, document.getElementById('root'));
