import React, { useState } from 'react';

// Example of State:
// Keep track of some information that
// will change.
export function Counter() {
  // 1. Declare the State Variable
  const [count, setCount] = useState(5);

  // const stateVar = useState(0);
  // count = stateVar[0];
  // setCount = stateVar[1];

  return (
    <div>
      {/* 2. Use the state variable */}
      {count}

      <button
        onClick={() =>
          // 3. Reset the state variable
          setCount(count + 1)
        }
      >
        +
      </button>

      <button
        onClick={() =>
          // 3. Reset the state variable
          setCount(count - 1)
        }
      >
        -
      </button>
    </div>
  );
}
