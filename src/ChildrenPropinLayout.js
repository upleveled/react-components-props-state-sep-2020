import React from 'react';

export default function Layout(props) {
  return (
    <div>
      <header>Header here</header>
      <main>{props.children}</main>
      <footer>Footer here</footer>
    </div>
  );
}
