import React, { useEffect, useState } from 'react';

export default function DataFetchingWithUseEffect() {
  const [user, setUser] = useState();

  useEffect(() => {
    // Use promises with .then
    // fetch('https://randomuser.me/api/')
    //   .then((response) => {
    //     return response.json()
    //   })
    //   .then((json) => {
    //     console.log('json', json)
    //   })
    const fetchData = async () => {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      setUser(data.results[0]);
    };

    fetchData();
  }, []);

  // Examples Conditional Rendering
  if (!user) return <div>Loading...</div>;

  return (
    <div>
      First Name:{' '}
      {
        // Optional chaining JavaScript
        user?.name?.first
      }
      <br />
      Last Name: {user?.name?.last}
      <br />
      Name is Karl: {user.name.first === 'Karl' ? <span>Yes</span> : 'No'}
    </div>
  );
}
