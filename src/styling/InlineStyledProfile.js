import React from 'react';

export default function InlineStyledProfile({ user }) {
  return (
    <div
      style={{
        display: 'inline-block',
        backgroundColor: '#ddd',
        borderRadius: 50,
        padding: 50,
      }}
    >
      <img
        src={user.avatar}
        alt=""
        style={{
          width: 400,
          height: 400,
          objectFit: 'cover',
          borderRadius: '50%',
        }}
      />
      <div
        style={{
          marginTop: '1.5rem',
          fontWeight: 'bold',
          fontSize: '2rem',
        }}
      >
        {user.firstName} {user.lastName}
      </div>
    </div>
  );
}
