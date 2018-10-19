import React from 'react';
import Enzyme from 'enzyme';
import ForecastSummary from '../../src/components/forecast-summary';

let forecast;
let wrapper;

beforeEach(() => {
  forecast = {
    date: 'mockDate',
    temperature: {
      max: 'mockTemp',
    },
    description: 'mockDescripton',
    icon: 'mockIcon',
  };
  wrapper = Enzyme.shallow((
    <ForecastSummary
      key={forecast.date}
      date={forecast.date}
      description={forecast.description}
      icon={forecast.icon}
      temperature={forecast.temperature.max}
    />
  ));
});

it('renders the date', () => {
  const date = wrapper.find('.forecast-summary__date').text();
  expect(date).toEqual('mockDate');
});

it('renders the temperature', () => {
  const temperature = wrapper.find('.forecast-summary__temperature').text();
  expect(temperature).toEqual('mockTemp');
});

it('renders the description', () => {
  const describe = wrapper.find('.forecast-summary__description').text();
  expect(describe).toEqual('mockDescripton');
});

it('renders the icon', () => {
  const icon = wrapper.find('.forecast-summary__icon').text();
  expect(icon).toEqual('mockIcon');
});