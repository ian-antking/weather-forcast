import 'raf/polyfill';
import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import { location } from './data/forecast.json';
import LocationDetails from './components/location-details';

const App = (props) => {
  return (
    <LocationDetails location={props.location} />
  );
};

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};

render(<App location={location} />, document.getElementById('root'));
