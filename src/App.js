import React , {useState} from 'react';
import appcss from './App.module.css';
import Scores from './components/Scores';
import Cards from './components/Cards';

function App() {
  const [currentscore, setcurrentscore] = useState(0);
  const [highestScore, sethighestScore] = useState(0);



  return (
    <div className={appcss.content}>
      <h1 className={appcss.heading}>Memory Card</h1>
      <Scores currentscore={currentscore} highestScore={highestScore} />
      <Cards 
        currentscore={currentscore}
        setcurrentscore={setcurrentscore}
        highestScore={highestScore}
        sethighestScore ={sethighestScore}
      />
    </div>
  );
}

export default App;
