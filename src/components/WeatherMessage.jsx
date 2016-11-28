import React from 'react';

export default function WeatherMessage({ temp, location }) {
  return (
    <p className="text-center">It is {temp} in {location}.</p>
  );
}

WeatherMessage.propTypes = {
  temp: React.PropTypes.number,
  location: React.PropTypes.string,
};
