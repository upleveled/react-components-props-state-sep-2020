import React, { useState } from 'react';
import logo from './logo.svg';

let color = 'red';

// This color will not be updated
// after two seconds in the React
// component because React does not
// know about the change
//
// Tip: Use a state variable for this!
setTimeout(() => {
  color = 'blue';
}, 2000);

export function Header(props) {
  const [name, setName] = useState('Karl');

  // This is where we're receiving the information
  console.log('header props', props);
  return (
    <header
      className={`App-header` + props.darkMode ? '-dark' : ''}
      style={{ color: color }}
    >
      <img src={logo} className="App-logo" alt="UpLeveled" />
      <br />
      {props.text.toUpperCase()}
      <br />
      Hello {name}
      <button onClick={() => setName('Thorina')}>Change name</button>
    </header>
  );
}
