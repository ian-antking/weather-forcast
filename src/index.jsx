import 'raf/polyfill';
import React from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import LocationDetails from './components/location-details';
import ForecastSummaries from './components/forecast-summaries';
import ForecastDetails from './components/forecast-details';
import SearchForm from './components/search-form';
import StatusMessage from './components/status-message';
import '../src/styles/app.scss';
import '../src/styles/forecast-summaries.scss';
import '../src/styles/forecast-details.scss';
import '../src/styles/search-bar.scss';
import '../src/styles/status-message.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: '',
      selectedDate: 0,
      forecasts: [],
      location: {
        city: '',
        country: '',
      },
    };
  }

  componentDidMount() {
    this.getForecast('Manchester');
  }

  handleForecastSelect = (date) => {
    this.setState({ selectedDate: date });
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      console.log('The System Works!');
    }
  };

  getForecast = (city) => {
    axios.get(`https://mcr-codes-weather.herokuapp.com/forecast?city=${city}`)
      .then((response) => {
        this.setState({
          location: {
            city: response.data.location.city,
            country: response.data.location.country,
          },
          forecasts: response.data.forecasts,
          status: '',
        });
      })
      .catch((error) => {
        if (error.response) {
          this.setState({
            status: `Error: ${city} not found!`,
          });
        } else if (error.request) {
          this.setState({
            status: 'Could not fetch data; Please check your connection and try again.',
          });
        }
      });
  };

  render() {
    const selectedDate = this.state.selectedDate;
    const selectedForecast = this.state.forecasts.find(forecast => forecast.date === selectedDate);
    return (
      <div className="forecast">
        <LocationDetails location={this.state.location} />
        <div className="search-bar">
          <SearchForm
            onSearch={this.getForecast}
          />
          <StatusMessage message={this.state.status} />
        </div>
        <ForecastSummaries
          forecasts={this.state.forecasts}
          onForecastSelect={this.handleForecastSelect}
        />
        {
          selectedForecast && <ForecastDetails forecasts={selectedForecast} />
        }
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
