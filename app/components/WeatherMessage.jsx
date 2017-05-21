var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <h3>It is {temp} degrees hot in {location} la</h3>
  )
};

module.exports = WeatherMessage;