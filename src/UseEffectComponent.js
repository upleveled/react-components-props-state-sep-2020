import React, { useEffect, useState } from 'react';

export default function UseEffectComponent(props) {
  const [username, setUsername] = useState('');
  // console.log(useEffect);

  useEffect(() => {
    console.log('set document title', new Date());
    document.title = username;
  }, [username]);

  return (
    <div>
      This component doesn't render much, but it triggers effects
      <br />
      prop from above: {props.liftingStateUpName}
      <br />
      <label>
        Username:
        <input
          value={username}
          onChange={(event) => setUsername(event.currentTarget.value)}
        />
        <br />
        {username}
      </label>
    </div>
  );
}
