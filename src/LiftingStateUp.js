import React from 'react';

const containerStyle = { margin: 20 };

export default function LiftingStateUp(props) {
  return (
    <div style={containerStyle}>
      Name: {props.name}
      <br />
      <input
        value={props.name}
        onChange={(event) => {
          props.setName(event.currentTarget.value);
        }}
      />
    </div>
  );
}
