import React from 'react';

const buttonStyle = {
  border: '2px solid #666',
  padding: '10px 8px',
  backgroundColor: '#ddd',
  borderRadius: 3,
  fontSize: 24,
};

export default function Button(props) {
  return <button style={buttonStyle} {...props} />;
}
