import React, {useState,useEffect} from "react";
import cardscss from "../styles/Cards.module.css"
import { data } from "../Assets/data";


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function Cards(props){
    const [imageState, setimagesState] = useState(JSON.parse(JSON.stringify(data)));
    const {currentscore, setcurrentscore, highestScore, sethighestScore} = props
 
    function restart(){
        setcurrentscore(0);
        setimagesState(JSON.parse(JSON.stringify(data)));
    }

    const photoClicked = (id)=>{
        for(let x = 0; x< data.length-1; x++){
            if(imageState[x].id === id && imageState[x].clicked === false){
                let list = [...imageState];
                list[x].clicked = true;
                setimagesState(JSON.parse(JSON.stringify(list)));
                setcurrentscore(currentscore + 1);
                setimagesState(JSON.parse(JSON.stringify(shuffleArray(imageState))))
                break;
            }else if(imageState[x].id === id && imageState[x].clicked === true){
                if(currentscore > highestScore) sethighestScore(currentscore); 
                // call a function that restarts the game 
                restart();
                break;
            }
        }
    }
    return( 
        <div className={cardscss.cards}>
            {imageState.map(item =>
                <div className={cardscss.card} key={item.id} >
                    <img src={require(`../images/${item.url}`).default} alt="pokemon" onClick={()=>photoClicked(item.id)} />
                    <h4>{item.url}</h4>
                </div>
                )
            }
        </div>
    )
}

export default Cards