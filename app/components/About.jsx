var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className='text-center'>About page</h1>
      <p>A simple weather application build with react</p>
      <p>Some Tools used</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a>
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - External weather API
        </li>
      </ul>
    </div>
  )

};

module.exports = About;
