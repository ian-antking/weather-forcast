import 'raf/polyfill';
import React from 'react';
import axios from 'axios';
import { render } from 'react-dom';
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
      selectedDate: 0,
      forecasts: [],
      location: {
        city: '',
        country: '',
      },
    };
  }

  componentDidMount() {
    axios.get('https://mcr-codes-weather.herokuapp.com/forecast?city=Manchester')
      .then((response) => {
        this.setState({
          location: {
            city: response.data.location.city,
            country: response.data.location.country,
          },
          forecasts: response.data.forecasts,
        });
      });
  }

  render() {
    const selectedDate = this.state.selectedDate;
    const selectedForecast = this.state.forecasts.find(forecast => forecast.date === selectedDate);
    return (
      <div className="forecast">
        <LocationDetails location={this.state.location} />
        <ForecastSummaries
          forecasts={this.state.forecasts}
          onForecastSelect={this.handleForecastSelect.bind(this)}
        />
        {
          selectedForecast && <ForecastDetails forecasts={selectedForecast} />
        }
      </div>
    );
  }

  handleForecastSelect(date) {
    this.setState({ selectedDate: date });
  }
}

render(<App />, document.getElementById('root'));
