import ReactDOM from 'react-dom';
import React from 'react';

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>Hi</h1>
        <form>
          <input type="text" placeholder="twitter handle" />
        </form>
      </div>
    );
  },
})

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
