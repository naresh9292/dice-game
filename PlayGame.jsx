import { Link } from "react-router-dom";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import { useState } from "react";

function PlayGame() {
    const [score,setScore] = useState(0);
    const [selectedNum,setSelectedNum] = useState();
    const [currentDice,setCurrentDice] = useState(1);
    const [error,setError] = useState();

    const generateRandomNum = (min,max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };

    const rollDice = () => {
        if(!selectedNum) {
            setError("You have not selected any number");
            return;
        };

       

        const randomNumber = generateRandomNum(1,7);

        setCurrentDice((prev)=> randomNumber);

        if (selectedNum === randomNumber) {
            setScore((prev)=> prev + randomNumber)
        } else {
            setScore((prev)=> prev - 2)
        }

        setSelectedNum(undefined);
    };

    const resetScore = () => {
        setScore(0);
    }


    return (
        <div className="container">
            <div className="game-head">
                <div>
                     <TotalScore score={score} />
                </div>
                <div>
                   <NumberSelector error={error} setError={setError} selectedNum={selectedNum} setSelectedNum={setSelectedNum}  />
                </div>
            </div>
            <main>
                <div className="sec-one">
                    <div className="dice-12">
                       <RollDice currentDice={currentDice} rollDice={rollDice} />
                    </div>
                    <p className="text-xl ml-5 mt-4 font-bold">Click On Dice To Roll</p>
                    <div>
                        <button onClick={resetScore} className="btn-1">Reset Score</button>
                    </div>
                    <div>
                        <Link to="/rule"><button className="btn-2">Show Rules</button></Link>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default PlayGame;