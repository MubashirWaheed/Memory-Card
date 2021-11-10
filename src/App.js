import React from 'react';
import appcss from './App.module.css';
import Scores from './components/Scores';
import Cards from './components/Cards';

function App() {

  return (
    <div className={appcss.content}>
      <h1 className={appcss.heading}>Memory Card</h1>
      <Scores />
      <Cards />
    </div>
  );
}

export default App;
