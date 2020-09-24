import React from 'react';
import PropTypes from 'prop-types';

export default function PropTypesComponent(props) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>My Logo</div>
      <div>{props.username}</div>
    </div>
  );
}

PropTypesComponent.propTypes = {
  username: PropTypes.string.isRequired,
};
