import 'raf/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { location } from './data/forecast.json';
import LocationDetails from './components/location-details';

const App = (props) => {
  return (
    <LocationDetails location={props.location} />
  );
};

render(<App location={location} />, document.getElementById('root'));
