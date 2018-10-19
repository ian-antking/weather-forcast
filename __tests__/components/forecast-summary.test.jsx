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
  const temperature = wrapper.find('div.forecast-summary__temperature').text();
  expect(temperature).toEqual('mockTemperature');
});

it('renders the description', () => {
  const description = wrapper.find('div.forecast-summary__description').text();
  expect(desctiption).toEqual('mockDescription');
});

it('renders the icon', () => {
  const icon = wrapper.find('div.forecast-summary__icon').text();
  expect(icon).toEqual('mockIcon');
});