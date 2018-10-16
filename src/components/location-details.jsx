import React from 'react';

const LocationDetails = (props) => {
  return (
    <h1 className="location-heading">
      {props.location.city}, {props.location.country}
    </h1>
  );
};

export default LocationDetails;
