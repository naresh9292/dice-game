import { useState } from "react";

const RollDice = () => {
    const [currentDice,setCurrentDice] = useState(1);

    const generateRandomNum = (min,max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };

    const rollDice = () => {
        const randomNumber = generateRandomNum(1,7);

        setCurrentDice((prev)=> randomNumber);
    };
    return (
        <div className="" onClick={rollDice}>
            <img src={`/dice/dice_${currentDice}.png`} />
        </div>
    )
}

export default RollDice;