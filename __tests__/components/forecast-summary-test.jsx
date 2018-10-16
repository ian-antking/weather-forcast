import React from 'react';
import Enzyme from 'enzyme';
import ForecastSummary from '../../src/components/forecast-summary';

it('renders the date', () => {
  const forecast = {
    date: 'mockDate',
    temperature: 'mockTemp',
    description: 'mockDescripton',
    icon: 'mockIcon',
  };
  const wrapper = Enzyme.shallow((
    <ForecastSummary forecast={forecast} />
  ));
  expect(wrapper.find('.forecast-summary__date').toEqual('mockDate'));  
});
it('renders the temperature', () => {
  const forecast = {
    date: 'mockDate',
    temperature: 'mockTemp',
    description: 'mockDescripton',
    icon: 'mockIcon',
  };
  const wrapper = Enzyme.shallow((
    <ForecastSummary forecast={forecast} />
  ));
  expect(wrapper.find('forecast-summary__date').toEqual('mockTemp'));
});
it('renders the description', () => {
  const forecast = {
    date: 'mockDate',
    temperature: 'mockTemp',
    description: 'mockDescripton',
    icon: 'mockIcon',
  };
  const wrapper = Enzyme.shallow((
    <ForecastSummary forecast={forecast} />
  ));
  expect(wrapper.find('.forecast-summary__description')).toEqual('mockDescription');
});
it('renders the icon', () => {
  const forecast = {
    date: 'mockDate',
    temperature: 'mockTemp',
    description: 'mockDescripton',
    icon: 'mockIcon',
  };
  const wrapper = Enzyme.shallow((
    <ForecastSummary forecast={forecast} />
  ));
  expect(wrapper.find('.forecast-summary__icon')).toEqual('mockIcon');
});
