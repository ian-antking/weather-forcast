import React from 'react';
import Enzyme from 'enzyme';
import ForecastSummary from '../../src/components/forecast-summary';

let forecast;
let wrapper;

beforeEach(() => {
  forecast = {
    date: 'mockDate',
    temperature: 'mockTemp',
    description: 'mockDescripton',
    icon: 'mockIcon',
  };
  wrapper = Enzyme.shallow((
    <ForecastSummary forecast={forecast} />
  ));
});

it('renders the date', () => {
  const date = wrapper.find('div.forecast-summary__date').text();
  expect(date).toEqual('mockDate');
});

it('renders the temperature', () => {
  const temperature = wrapper.find('div.forecaset-summary__temperature').text();
  expect(temperature).toEqual('mockTemperature');
});