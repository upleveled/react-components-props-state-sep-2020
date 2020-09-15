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

export function PropsHeader(
  // Props 2. Accept a parameter (this will be an
  // object of all of the atttributes that you
  // have defined)
  //
  // { darkMode: true, text: "UpLeveled" }
  props,
) {
  const [name, setName] = useState('Karl');

  // This is where we're receiving the information
  console.log('header props', props);
  return (
    <header
      className={
        `App-header` +
        // Props 3. Using the prop in your code
        props.darkMode
          ? '-dark'
          : ''
      }
      style={{ color: color }}
    >
      <img src={logo} className="App-logo" alt="UpLeveled" />
      <br />
      {/* Props 3. Using the prop in your code */}
      {props.text.toUpperCase()}
      <br />
      Hello {name}
      <button onClick={() => setName('Thorina')}>Change name</button>
      <br />
      <br />
      Name from LiftingStateUp Below: {props.liftingStateUpName}
      <br />
      <br />
    </header>
  );
}
