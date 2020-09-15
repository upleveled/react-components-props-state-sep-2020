import React, { useState } from 'react';

export default function ControlledComponents() {
  // 1. State Variable
  const [name, setName] = useState('');

  return (
    <>
      Name: {name}
      <br />
      <input
        // 2. Use the current value of the
        // state variable
        value={name}
        onChange={
          // 3. Create an event handler
          // that sets the state variable
          // with the current value in the
          // input box
          (event) => {
            setName(event.currentTarget.value);
          }
        }
      />
    </>
  );
}
