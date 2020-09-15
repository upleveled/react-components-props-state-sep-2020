import React from 'react';

export default function LiftingStateUp(props) {
  return (
    <>
      Name: {props.name}
      <br />
      <input
        value={props.name}
        onChange={(event) => {
          props.setName(event.currentTarget.value);
        }}
      />
    </>
  );
}
