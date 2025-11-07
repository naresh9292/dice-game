import { useState } from "react";

const RollDice = ({currentDice,setCurrentDice,rollDice}) => {
    

    
    return (
        <div className="" onClick={rollDice}>
            <img src={`/dice/dice_${currentDice}.png`} />
        </div>
    )
}

export default RollDice;