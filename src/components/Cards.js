import React, {useState} from "react";
import cardscss from "../styles/Cards.module.css"
import { data } from "../Assets/data";

// Randomization of array elelmets 
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
function Cards(){
    const [imageState, setimagesState] = useState(data);

    const photoClicked = ()=>{
        let newDataSet = []
        newDataSet = [...shuffleArray(data)]
        setimagesState(newDataSet);
    }
    return(
        <div className={cardscss.cards}>
            {data.map((item)=>
                <div className={cardscss.card} key={item.id} >
                    <img src={require(`../images/${item.url}`).default} alt="pokemon" onClick={photoClicked} />
                    <h4>{item.url}</h4>
                </div>
                )
            }
        </div>
    )
}

export default Cards