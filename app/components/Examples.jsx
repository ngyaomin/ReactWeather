var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>A few examples locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Singapore'>Singapore</Link>
        </li>
        <li>
          <Link to='/?location=Taiwan'>Taiwan</Link>
        </li>
      </ol>
    </div>
  )
}

module.exports = Examples;
