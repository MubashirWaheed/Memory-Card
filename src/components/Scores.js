import React from "react";
import scorescss from '../styles/Scores.module.css';

const message = "Get points by clicking on an image but don't click on any more than once!."

function Scores(props){
    const {currentscore,highestScore} = props

    return(
        <div>
            <div className={`${scorescss["intro-section"]}`}>
                <p className={scorescss.intro}>Welcome to the memory card game.</p>
                <p>{message}</p>
            </div>
            <div className={scorescss.test}>
                <p className={scorescss.scores}>Current score: {currentscore}</p>
                <p className={scorescss.scores}>Highest score: {highestScore}</p>
            </div>
        </div>
    )
}
export default Scores