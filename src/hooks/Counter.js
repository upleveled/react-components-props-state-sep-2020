import React, { useState } from 'react';

export default function HooksCounter(
  // { title: 'Hooks Counter' }
  props,
  // You can also access the information
  // via "destructuring" (to avoid "props."
  // when you're referencing your props):
  // { title },
) {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleMinusClick = () => {
    setCount(count - 1);
  };

  const handlePlusClick = () => {
    setCount(count + 1);
  };

  const handleMinusClick2 = () => {
    setCount2(count2 - 1);
  };

  const handlePlusClick2 = () => {
    setCount2(count2 + 1);
  };

  return (
    <>
      <div>
        {props.title} {count}
      </div>
      <button onClick={handleMinusClick}>-</button>
      <button onClick={handlePlusClick}>+</button>
      <br />
      <br />
      <div>
        {props.title} {count2}
      </div>
      <button onClick={handleMinusClick2}>-</button>
      <button onClick={handlePlusClick2}>+</button>
    </>
  );
}
