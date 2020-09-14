import { Header } from './Header';
import React from 'react';
import './App.css';
import { Counter } from './Counter';

function App() {
  return (
    <div className="App">
      <Header darkMode={true} text="UpLeveled" />
      <Counter />
    </div>
  );
}

export default App;
