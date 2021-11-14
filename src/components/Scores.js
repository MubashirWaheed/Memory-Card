import React from "react";
import scorescss from '../styles/Scores.module.css';

function Scores(props){
    const {currentscore,highestScore} = props

    let message = "Lorem ipsum consectetur adipisicing elit. Hic, modi istefugiat? velit labore animi eaque, quo molestias fugit reiciendis iusto ducimus soluta, ad mis numquam. Perferendis, ducimus neque veniam."

    return(
        <div>
            <div className={`${scorescss["intro-section"]}`}>
                <p className={scorescss.intro}>Wellcome to the memory card game.</p>
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