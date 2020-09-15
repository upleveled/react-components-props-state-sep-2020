import React from 'react';
import './CssModulesProfile.css';

export default function CssModulesProfile({ user }) {
  return (
    <div className="profile">
      <img src={user.avatar} alt="" />
      <div className="profile-username">
        {user.firstName} {user.lastName}
      </div>
    </div>
  );
}
