import React from 'react';

const LocationDetails = (props) => {
  console.log(props.location.city, props.location.country);
  return <h1 className="location-heading">{props.location.city}, {props.location.country}</h1>;
};

export default LocationDetails;
